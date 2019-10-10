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
  ],
  module:{
    rules:[
      {
        test:/\.css$/, //"\"是转义,后面意思是以什么结尾.
        use:['style-loader','css-loader']

      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.s(a|c)ss$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  }
 
}