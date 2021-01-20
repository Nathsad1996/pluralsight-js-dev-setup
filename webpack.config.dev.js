import path from 'path';

export default {
  debug: false,
  devtool: 'inline-source-map',
  noInfo: true,
  entry: [
    path.resolve(import.meta.url, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(import.meta.url, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}