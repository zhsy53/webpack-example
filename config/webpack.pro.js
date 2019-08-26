const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[chunkhash:4].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({ template: path.join(__dirname, "../src/index.html") })
  ]
};
