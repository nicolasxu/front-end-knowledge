
var webpack = require('webpack');

module.exports = {
  /* ... */

  externals: {
    'jquery': '$'
  }
  /* ... */

};

// Note the new externals key that tells Webpack 
// to inject the global window.$ variable whenever 
// Backbone or Marionette reference require('jquery') in their imports.

// source: https://marionette.gitbooks.io/marionette-guides/content/en/getting_started/installing_marionette.html