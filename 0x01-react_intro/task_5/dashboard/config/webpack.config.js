const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // Support both .js and .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,       // CSS handling
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Images
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            name: "index.html",
            inject: false,
            template: "./dist/index.html",
        }),
    ],
};