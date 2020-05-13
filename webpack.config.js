const path = require('path');

var config = {
    entry: './main.js',

    output: {
        path: path.join( __dirname + 'dist' ),
        filename: 'index.js',
    },

    resolve:{
        extensions: ['.js', '.jsx', '.css']
    },
    
    devServer: {
        inline: true,
        port: 8081 // server port
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;