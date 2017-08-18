let webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: "./web/dev/index.js",
    output: {
        path: __dirname,
        filename: "./web/public/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    }
};