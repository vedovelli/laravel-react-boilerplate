
const path = require("path");

module.exports = {
  entry: ['./src/js/app.js'],
  output: {
    path: path.resolve(__dirname, '../../../../public/react'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
