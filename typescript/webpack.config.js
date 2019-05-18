const webpack = require('webpack');

const DEBUG = process.env.NODE_ENV === 'development';

const clientConfig = {
  entry: './src/index',

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },

  devtool: DEBUG ? 'eval-source-map' : 'cheap-module-source-map',

  resolve: {
    extensions: [
      '.ts',
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: './src/tsconfig.json',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

module.exports = clientConfig;
