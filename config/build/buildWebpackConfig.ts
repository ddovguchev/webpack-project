import webpack from "webpack";
import path from "path";

import buildPlugins from "./buildplugins";
import buildLoader from "./buildLoders";
import buildResolvers from "./buildResolver";
import BuildOptions from "./type/config";

const buildWebpackConfig = ({
  mode,
  paths,
}: BuildOptions): webpack.Configuration => {
  return {
    mode,
    devtool: "inline-source-map",
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(paths.html),
    module: {
      rules: buildLoader(),
    },
    resolve: buildResolvers(),
  };
};

export default buildWebpackConfig;
