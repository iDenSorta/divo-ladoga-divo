const path = require("path");
module.exports = {
mode: "development",
entry: "./src/index.js",
devtool:'source-map',
output: {
filename:"main.js",
path: path.resolve(__dirname, "dist")
},
module: {
    rules: [
        {
        test: /\.less$/,
        use: ["style-loader","css-loader","less-loader"]
        }
    ]
}


};