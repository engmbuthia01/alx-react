const path = require('path');

module.exports = {
    entry: './src/index.js', // starting point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map', // for debugging
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true, // hot reloading
        open: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // CSS support
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // keep things simple
                        },
                    },
                ],
            },
        ],
    },
};