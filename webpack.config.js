const path = require("path")

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/,
      options: {
        presets: [
          "@babel/preset-env", 
          "@babel/preset-react"
        ],
        plugins: ["transform-class-properties"]
      }
    }]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
}