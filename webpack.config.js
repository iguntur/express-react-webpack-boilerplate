'use strict';
const path = require('path');
const webpack = require('webpack');

const dir = {
	basePath: (...fp) => path.resolve(__dirname, ...fp || '')
};

module.exports = {
	devtool: 'source-map',

	entry: {
		app: [
			'webpack-hot-middleware/client',
			dir.basePath('app/components/App.jsx')
		]
	},

	output: {
		path: dir.basePath('public/assets/js'),
		filename: '[name].js',
		publicPath: '/public/'
	},

	module: {
		rules: [{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: ['react', 'es2015']
			}
		}]
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
};
