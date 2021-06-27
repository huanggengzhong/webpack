const resolveApp = require("./path.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    hotOnly: true,
    compress: true,
    contentBase: resolveApp("./why"),
    watchContentBase: true,
    proxy: {
      "/why": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/why": "",
        },
        secure: false,
        changeOrigin: true,
      },
    },
    historyApiFallback: {
      rewrites: [{ from: /abc/, to: "/index.html" }],
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
