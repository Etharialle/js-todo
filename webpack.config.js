const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },
    //stats: {
    //    orphanModules: true,
    //    outputPath: true,
    //    chunkGroupChildren: true,
    //    chunkGroups: true,
    //},
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "head",
            scriptLoading: "defer",
        }),
    ],
};
