const path = require("path");

module.exports = (pathStr) => {
  return path.resolve(process.cwd(), pathStr);
};
