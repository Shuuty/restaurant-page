const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { type, userInfo } = require('os');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
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