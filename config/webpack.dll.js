const libraryName = "[name]_dll_[hash]";

const path = require("path");
const dllPath = path.resolve(__dirname, "../dll");

const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    lib: ["vue", "vue-router"]
  },
  output: {
    filename: "[name].dll.js",
    path: dllPath,
    library: libraryName
  },
  plugins: [
    new webpack.DllPlugin({
      name: libraryName, //must same as output.library
      path: path.join(dllPath, "[name].manifest.json")
    })
  ]
};
