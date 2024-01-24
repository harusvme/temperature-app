const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        app: path.join(__dirname, "src", "main.tsx"),
    },
    target: "web",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html",
        }),
    ],
};
