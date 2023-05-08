const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: { port: 8080 },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'CartShow@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebPackPlugin({ template: './public/index.html' }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
