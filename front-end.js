
function frontEnd () {

	function Javascript_language() {
		function closure() {
			var description = " Accessing outer variable stack from  \
                     			lexical inner scope creates a closure. The outer variable stack is still \
                     			alive even if outer function returns. ";
		  var link = " http://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111200#111200";
		  var snippets = '';
		}

		function bind_function () {
			// Function.prototype.bind(thisArg, arg1, arg2....)
			

			// example: 
			var obj = {
		  method: function(name){
		    	this.name = name;
		  	}
			};
		 
			setTimeout( obj.method.bind(obj, "John"), 100 );
		}

		function strict_mode() {
			// ECMAScript 5 Strict Mode
			// example:
			/*
			
			(function(){
			  "use strict";

			  // Define your library strictly...
			})();
			*/
		
			// detail explanation: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
			// in strict mode:
			// 1. foo = "bar" without defining foo is error
			// 2. eval is not allowed
			// 3. overwriting arguments is not allowed: arguments = [...]; // not allowed
			// 4. with(){} is not allowed
			// 5. Attempts to delete undeletable properties will throw (delete Object.prototype)
			// 
		}

		function hash_in_a_tag() {
			var source = "http://stackoverflow.com/questions/134845/href-attribute-for-javascript-links-or-javascriptvoid0?page=1&tab=active#tab-top";
			/* 
			If no href attribute, then a tag just behave like span
			If put href="#", when clicked, it will take you to the top of the page
			*/
			/*
			The verdict:
			It is best to use href="javascript:void(0)"
			e.g.:
			<a href="javascript:void(0)">this is a link</a>
			 */
		}

		function pitfall() {

			function equal_table () {
				var source = "http://dorey.github.io/JavaScript-Equality-Table/";

				''        ==   '0'           // false
				0         ==   ''            // true
				0         ==   '0'           // true
				false     ==   'false'       // false
				false     ==   '0'           // true
				false     ==   undefined     // false
				false     ==   null          // false
				null      ==   undefined     // true
				" \t\r\n" ==   0             // true
			}

			function typeof_result() {
				var comment = "tyoeof anything always return lowercase string";
				var pp = [typeof xxxxx,    				// 'undefined'
				typeof Function, 				// 'function'
				typeof Array,  				  // 'function'
				typeof Number, 				  // 'function'
				typeof 333,     					// 'number'
				typeof '333',    				// 'string'
				typeof [],       			  // 'object'
				typeof {},       			  // 'object'
				typeof null == object,   // true
				];

			}

			function new_operator () {
				var comment = "Never use new Number(), new String() or new Boolean() unless  \
            					your Javascript is God Tier and you are absolutely sure you \
            					know what you are doing.";
        
	      var aboutNew = [new String("pancake") == new String("pancake"), 
	        // false same for any class after new, since new return a object
	         "pancake" == "pancake",            // true
	         3 == 3,  													// true
	         new Number(3) == new Number(3) ,  	// false
	        ]

        function snippet() {
        	var b = new Boolean(false);
          b;        // Shows 'false' in console.
          !b;       // ALSO shows 'false' in console.
          !b == b;  // So this is true!
          !!b == !b // Negate both sides and it's false! FUCK!
          if (b) {
            // Better fucking believe this will get executed.
          }
        }
			}

			function array() {
				function wrongCode() {
					var a = [];
          a['name'] = 'Hubert';   //  No! Don't do this!
				}
			}

			function line_return () {
				function ss() {
					// correct
					return {
					    id : 1234,
					    title : 'Tony the Pony'
					};
					// error
					/*
						return 
					{
					    id : 1234,
					    title : 'Tony the Pony'
					};
					*/
				}
			}

			function function_var_def() {
				var source = "http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname";
				var detailed_text = "http://kangax.github.io/nfe/";
				var functionOne = function() {
    			// Function expression
				};
				function functionTwo() {
    			// Function declarations
				}
				// The difference is that functionOne is defined at run-time, whereas 
				// functionTwo is defined at parse-time for a script block. For example:

				/*
				<script>
				  // Error
				  functionOne();

				  var functionOne = function() {
				  };
				</script>

				<script>
				  // No error
				  functionTwo();

				  function functionTwo() {
				  }
				</script>

				<script>
				  if (test) {
				     // Error or misbehavior
				     function functionThree() { doSomething(); }
				  }
				</script>
				 */
			}
		}

		function useful_code_snippets() {
			
			function reverse_string_letter() {
				'abcdefg'.split('').reverse().join(''); 
				// gfedcba
			}
			function isArray(value) {
				return value && typeof value === 'object' && value.constructor === Array;
			}

			function isArray2(value) {
				return Object.prototype.toString.apply(value) === '[object Array]';
			}

			function isArray3() {
				// use ES5 native method
				Array.isArray([]); // return true
			}

			function for_in_loop () {

				var obj = [1,2,3];
				Array.prototype.foo = 'bar';
				for (var key in obj) {
				    if (obj.hasOwnProperty(key)) {
				        //stuff...
				       console.log(obj[key]);
				    }
				}
			}

			function string_contain_substr() {
				
				var source = "http://stackoverflow.com/questions/1789945/how-can-i-check-if-one-string-contains-another-substring";
				// 1. indexOf
				var s = "foo";
				alert(s.indexOf("oo") > -1);

				// 2. in ES6
				console.log("foo".includes("o"));  // true
				// 
				// if (!String.prototype.contains) {
				//   String.prototype.contains= function() {
				//     return String.prototype.indexOf.apply(this, arguments) !== -1;
				//     // this will point to String object. It is not a callback, 
				//     // so this will not point to root.
				//   };
				// }
				// 3. Regrex
				/oo/.test("foo"); // true
			}

			function copy_object() {
				// jquery way:
				// Shallow copy
				var newObject = jQuery.extend({}, oldObject);
				// Deep copy
				var newObject = jQuery.extend(true, {}, oldObject);

				// pure javascript:
				var obj = JSON.parse(JSON.stringify(obj)); // won't copy function, won't copy 
			}

			function delete_obj() {
				delete myJSONObject.regex;
				// or,
				delete myJSONObject['regex'];
				// or,
				var prop = "regex";
				delete myJSONObject[prop];

				// if you delete array item, it will set the index to undefined
				var array = [1,2,3,4];
				delete array[2];
				/* Expected result --> [1,2,4]
				 * Actual result   --> [1,2,undefined,4]
				 */
			}

			function load_js_file() {
				// javascript:
				function includeJs(jsFilePath) {
			    
			    var js = document.createElement("script");
			    js.type = "text/javascript";
			    js.src = jsFilePath;
			    document.body.appendChild(js);
				}
				includeJs("/path/to/some/file.js");

				// or use requireJS
			}

			function select_checked_element() {
				var source = "http://stackoverflow.com/questions/901712/check-checkbox-checked-property";
				// code:
				if(document.getElementById('isAgeSelected').checked) {
				    $("#txtAge").show();
				} else {
				    $("#txtAge").hide();
				}

				// example
				$('#isAgeSelected').click(function () {
				    $("#txtAge").toggle(this.checked);
				});
				/*
				<input type="checkbox" id="isAgeSelected"/>
				<div id="txtAge" style="display:none">Age is something</div>​
				*/
			}

			function remove_same_element_array() {
				// code:
				for(var i = array.length - 1; i >= 0; i--) {
			    if(array[i] === number) {
			       array.splice(i, 1);
			    }
				}
			}
		}

		function quiz() {

			function quiz1() {
				/*
				var f = function g(){ return 23; };
				typeof g();
				*/
				// result is error, g is not defined
			}

			function quiz2() {

				(function(x){
			    delete x;
			    return x;
			  })(1);
			  // result is 1, 
			  // delete is only effective on an object's properties. It has no effect on variable or function names.
			}

			function quiz3() {
				// http://perfectionkills.com/javascript-quiz/
				var y = 1, x = y = typeof x;
				x;
				// it will log "undefined" string
			}

			function quiz4() {


			  var foo = {
			    bar: function() { return this.baz; },
			    baz: 1
			  };
			  (function(){
			    return typeof arguments[0]();
			  })(foo.bar);
			  // result is "undefined"
			  // function foo.bar passed in as a callback, 
			  // in callback, this will always point to root object, which is window
			}

			function quiz5() {
				var foo = {
		    	bar: function(){ return this.baz; },
		    	baz: 1
		  	}
		  	typeof (f = foo.bar)();

		  	// result is "undefined"
			}

			function quiz6() {

				// for example:
				(function(){return 2}, function(){return 3})();

				// quiz:
				var f = (function f(){ return "1"; }, function g(){ return 2; })();
				typeof f;

				// result: "number"
			}

			function quiz7() {
				var x = [typeof x, typeof y][1];
				typeof typeof x;

				// result: "string"
				// typeof typeof anything will be string, since result of 1st typeof is string
			}

			function quiz8 () {
				with (function(x, undefined){}) length;
				// the result is 2
				
				// also
				function ss(a,b,c,d){}
				ss.length;
				// result is 4
			}

			function quiz9 () {
				var question = "What is alerted?";

				/*
					var foo = 1;
					function bar() {
						foo = 10;
						return;
						function foo() {}
					}
					bar();
					alert(foo);
				 */
				// answer:1
			}

			function quiz10() {

				var question  = "What value is alerted?";
				/*
					var foo = function bar() {}; 
					alert(typeof bar);
				 */
				// answer: "underfined"
				// explanation: name here will be omitted
			}

			function quiz11() {
				var question = "what is alerted?";
				/*
					x = 1;
					function bar() {
					    this.x = 2;
					    return x;
					}
					var foo = new bar();
					alert(foo.x);
					What value is alerted?
		

				 */
				// answer: 2
				// explanation: http://www.bennadel.com/blog/2522-providing-a-return-value-in-a-javascript-constructor.htm
				// if not return complex object, e.g.: {} or [], new F() will always newly created object
			}

			function quiz12 () {
				var question = "what is alerted?";

				/*
					function foo(a) {
					    arguments[0] = 2;
					    alert(a);
					}
					foo(1);
				 */
				// answer: 2
				// explanation: overwrite arguments will over write param within the function scope
			}

			function quiz13() {
				var question = "what is alerted?";
				/*
				
					function foo(){}
					delete foo.length;
					alert(typeof foo.length);
				 */
				// answer: "number"
				// explanation: every function has a length value telling how much params it takes
				//    in the definition. delete Function.length will have no effect. 
			}
		}
	}

	function Browser() {
		function dom_api() {

			function redirect() {
				var origin = "http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-using-jquery";

				window.location.href="url"; //simulates normal navigation to a new page
				window.location.replace("url");//removes current url from history and replaces with new url
				window.location.assign("url");//adds new url to history stack and redirects to the new url

				window.history.back();//Simulates a back button click
				window.history.go(-1);//Simulates a back button click
				window.history.back(-1);//Simulates a back button click
				window.navigate("page.html");//Same as window.location="url" 
			}

			function get_query_string_value() {
				var source = "http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=2&tab=active#tab-top";
				// snippet:
				function getParameterByName(name) {
				    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
				    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
				}
			}

			function file_api() {

			}
			function localStorage() {

			}
			function desktopNotification() {

			}
			function drag_drop() {

			}
		}

		function dom_event() {
			var eventReference = 'https://developer.mozilla.org/en-US/docs/Web/Events';
		}

		function IE_problem() {

		}

		function jsonp() {

		}

		function cors() {

		}
	}

	function Libraries () {
		function jquery() {

			function this_in_Each_loop() {

			}
			function check_if_visible() {
				var source = "http://stackoverflow.com/questions/178325/checking-if-an-element-is-hidden?page=2&tab=active#tab-top";

				// best way: use css selector
				$('element:hidden');
				$('element:visible');

				$('element').is(":visible"); // jquery way
				// or check css directly
				if ($(this).css("display") == "none" || $(this).css("visibility") == "hidden") {
				    // The element is not visible
				} else {
				    // The element is visible
				}
			}
			function select_dom_contain_text() {
				var source = "http://api.jquery.com/contains-selector/";
				$( "div:contains('John')" ).css( "text-decoration", "underline" );

			}

		}
		function d3js() {

		}
		function requirejs() {

		}
		function momentjs() {

		}
		function lowdash() {

		}
	}

	function components() {
		function scroll() {

		}

		function type_ahead() {
			
		}

		function image_cropper() {

		}

		function code_editor() {

		}

		function bootstrap() {

		}

		function image_maginify() {
			// like those on nike
		}

		function promise() {
			function jquery() {}
			function async() {

			}
			function angular() {

			}
		}

		function input_validation () {

		}

		function socketIO() {

		}
	}

	function Frameworks() {
		function angularJS() {

		}

		function backboneJS() {

		}
	}

	function html5() {

		function quiz() {

			function quiz1() {
				var question = "Is <keygen> a valid HTML5 tag?";
				// answer: yes
				// explanation:
				// The <keygen> element is new in HTML5.

			}

			function quiz2() {
				var question = "Does the <bdo> tag change the direction of text?";
				// answer: yes
				// explanation:
				// bdo stands for Bi-Directional Override.
				// <p><bdo dir="rtl">123456This paragraph will go right-to-left.</bdo></p>  

			}

			function quiz3() {
				var question = "If you have a page of search results and want to highlight the search term, what HTML tag would you use?"
				// answer: <mark>, not <strong>, <em>, or <highlight>(no such tag)
				// explanation: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_mark
			}

			function quiz4() {
				var question = "What does the scoped attribute do?";
				/*
				
				<article>
				    <h1>Hello World</h1>
				    <style scoped>
				        p {
				            color: #FF0;
				        }
				    </style>
				    <p>This is my text</p>
				</article>
				 
				<article>
				    <h1>This is awesome</h1>
				    <p>I am some other text</p>
				</article>
				 */
				 // answer: Applies style rules to all children of the scoped parent element
			}

			function quiz5() {
				var question = "Does main1.css have to be downloaded and parsed before Hello World is alerted?";

				/*
					<head>
					    <link href="main1.css" rel="stylesheet">
					    <script>
					        alert('Hello World');
					    </script>
					</head>
				 */
				// answer: yes
				// questionable...
			}

			function quiz6() {
				var question = "Does main1.css have to be downloaded and parsed before main2.css can be fetched?";
				/*
				<head>
				    <link href="main1.css" rel="stylesheet">
				    <link href="main2.css" rel="stylesheet">
				</head>
				 */
				// answer: no
				// explanation: 1) HTML is donloaded first
				// 2) HTML is parsed, and download all other resources as long as browser encounters them
				//    3 css files can start downloading parallelly 
				// 3) inline script is executed as long as browser encounters it. 
				// 4) external javascript is ensured to execute in their appearence order, except async is added
				//    in script tag
			}
		}
	}

	function security() {
		function ssl() {

		}

		function https() {

		}

		function csrf() {

		}

		function xss ()  {
			/* 
			Cross-Site Scripting (XSS) attacks are a type of injection, 
			in which malicious scripts are injected into otherwise benign and 
			trusted web sites. XSS attacks occur when an attacker uses a web 
			application to send malicious code, generally in the form of a 
			browser side script, to a different end user.

			*/

		}
	}



	function css() {

		function spcificity() {
			/*
			explanation:
			http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
			
			Specificity hierarchy Link
				Every selector has its place in the specificity hierarchy. There are four distinct categories which define the specificity level of a given selector:
				1. Inline styles (Presence of style in document).
				An inline style lives within your XHTML document. It is attached directly to the element to be styled. E.g. <h1 style="color: #fff;">
				2. IDs (# of ID selectors)
				ID is an identifier for your page elements, such as #div.
				3. Classes, attributes and pseudo-classes (# of class selectors).
				This group includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.
				4. Elements and pseudo-elements (# of Element (type) selectors).
				Including for instance :before and :after.

			How to measure specificity? Link
				Memorize how to measure specificity. 
				“Start at 0, 
				add 1000 for style attribute, 
				add 100 for each ID, 
				add 10 for each attribute, class or pseudo-class, 
				add 1 for each element name or pseudo-element. So in
				body #content .data img:hover
				the specificity value would be 122 (0,1,2,2 or 0122): 100 for #content, 10 for .data, 10 for :hover, 1 for body and 1 for img.” [CSS Specificity]

			 */
		}

		function quiz() {
			function quiz1() {
				var question = "Does setting margin-top and margin-bottom have an affect on an inline element?";
				// answer: No
			}

			function quiz2() {
				var question = "Does setting padding-top and padding-bottom on an inline element add to its dimensions?";
				// answer: no
			}

			function quiz3() {
				var question = "The pseudo class :checked will select inputs with type radio or checkbox, but not <option> elements.";
				// answer false
				// explanation:
				// $("select option:checked").text() will get the text between option tag
			}

			function quiz4() {
				var question = ":root pseudo class will refer to the html tag?"
				// answer true
				// explanation: $(":root")
				// [<html>... <html>]
			}

			function quiz5() {
				var question = "tranlsate() can move element along the z-index?";
				// answer false
				// explanation:
				/*
				div {
    			transform: translate(50px,100px);
				}
				The translate() method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
				 */
			}

			function quiz6() {
				var question = "what is the color of sausage? ";
				/*
				<ul class="shopping-list" id="awesome">
    			<li><span>Milk</span></li>
    			<li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
				</ul>

				// css:
				ul#awesome {
  				color: red;
				}
				ul.shopping-list li.favorite span {
  				color: blue;
				}

				*/
			
				// answer: blue
				// explanation: how to measure specificity? 
				// http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
			}

			function quiz7() {
				var question = "what is the color of sausage?";
				/*
				
				<ul class="shopping-list" id="awesome">
				    <li><span>Milk</span></li>
				    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
				</ul>

				// css
				
				ul#awesome #must-buy {
				    color: red;
				}
				.favorite span {
				    color: blue!important;
				}
				 */
				
				// answer: blue
			}

			function quiz8() {
				var question = "what is the color of sausage?";
				/*
				
				<ul class="shopping-list" id="awesome">
				  <li><span>Milk</span></li>
				  <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
				</ul>

				// css:

				#awesome .favorite:not(#awesome) .highlight {
				    color: red;
				}
				#awesome .highlight:nth-of-type(1):nth-last-of-type(1) {
				    color: blue;
				}

				 */
				
				// answer: red
				// explanation:
				// https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
				// The :not exception
				// The negation pseudo-class :not is not considered a pseudo-class 
				//   in the specificity calculation. But selectors placed into the 
				//   negation pseudo-class count as normal selectors when determining 
				//   the count of selector types
			}

			function quiz9() {
				// succeeding: 接连的；随后的
				var question = "What will happen to the position of #example?";
				/*
				<p id="example">Hello</p>

				#example {
				    margin-bottom: -5px;
				}
				 */
				
				// answer: All elements succeeding #example with move 5px upwards
				// 
				// explanation: margin top and left will affect the position of this element, 
				// but margin bottom and right will only affect the elements after this element. 
			}

			function quiz10() {
				var question = "Are unused style resources still downloaded by the browser?";
				/*
				<div id="test1">
				  <span id="test2"></span>
				</div>

				#i-am-useless {
				  background-image: url('mypic.jpg');
				}
				*/
				
				// answer: no
				// explanation: css will all be downloaded, but unused img will not be downloaded
			}

			function quiz11() {
				// on page load, display:none element image will also be downloaded
				// if this element is not within another display:none element
				
				var question = "On page load, will mypic.jpg get downloaded by the browser?";
				/*
				HTML:

					<div id="test1">
					    <span id="test2"></span>
					</div>
					CSS:

					#test2 {
					    background-image: url('mypic.jpg');
					    display: none;
					}
					
				 */ 
					// answer: yes
			}

			function quiz12() {

				var question = "On page load, will mypic.jpg get downloaded by the browser?";
				/*
				
				HTML:

				<div id="test1">
				    <span id="test2"></span>
				</div>
				CSS:

				#test1 {
				    display: none;
				}
				#test2 {
				    background-image: url('mypic.jpg');
				    visibility: hidden;
				}
				
				 */
				// answer: no
				// explanation: image in 2nd level element within display:none element will not be downloaded
			}

			function quiz13() {

				var question = "What is the use of the only selector?";
				/*
									@media only screen and (max-width: 1024px) {
					    margin: 0;
					}

					Stops older browsers from parsing the remainder of the selector
					Apply the style for screen only and ignore the device max-width
					It does nothing
					Skip
				 */
				// answer: Stops older browsers from parsing the remainder of the selector
			}

			function quiz14() {

				var question = "Does overflow: hidden create a new block formatting context?";
				/*
				
				HTML:

					<div>
					    <p>I am floated</p>
					    <p>So am I</p>
					</div>
					CSS:

					div {
					    overflow: hidden;
					}
					p {
					    float: left;
					}
				 */
				// answer: yes
			}
		}
	}

	function taskRunner() {
		function gulp() {

		}

		function grunt() {

		}
	}
}