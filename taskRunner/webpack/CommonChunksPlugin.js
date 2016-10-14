
/*

CommonChunksPlugin is only useful when you load js files in more than one chunks. 

You may see a rather major issue: both our components need 
jQuery and Mustache, which means these dependencies are getting
duplicated in our chunks, which is not what we want. By default
Webpack will perform very little optimizations. But it packs 
in a lot of firepower to help you turn things around, 
in the form of plugins.

Plugins differ from loaders in the sense that instead of only 
executing on a certain set of files, and being more of a “pipe”, 
they execute on all files and perform more advanced actions, 
that aren’t necessarily related to transformations. Webpack 
comes will a handful of plugins to perform all various kinds 
of optimizations. The one that interests us in this case is 
the CommonChunksPlugin: it analyzes your chunks for recurring 
dependencies, and extracts them somewhere else. It can be a 
completely separate file (like vendor.js) or it can be 
your main file.

 */
// document: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin

var webpack = require('webpack');

module.exports = {
    entry:   './src',
    output:  {
      // ...
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:      'main', // Move dependencies to our 'main' chunk. It is the name of the chunk.
            filename:  'main_commons.js', // this is the name of main chunk file name. Must load this
                                         // before all other chunk files. 
            children:  true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
            async: true // (create an async commons chunk)
        }),
    ],
    module:  {
      // ...
    }
};

/*
You can also make common dependencies be loaded asynchronously 
by not providing a common chunk name and instead specifying async: true.
 */
