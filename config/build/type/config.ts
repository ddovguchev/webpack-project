export type BuildMode = "development" | "production";

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export default interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: Boolean;
}
