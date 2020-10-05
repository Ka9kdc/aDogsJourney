const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './game/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader',
      },
    ],
  },
}
