import { DEFAULT_SETTINGS } from './Settings';

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

function buildWildcardFileTree() {
  const folderTree: FolderTree = {
    childFolders: {},
    childFiles: [],
  };
  for (const file of wildcardCollection) {
    let cur = folderTree;
    for (const [idx, segment] of file.pathSegments.entries()) {
      const nextTree = cur.childFolders[segment] ?? {
        childFolders: {},
        childFiles: [],
      };
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

export const wildcardCollection: readonly WildcardFile[] = Object.entries(
  wildcardFiles,
).map(([filepath, filecontents]) => new WildcardFile(filepath, filecontents));

export const fileTree = buildWildcardFileTree();
