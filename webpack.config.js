const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const Assets = require('./src/assets')

module.exports = {
    entry:{main:['./src/main.js', '@babel/polyfill']},
    output:{
        filename:'js/bundle.js',
        path:path.join(__dirname, '/dist')
    },
    devServer:{
        port:4000,
        compress:true
    }
    ,module:{
        rules:[
            //  {
            //      test: /\.js$/,
            //      exclude:/node_modules/,
            //      use:{
            //          loader: 'babel-loader'
            //      }
            //  },
            {
                test:/\.css$/,
                use:[
                {loader: MiniCssExtractPlugin.loader},
                {loader:'css-loader'}
                ]
                    
                
            },
            {
                test:/\.scss$/,
                use:[
                {loader: MiniCssExtractPlugin.loader},
                {loader:'css-loader'},
                {loader:'sass-loader'}

                ]
                    
                
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true,
                useShortDoctype:true,
                removeEmptyAttributes:true,
                removeAttributeQuotes:true,
                removeOptionalTags:true,
                removeTagWhitespace:true,
                
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/estilos-bundle.css'
        }),
        new CopyPlugin({
            patterns: Assets.map(elem=>{
                return{
                    from: path.resolve(__dirname, `node_modules/${elem}`),
                    to:  path.resolve(__dirname,'dist/libs')
                }
            })
        })
    ],
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                    name:'common',
                    chunks:'all'
                }
            }
        }
    }
}