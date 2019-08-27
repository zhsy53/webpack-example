const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    port: 8899,
    hot: true,
    open: true,
    overlay: { errors: true }
  }
});
