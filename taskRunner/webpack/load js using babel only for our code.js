
// install babel-loader
/*
$ npm install babel-loader --save-dev

$ npm install babel-core babel-preset-es2015 --save-dev
*/

/*

.babelrc { "presets": ["es2015"] }

Now that Babel is setup and configured we can update 
our configuration: what do we want? We want Babel to 
run on all files that end in .js, but as Webpack 
traverses all dependencies we want to avoid Babel 
running on third-party code like jQuery, so we can 
filter this a bit more. Loaders can have both an 
include or an exclude rule.

 */

module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/src', // here
            }
        ],
    }
};
