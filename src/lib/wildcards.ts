export const wildcardFiles = import.meta.glob('/wildcards/**/*.txt', {eager: true, as:'raw'});

export class WildcardFile {
  readonly wildcardEntries: readonly string[] = this.filecontents.split('\n');
  readonly filename: string = this.filepath.replace(/^.*\//, '');

  constructor(
    readonly filepath: string,
    private readonly filecontents: string,
  ) {}
}

export const wildcardCollection: readonly WildcardFile[] = Object.entries(
  wildcardFiles,
).map(([filepath, filecontents]) => new WildcardFile(filepath, filecontents));
