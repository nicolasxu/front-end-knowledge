/* what is loader */
var answer = "Loaders are transformations that are applied on a \ 
 resource file of your app. They are functions (running in node.js) \
 that take the source of a resource file as the parameter and return  \ 
 the new source."
// loader with param
	require("loader?with=parameter!./file");

// The loaders are called from right to left.
	var final_loader = "The final loader is expected to return JavaScript; \ 
	 each other loader can return source in arbitrary format, which is \ 
	 passed to the next loader."

/* url-loader */
	var url-loader = "url: The url loader works like the file loader, " +
	"but can return a Data Url if the file is smaller than a limit."
	" If iel size is smaller than limit, then load the image file inline "

	require("url?limit=10000!./file.png");
	// => DataUrl if "file.png" is smaller that 10kb

/* html-loader */
	/*
	Take html file name as input, output html string.
  HTML is minimized when the compiler demands.
	Image loader is required if
	<img src="image.png"> is required (require("./image.png")).

	*/

/* raw-loader */
	var fileContent = require("raw!./file.txt");
	// => returns content file.txt content as string 

/* file-loader */
	/*
	It takes a file name, and output a actual file.
	You can use it to copy a file to output directory. 

	e.g.:
	var url = require("file!./file.png");
	// => emits file.png as file in the output directory and returns the public url
	// => returns i. e. "/public-path/0dcbbaa701328a3c262cfd45869e351f.png"
	
	*/

/* image-webpack-loader */
	/*
	It does more than just read the binary content of image file.
	It Minify PNG, JPEG, GIF and SVG images with imagemin
	*/

/* sass-loader */
	/*
	Function:
	Take scss file, return css string 
	The sass-loader requires node-sass and webpack as peerDependency. 
	Thus you are able to specify the required versions accurately.
	Install:
	npm install sass-loader node-sass webpack --save-dev

	*/

/* css-loader */
	/*
	var css = require("css!./file.css");

	The CSS loader takes a CSS file and returns the CSS with imports and url(...) 
	resolved via webpack's require functionality:

	var css = require("css!./file.css");
	=> returns css code from file.css, resolves imports and url(...) 
	It doesn't actually do anything with the returned CSS. 
	The result will not added to your page. 
	*/

	/* url(image.png) => require("./image.png")
	   url(~module/image.png) => require("module/image.png")
	*/

/* style-loader */
	/*
	The CSS loader takes a CSS file and returns the CSS with imports and 
	url(...) resolved via webpack's require functionality:

	var css = require("css!./file.css");
	// => returns css code from file.css, resolves imports and url(...) 
	It doesn't actually do anything with the returned CSS.

	The style loader takes CSS and actually inserts it into the page so 
	that the styles are active on the page
	*/

