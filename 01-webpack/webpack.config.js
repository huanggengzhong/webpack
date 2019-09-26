const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') // 所有输出文件的目标路径, path直接操作是不行的,要引入path模块,并调用其中的resolve方法
  },
  mode: 'development' // 设置mode
}
