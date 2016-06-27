'use strict';
// webpack.config.js


var webpack = require('webpack'),
	path = require('path');

var entryBasePath  = __dirname + '/app';
var outputBasePath = __dirname + '/dist';

module.exports = {
	// webpack config object
	context: entryBasePath,
	entry:{
		app: ['webpack/hot/dev-server', './bootstrap.js']
	},
	output: {
		path: outputBasePath,
		filename: './bundle.js',
		sourceMapFilename: '[file].map' // set source map output name rule
	},
	devtool: 'source-map', // enable source map
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	], 
	module: {
		loaders: [
			{test: /\.scss$/, loader: 'style!css!sass'}, 
			{ test: /\.tpl$/,  loader: 'raw' }
		]
	}
}