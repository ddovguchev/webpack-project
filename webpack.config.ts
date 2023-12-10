import path from "path";

import { BuildEnv, BuildMode, BuildPath } from "./config/build/types/config";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";

  const PORT = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};
