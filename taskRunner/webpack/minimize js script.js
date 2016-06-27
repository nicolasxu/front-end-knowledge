// 'use strict';
// // webpack.config.js

// var webpack = require('webpack');
// var	path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// var entryBasePath  = __dirname;
// var outputBasePath = __dirname + '/../dist';

// module.exports = {
// 	// webpack config object
// 	context: entryBasePath,
// 	entry:{
// 		app: ['webpack/hot/dev-server', './appEntry.js']
// 	},
// 	output: {
// 		path: outputBasePath,
// 		filename: './bundle.js',
// 		sourceMapFilename: '[file].map' // set source map output name rule
// 	},
// 	devtool: 'source-map', // enable source map
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		// new HtmlWebpackPlugin({template: 'html!index.html'}),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}) 
		// above line line enable the minification plugin
	], 
// 	module: {
// 		loaders: [
// 			{test: /\.scss$/, loader: 'style!css!sass'}, 
// 			{ test: /\.tpl$/,  loader: 'raw' },
// 			{test: /\.html$ /, loader: 'html'}
// 		]
// 	}
// }