const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
        },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
    ],
};