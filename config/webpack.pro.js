const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const AutoDllPlugin = require("autodll-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:4].css"
    })
    // new AutoDllPlugin({
    //   inject: true,
    //   debug: true,
    //   filename: "[name]_[hash].js",
    //   path: "./dll",
    //   entry: {
    //     vendor: ["vue", "vue-router", "vuex", "react", "react-dom"]
    //   }
    // }),
  ]
});
