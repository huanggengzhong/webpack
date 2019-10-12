const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin}=require('clean-webpack-plugin')

const CopyWebpackPlugin =require('copy-webpack-plugin')

const webpack = require('webpack');

// webpack的配置文件遵循着CommonJS规范
module.exports = {
  entry: ['@babel/polyfill','./src/main.js'],
  // entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  mode: 'production',
  devServer: {
    open: true,
    port: 3000,
    compress: true
    // contentBase:'./src'
  },
  plugins: [
    new HtmlWebpackPlugin([{
      fileName: 'index.html',
      template: './src/index.html'
    }]),
    
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from:path.join(__dirname,'assets'),
      to:'assets'
    }]),
    new webpack.BannerPlugin('庚中真牛逼')
  
  ],
  module: {
    rules: [
      {
        test: /\.css$/, //"\"是转义,后面意思是以什么结尾.
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test:/\.(jpg|jpeg|png|bmp|gif)$/,
      //   use:['file-loader']
      // },
      // //上面和下面习惯会分两行
      // {
      //   test:/\.(woff|woff2|eot|svg|ttf)$/,
      //   use:'file-loader'//只有一个可以不用数组
      // },

      // 使用url-loader之后重新写
      {
        test: /\.(jpg|jpeg|png|bmp|gif)$/,
        use: {
          //use可以写成数组和可以写成字符串,甚至可以写成对象
          loader: 'url-loader',
          options: {
            //配置
            limit: 5 * 1024, //限制5kb,意思小于5kb会转成base64
            outputPath: 'images', //存放的目录,相应的显示目录也会加上
            name: '[name]-[hash:4].[ext]' //[name]是自己的名字,[hash]是哈希值,会随机生成,[ext]是保留原来的后缀名
          }
        }
      },

      {
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: ['@babel/env'], //预设
          //   plugins: [
          //     '@babel/plugin-proposal-class-properties',
          //     '@babel/plugin-transform-runtime'
          //   ]//配置插件
          // }
        },
        exclude:/node_modules/ //意思node_modules里的js文件无需打包
      }
    ]
  },
  devtool:'cheap-module-source-map'
}
