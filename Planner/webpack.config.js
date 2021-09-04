const { resolve } = require('path');
const cssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new cssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new htmlWebpackPlugin({
            template: resolve(__dirname,'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg?g|mp3)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[path][name].[ext]',
                      },
                    },
                  ],
        },
            {
                test: /\\.css$/,
                use: [cssExtractPlugin.loader, 'css-loader']

        },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [cssExtractPlugin.loader,'css-loader','sass-loader']
        }]
    }
    
};