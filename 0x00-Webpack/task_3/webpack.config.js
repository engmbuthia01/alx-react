const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    }
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
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
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    performance: {
        hints: false // disable asset size warnings
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 8564,
        open: true,
    },
    mode: 'development',
    devtool: 'inline-source-map', // enables source maps
    optimization: {
        splitChunks: {
            chunks: 'all', // splits jQuery/Lodash into separate vendor bundle
        },
    },
}
