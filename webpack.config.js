const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html'
});
const copyWebpackPlugin = new CopyWebpackPlugin([
    {
        from: './assets',
        to: 'assets'
    }
]);

module.exports = {
    entry: './src/Game.ts',
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [htmlWebpackPlugin, copyWebpackPlugin]
};
