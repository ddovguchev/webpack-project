import webpack from "webpack";

import { buildPlugins } from "./buildplugins";
import { buildLoader } from "./buildLoders";
import { buildResolvers } from "./buildResolver";
import { buildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types/config";

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};

export default buildWebpackConfig;
