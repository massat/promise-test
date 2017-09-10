module.exports = {
  context: __dirname + '/src',
  entry: {
    'index': './index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
};
