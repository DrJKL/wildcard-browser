import _ from 'lodash';
import { DEFAULT_SETTINGS } from './Settings';

const wildcardFiles = import.meta.glob('/wildcards/**/*.txt', {
  eager: true,
  as: 'raw',
});

export class WildcardFile {
  readonly wildcardEntries: readonly string[] = this.filecontents
    .split('\n')
    .filter(Boolean);
  readonly filename: string = this.filepath
    .replace(/^.*\//, '')
    .replace(/\.txt$/, '');

  private selectedEntry = -1;

  constructor(
    readonly filepath: string,
    private readonly filecontents: string,
  ) {}

  pathSegments() {
    return this.filepath.split(/[/\\]/).filter(Boolean);
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

export const wildcardCollection: readonly WildcardFile[] = Object.entries(
  wildcardFiles,
).map(([filepath, filecontents]) => new WildcardFile(filepath, filecontents));

function joiningArrays(objValue: unknown, srcValue: unknown) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

export interface FolderTree {
  [key: string]: FolderTree | WildcardFile[];
}

function buildWildcardFileTree() {
  let folderTree: FolderTree = {};
  for (const file of wildcardCollection) {
    const segments = file.pathSegments();
    const temp: FolderTree = {
      [segments[segments.length - 2]]: [file],
    };
    segments.splice(segments.length - 2, 2);
    const subtree = segments.reduceRight((acc, cur) => ({ [cur]: acc }), temp);

    folderTree = _.mergeWith(subtree, folderTree, joiningArrays);
  }
  return folderTree;
}

export const fileTree = buildWildcardFileTree();
