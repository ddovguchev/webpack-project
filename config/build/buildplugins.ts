import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const buildPlugins = (template: string): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template,
    }),
    new webpack.ProgressPlugin(),
  ];
};

export default buildPlugins;
