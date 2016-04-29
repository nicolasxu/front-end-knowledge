/*
The plugin will generate an HTML5 file for you that includes 
all your webpack bundles in the body using script tags. Just 
add the plugin to your webpack config as follows:

*/

// source: https://github.com/ampedandwired/html-webpack-plugin

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
  	template: 'html!./index.html' // specify the template for index.html
	})]
};

// This will generate a file dist/index.html containing the following:

/*

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>


 */