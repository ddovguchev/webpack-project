export type BuildMode = "development" | "production";

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: Boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
