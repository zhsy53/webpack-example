const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash:4].js"
  }
});
