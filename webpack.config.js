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
        ]
      }
    }]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
}

// old command from package.json to run babel
// "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch"