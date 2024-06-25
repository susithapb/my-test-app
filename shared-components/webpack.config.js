const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
  },
  devServer: {
    port: 3002,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    new ModuleFederationPlugin({
      name: 'sharedComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './Label': './src/components/Label',
        './TextInput': './src/components/TextInput',
        './NumberInput': './src/components/NumberInput',
        './Button': './src/components/Button',
        './Dropdown':'./src/components/Dropdown',
      },
      shared: {...dependencies,},
    }),
  ],
};
