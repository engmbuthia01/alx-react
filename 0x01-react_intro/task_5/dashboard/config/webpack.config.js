const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'), // correct absolute path to src
    output: {
        path: path.resolve(__dirname, '../dist'), // output in dist folder at project root
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // handle both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,       // handle CSS
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // handle images
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // so imports can omit file extensions
    },
    devtool: 'inline-source-map'
};
