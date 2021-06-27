const presets = [["@babel/preset-env"], ["@babel/preset-react"]];
const plugins = [];
if (process.env.NODE_ENV !== "production") {
  plugins.push(["react-refresh/babel"]);
}
module.exports = {
  presets,
  plugins,
};
