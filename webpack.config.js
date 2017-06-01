var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin({
    filename: 'css/styles.css'
});

var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                use: {
                   loader: 'babel-loader',
                   options: {
                        presets: ['env', 'stage-2']
                   }
                }
            },
            { 
                test: /\.scss$/,
                    use: extractCSS.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader',
                })
            }
            // { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        extractCSS
    ]
}

if (process.env.NODE_ENV === "production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV) 
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config