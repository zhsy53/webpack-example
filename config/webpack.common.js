const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({ template: path.join(__dirname, "../src/index.html") }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "../src"),
        // exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
    // TODO
    // noParse: content => /node_modules/.test(content)
  },
  resolve: {
    modules: [
      // 优化模块查找路径
      path.resolve(__dirname, "../src"),
      // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
      path.resolve(__dirname, "../node_modules")
    ],
    alias: {},
    extensions: [".js", ".vue"]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          minSize: 0,
          minChunks: 1,
          enforce: true,
          name: "lib"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: false
  }
};
