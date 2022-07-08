const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 8000
    },
    entry: {
        home: './src/script.js',
        saltCurve: './src/salt-curve/script.js',
        scheduling: './src/scheduling/script.js',
        traceability: './src/traceability/scripts/main.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',

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
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: "./src/scheduling/index.html",
            filename: "scheduling/index.html",
            chunks: ['scheduling']
        }),
        new HtmlWebpackPlugin({
            template: "./src/salt-curve/index.html",
            filename: "salt-curve/index.html",
            chunks: ['saltCurve'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/scheduling/index.html",
            filename: "scheduling/index.html",
            chunks: ['scheduling']
        }),
        new HtmlWebpackPlugin({
            template: "./src/traceability/index.html",
            filename: "traceability/index.html",
            chunks: ['traceability']
        }),
    ]

}