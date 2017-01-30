var webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
  currentEnv = '"production"';
} else {
  currentEnv = '"development"';
}

module.exports = {
  entry: './src/main',
  output: {
    path: './build',
    filename: 'main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: currentEnv
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}
