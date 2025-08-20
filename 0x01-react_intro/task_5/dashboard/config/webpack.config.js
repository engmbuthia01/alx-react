const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: 'true',
        open: 'true',
        port: 3000
    },
}