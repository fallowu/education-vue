var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require("vue-loader");

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/main.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var plugins = [
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common'),
    //将样式统一发布到style.css中
    new ExtractTextPlugin({
        filename: "style.css", 
        allChunks: true
    })
    // ,// 使用 ProvidePlugin 加载使用率高的依赖库
    // new webpack.ProvidePlugin({
    //   $: 'webpack-zepto'
    // })
];

module.exports = {
    //项目的文件夹
    entry: {
        build: APP_PATH,
    },
    //输出文件名
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        // 指向异步加载的路径
        // 异步加载地址
        publicPath: __dirname + '/build/',
        // 非主文件的命名规则
        chunkFilename: '[id].build.js?[chunkhash]'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                css: ExtractTextPlugin.extract({
                  use: ['css-loader'],
                  fallback: 'vue-style-loader'
                }),
                less: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader'],
                  fallback: 'vue-style-loader'
                })
              }
            }
          },
        ]
        }, {
            test: /\.css|scss$/,
            loader:"style-loader!css-loader!sass-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            use: 'url?limit=40000'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    plugins: plugins

};