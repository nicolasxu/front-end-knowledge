
function frontEnd () {

	function Javascript_language() {
		function closure() {
			var description = " Accessing outer variable stack from  \
                     			lexical inner scope creates a closure. The outer variable stack is still \
                     			alive even if outer function returns. ";
      var link = " http://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111200#111200";
      var snippets = '';

		}

		function pitfall() {

			function truth_table () {

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

				function isArray(value) {
					return value && typeof value === 'object' && value.constructor === Array;
				}

				function isArray2(value) {
					return Object.prototype.toString.apply(value) === '[object Array]';
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
		}

		function tricks() {
			
			function reverse_letter() {
				'abcdefg'.split('').reverse().join(''); 
				// gfedcba
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

			}
		}
	}

	function Browser() {
		function dom_api() {

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