const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['css-loader', 'style-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource', // handles images
                generator: {
                    filename: 'images/[name][ext]' // output folder for images
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { progressive: true },
                            optipng: { enabled: true },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false }
                        }
                    }
                ],
                enforce: 'pre'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // use our custom HTML template
            filename: 'index.html',
            inject: 'body'
        })
    ],
    performance: {
        hints: false // disable asset size warnings
    }
};