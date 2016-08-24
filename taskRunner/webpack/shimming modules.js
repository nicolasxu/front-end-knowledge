var source = "https://webpack.github.io/docs/shimming-modules.html";


// 1. You can use imports-loader
//    example:
"file.js expect a global variable $ and you have a module jquery that should be used."
require("imports?$=jquery!./file.js")

"file.js expect its configuration on a global variable xConfig and you want it to be {value:123}."
require("imports?xConfig=>{value:123}!./file.js")

"→file.js expect that this is the global context. "
require("imports?this=>window!./file.js") 
//or 
require("imports?this=>global!./file.js")




// 2. Use ProvidePlugin
//    This plugin makes a module available as a variable in every module.
//    Example: Make $ and jQuery available in every module without writing require("jquery").
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
})



/**** EXPORTING ****/

// 1. Use exports-loader
//    This loader exports variables from inside the file.

"The file sets a variable in the global context with var XModule = ...."
var XModule = require("exports?XModule!./file.js")

"The file sets multiple variables in the global context with var XParser, Minimizer."
var XModule = require("exports?Parser=XParser&Minimizer!./file.js"); // XModule.Parser; XModule.Minimizer





/**** Fix broken module ****/

// Broken AMD

require("imports?define=>false!./file.js")

// Broken CommonJs

require("imports?require=>false!./file.js")

// Don't parse already webpacked file

{
    module: {
        noParse: [
            /XModule[\\\/]file\.js$/,
            path.join(__dirname, "web_modules", "XModule2")
        ]
    }
}
// Note: exports and module are still available and usable. 
// You may want to undefine them with the imports-loader.




// script-loader
/*
This loader evaluates code in the global context, just like you would 
add the code into a script tag. In this mode every normal library should 
work. require, module, etc. are undefined.

*/


/**** EXPOSING ****/
// There are cases where you want a module to export itself to the global context.
// Don’t do this unless you really need this. (Better use the ProvidePlugin)

"Expose file.js as XModule to the global context"
require("expose?XModule!./file.js")

require('expose?$!expose?jQuery!jquery');

   ...

	$(document).ready(function() {
		console.log("hey");
	})



