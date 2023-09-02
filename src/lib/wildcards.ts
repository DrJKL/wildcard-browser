import { from } from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  mergeWith,
  scan,
  shareReplay,
} from 'rxjs/operators';
import { DEFAULT_SETTINGS } from './Settings';
import { load } from 'js-yaml';
import { isArray, merge, sortedIndexBy } from 'lodash';

export interface FolderTree {
  childFolders: { [key: string]: FolderTree };
  childFiles: WildcardFile[];
}

export class WildcardFile {
  readonly pathSegments: readonly string[];
  readonly wildcardEntries: readonly string[];
  readonly filename: string;

  private selectedEntry = -1;

  constructor(readonly filepath: string, filecontents: string) {
    this.filename = this.filepath.replace(/^.*\//, '');
    this.wildcardEntries = filecontents.split(/\r?\n/).filter(Boolean);
    this.pathSegments = this.filepath.split(/[/\\]/).filter(Boolean);
  }

  toPlaceholder(settings = DEFAULT_SETTINGS) {
    const { basePath, wildcardWrap } = settings;
    return `${wildcardWrap}${this.filepath
      .replace(new RegExp(`^${basePath}/`), '')
      .replace(/\.[^.]+$/, '')}${wildcardWrap}`;
  }

  toDynamicPromptSnippet() {
    return `{${this.wildcardEntries.join('|')}}`;
  }

  setRandomEntry() {
    this.setEntry(Math.floor(Math.random() * this.wildcardEntries.length));
  }

  setEntry(index: number) {
    this.selectedEntry = Math.max(
      0,
      Math.min(
        index, //
        this.wildcardEntries.length - 1,
      ),
    );
  }
  getSelectedEntry() {
    if (
      this.selectedEntry < 0 ||
      this.selectedEntry >= this.wildcardEntries.length
    ) {
      return '';
    }
    return this.wildcardEntries[this.selectedEntry];
  }

  toString(): string {
    return `🃏: ${this.filepath}`;
  }
}

function emptyFolderTree(): FolderTree {
  return {
    childFolders: {},
    childFiles: [],
  };
}

function incrementalWildcardFileTree(
  folderTree: FolderTree,
  file: WildcardFile,
) {
  let cur = folderTree;
  for (const [idx, segment] of file.pathSegments.entries()) {
    const nextTree = cur.childFolders[segment] ?? emptyFolderTree();
    cur.childFolders[segment] = nextTree;
    cur = nextTree;
    if (idx === file.pathSegments.length - 1) {
      const insertionIndex = sortedIndexBy(
        nextTree.childFiles,
        file,
        'filepath',
      );
      nextTree.childFiles.splice(insertionIndex, 0, file);
    }
  }
  return folderTree;
}

const wildcardFiles = import.meta.glob('@wildcard-browser/wildcards/**/*.txt', {
  as: 'raw',
});

const wildcardYamls = import.meta.glob(
  '@wildcard-browser/wildcards/**/*.yaml',
  {
    as: 'raw',
  },
);

type YamlStructure = { [key: string]: YamlStructure | string[] };

async function processYamls() {
  let folderTree: YamlStructure = {};
  await Promise.all(
    Object.entries(wildcardYamls).map(async ([filename, yamlContents]) => {
      const realContents = await yamlContents();
      try {
        const yamlTree = load(realContents, { filename, json: true });
        merge(folderTree, yamlTree);
        return yamlTree;
      } catch (err: unknown) {
        console.error(err);
      }
    }),
  );
  const yamlsAsWildcardFiles = transformYamlToFileStructure([[], folderTree]);
  return yamlsAsWildcardFiles;
}

function transformYamlToFileStructure(
  root: [string[], YamlStructure],
): readonly WildcardFile[] {
  const stack: [string[], YamlStructure][] = [root];
  const traversed: WildcardFile[] = [];
  let curr;

  while (stack.length) {
    curr = stack.pop();
    if (!curr) {
      break;
    }

    const [path, contents] = curr;

    const currEntries = Object.entries(contents);

    currEntries
      .filter(([_key, val]) => isArray(val))
      .map(([key, val]) => {
        if (!isArray(val)) {
          throw new Error(`This should be an array: ${val}`);
        }
        return new WildcardFile([...path, key].join('/'), val.join('\n'));
      })
      .forEach((asFile) => {
        traversed.push(asFile);
      });
    currEntries
      .filter(([_key, val]) => !isArray(val))
      .map(([key, val]): [string[], YamlStructure] => {
        if (isArray(val)) {
          throw new Error(`This shouldn't be an array: ${val}`);
        }
        return [[...path, key], val];
      })
      .forEach((toSearch) => stack.push(toSearch));
  }

  return traversed;
}

const allYamls = processYamls();
const wildcardYamls$ = from(allYamls);

export const wildcardFiles$ = from(Object.entries(wildcardFiles)).pipe(
  mergeMap(([filepath, fileContentsEventually]) =>
    fileContentsEventually().then(
      (filecontents) => [filepath, filecontents] as const,
    ),
  ),
  map(
    ([filepath, filecontents]) =>
      new WildcardFile(filepath.replace(/^.*?\/wildcards\//, ''), filecontents),
  ),
  mergeWith(wildcardYamls$.pipe(concatMap((filesList) => filesList))),
  shareReplay(), // Heavy buffer
);

export const wildcardCollection$ = wildcardFiles$.pipe(
  scan<WildcardFile, readonly WildcardFile[]>((acc, cur) => [...acc, cur], []),
);

export const fileTree$ = wildcardFiles$.pipe(
  mergeWith(wildcardYamls$.pipe(concatMap((filesList) => filesList))),
  scan(incrementalWildcardFileTree, emptyFolderTree()),
);
