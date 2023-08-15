import { DEFAULT_SETTINGS } from './Settings';
import { from, map, scan } from 'rxjs';

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
    this.wildcardEntries = filecontents.split('\n').filter(Boolean);
    this.pathSegments = this.filepath.split(/[/\\]/).filter(Boolean);
  }

  toPlaceholder(settings = DEFAULT_SETTINGS) {
    const { basePath, wildcardWrap } = settings;
    return `${wildcardWrap}${this.filepath
      .replace(new RegExp(`^${basePath}/`), '')
      .replace(/\.[^.]+$/, '')}${wildcardWrap}`;
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

function buildWildcardFileTree(wildcardCollection: WildcardFile[]): FolderTree {
  const folderTree: FolderTree = emptyFolderTree();
  for (const file of wildcardCollection) {
    let cur = folderTree;
    for (const [idx, segment] of file.pathSegments.entries()) {
      const nextTree = cur.childFolders[segment] ?? emptyFolderTree();
      cur.childFolders[segment] = nextTree;
      cur = nextTree;
      if (idx === file.pathSegments.length - 1) {
        nextTree.childFiles.push(file);
      }
    }
  }
  return folderTree;
}

const wildcardFiles = import.meta.glob('/wildcards/**/*.txt', {
  eager: true,
  as: 'raw',
});

export const wildcardCollection$ = from(Object.entries(wildcardFiles)).pipe(
  map(([filepath, filecontents]) => new WildcardFile(filepath, filecontents)),
  scan<WildcardFile, WildcardFile[]>((acc, cur) => [...acc, cur], []),
);

export const fileTree$ = wildcardCollection$.pipe(map(buildWildcardFileTree));
