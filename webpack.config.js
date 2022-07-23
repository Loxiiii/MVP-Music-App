// examine all the modules, intelligently transform them, bundle them together

//need to know the entry point, the transformations and the location to place the bundle

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const source = path.join(__dirname, '/client/src/App.jsx');
const destination = path.join(__dirname, '/client/dist');

module.exports = {
  entry: source,
  output: {
    filename: 'bundle.js',
    path: destination
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ],


    // [
    //   {
    //       test:/\.css$/,
    //       use:['style-loader','css-loader']
    //   }
    // ]
  }
}