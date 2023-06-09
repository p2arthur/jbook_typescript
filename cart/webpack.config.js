const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: { port: 8082 },
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
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: { './CartShow': './src/bootstrap' },
      shared: ['faker'],
    }),
    new HtmlWebPackPlugin({ template: './public/index.html' }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
