'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/../public')));

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (request, response) => {
	return response.sendFile(
		path.join(__dirname, 'views/index.html')
	);
});

module.exports = app;
