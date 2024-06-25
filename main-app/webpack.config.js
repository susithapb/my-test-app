const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {
        sharedComponents: 'sharedComponents@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        ...dependencies
      },
    }),
  ],
  devServer: {
    port: 3000
  },
};
