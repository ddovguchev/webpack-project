import path from "path";
import webpack from "webpack";

import buildWebpackConfig from "./config/build/buildWebpackConfig";

import { BuildMode, BuildPath } from "./config/build/type/config";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
  build: path.resolve(__dirname, "dist"),
};

const mode: BuildMode = "production";
const isDev = mode === "production";

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
