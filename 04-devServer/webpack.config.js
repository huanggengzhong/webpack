const path = require('path');

const HtmlWebpackPlugin=require('html-webpack-plugin')

// webpack的配置文件遵循着CommonJS规范
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer:{
    open:true,
    port:3000,
    compress:true,
    // contentBase:'./src'
  },
  plugins:[
   new HtmlWebpackPlugin({
     fileName:'index.html',
     template:'./src/index.html'
   })
  ]
 
}