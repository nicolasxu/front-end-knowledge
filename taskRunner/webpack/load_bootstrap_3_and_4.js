
/*
Install this npm module first: 

npm install bootstrap-loader --save

You may be asked to install resolve-url-loader, url-loader, imports-loader, and many others. 
detail installation and tutorial please go to: 

https://github.com/shakacode/bootstrap-loader


*/

"add the following to modules to load the fonts"
// ...
  module: {
    loaders: [
      // { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      // { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }, 
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
    ]
  }
// ...