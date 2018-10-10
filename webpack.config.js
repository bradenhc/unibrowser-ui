const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						}
					}
				]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};

module.exports = config;
