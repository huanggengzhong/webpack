const resolveApp = require("./path.js");
const { merge } = require("webpack-merge");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const commonConfig = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolveApp("./build"),
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
    alias: {
      "@": resolveApp("./src"),
      pages: resolveApp("./src/pages"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", //相对路径
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = function(env) {
  console.log(env.production, "env.production");
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";
  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig, config);
  return mergeConfig;
};
