module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build/",
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.png$/,
        loader: "url",
        query: {
          prefix: "/build/",
          limit: "10000"
        }
      }
    ]
  }
}
