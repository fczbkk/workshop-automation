var webpack = require("webpack");

module.exports = {
  entry: {
    app1: "./src/index1.js",
    app2: "./src/index2.js"
  },
  output: {
    path: "./build/",
    filename: "[name].bundle.js",
    publicPath: "/build/"
  }
}
