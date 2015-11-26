
function frontEnd () {

	function Javascript_language() {

		function closure() {
			var description = " Accessing outer variable stack from  \
                     			lexical inner scope creates a closure. The outer variable stack is still \
                     			alive even if outer function returns. ";
		  var link = " http://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111200#111200";
		  var snippets = '';
		}

		function new_operator() {
			var source = "http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript";
			/*
				1. It creates a new object. The type of this object, is simply object.
				2. It sets this new object's internal, inaccessible, [[prototype]] property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
				3. It executes the constructor function, using the newly created object whenever this is mentioned.
				4. It returns the newly created object, unless the constructor function returns a non-primitive value. In this case, that non-primitive value will be returned.
			*/
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

			function wrong_array_operation() {
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

			function string_formatting() {
				var lib_to_use = "http://epeli.github.io/underscore.string/#home";

				numberFormat(1000, 2);
				// => "1,000.00"

				numberFormat(123456789.123, 5, ".", ",");
				// => "123,456,789.12300"

			}

			function check_if_string_start_with() {
				// How to check if a string “StartsWith” another string?
				var source = "http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string";

				function stringStartsWith (string, prefix) {
				    return string.slice(0, prefix.length) == prefix;
				}
				// or
				/^Hello/.test('Hello world')
				// or
				haystack.lastIndexOf(needle, 0) === 0

			}
			function empty_array () {
				// empty an array
				var arr = [1,2,3,4,5];
				arr = [];
			}

			function check_string_empty() {
				if (strValue) {
				    //do something
				    // empty, null, or undefined
				}
				// note:
				var str = " "; // is not empty string
			}

			function set_default_param_in_function () {
				var source = "http://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function";

				function foo(a, b){
				  a = typeof a !== 'undefined' ? a : 42;
				  b = typeof b !== 'undefined' ? b : 'default_b';
				}

			}

			function check_key_exist_in_object() {
				var source = "http://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object";
				// wrong way
				var obj = { key: undefined };
				obj["key"] != undefined // false, but the key exists!

				// right way
				"key" in obj // true, regardless of the actual value
				// if only in the ojbect itself, not on prototype chain
				obj.hasOwnProperty("key") // true
			}

			function replace_all_occurance_of_string() {
				var str = "Test abc test test abc test test";
				str = str.replace(/abc/g, '---');
			}

			function append_to_array() {
				// 1. append one element
				var arr = [
				    "Hi",
				    "Hello",
				    "Bonjour"
				];
				// append new value to the array
				arr.push("Hola"); 

				// 2. append an array
				var a =['a','b'];
				var b=['c','d'];
				var c = a.concat(b);
			}

			function captalize_first_letter() {
				var source = "http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript";
				function capitalizeFirstLetter(string) {
				  return string.charAt(0).toUpperCase() + string.slice(1);
				}
			}
			function validateEmail() {

				function validateEmail(email) {
				    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
				    return re.test(email);
				}
				// anything@anything.anything
				function validateEmail(email) {
				    var re = /\S+@\S+\.\S+/;
				    return re.test(email);
				}
			}

			function validateIsNumber() {
				var source = "http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric/174921#174921";
				function IsNumeric(input){
				    return (input - 0) == input && (''+input).trim().length > 0;
				}
			}

			function check_if_undefined() {
				var source = "http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property";

				if (typeof something === "undefined") {
				  alert("something is undefined");
				}

			}
			
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

			function loop_array() {
				// plain javascript 
				function logArrayElements(element, index, array) {
				  console.log('a[' + index + '] = ' + element);
				  // this, point to root object
				}

				// Note elision, there is no member at 2 so it isn't visited
				[2, 5, , 9].forEach(logArrayElements); 
				
				// jquery version
				$.each([3,4,5], function(index, value){
					console.log(this);
					// note: this will point to each object in the array
				});
			}

			function get_timestamp() {
				var milliseconds = new Date().getTime();

				// unix time (in seconds)
				var unix = Math.round(new Date().getTime()/1000);
			}

			function uuid() {
				var source = "http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript";
				// in browser
				'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				    var r = crypto.getRandomValues(new Uint8Array(1))[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
				    return v.toString(16);
				});

				// nodejs
				'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				    var r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
				    return v.toString(16);
				});

				// use npm package
				"https://www.npmjs.com/package/guid";
				Guid.raw();
				// -> '6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d'
			}

			function element_in_array() {
				// plain javascript way:
				function contains(a, obj) {
			    for (var i = 0; i < a.length; i++) {
			        if (a[i] === obj) {
			            return true;
			        }
			    }
			    return false;
				}

				// jquery way:
				$.inArray(value, array)
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

			function localStorage_object() {
				// localstorage can only strong key value pair, the value is string, not object
				
				var testObject = { 'one': 1, 'two': 2, 'three': 3 };

				// Put the object into storage
				localStorage.setItem('testObject', JSON.stringify(testObject));

				// Retrieve the object from storage
				var retrievedObject = localStorage.getItem('testObject');

				console.log('retrievedObject: ', JSON.parse(retrievedObject));
			}

			function refreshi_page() {
				$('#something').click(function() {
				    location.reload(); // reload from cache
				    // location.reload(true) // reload from server
				})
			}

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

			function why_need_encode_url() {
				var source = "http://stackoverflow.com/questions/2152738/why-do-you-need-to-encode-urls";
				// space => %20
				/*
					The space character is excluded because significant spaces may disappear and 
					insignificant spaces may be introduced when URI are transcribed or typeset or 
					subjected to the treatment of word- processing programs. Whitespace is also used 
					to delimit URI in many contexts.
				*/
			}

			function encode_uri() {

				var myOtherUrl = 
				  "http://example.com/index.html?url=" + encodeURIComponent(myUrl);

				  //encodeURI(): is used for encoding existing url
				  //encodeURIComponent() : assumes that its argument is a 
				  //  portion (such as the protocol, hostname, path, or query string) of a URI
			}

			function get_current_URL() {
				window.location.href;
			}
			function get_query_string_value() {
				var source = "http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=2&tab=active#tab-top";
				// snippet:
				function getParameterByName(name) {
				    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
				    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
				}
			}

			function add_remove_class() {
				// pure javascript
				var source = "http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript";
				document.getElementById("MyElement").className = "MyClass";
				document.getElementById("MyElement").className += " MyClass";
				document.getElementById("MyElement").className =
			  document.getElementById("MyElement").className.replace
			    ( /(?:^|\s)MyClass(?!\S)/g , '' );

			  // jquery
			  $('#MyElement').addClass('MyClass');
			  $('#MyElement').removeClass('MyClass');
			  if ( $('#MyElement').hasClass('MyClass') ) {}
			  $('#MyElement').toggleClass('MyClass');

				// HTML5
				document.getElementById("MyElement").classList.add('class');
				document.getElementById("MyElement").classList.remove('class');
				if ( document.getElementById("MyElement").classList.contains('class') ) {}
				document.getElementById("MyElement").classList.toggle('class');
			}


			function get_selected_text() {
				var source = "http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text";
				// select text in textarea is different than selecting text in p tag
				// code:
				function getSelectionText() {
			    var text = "";
			    if (window.getSelection) {
			      text = window.getSelection().toString(); // non IE
			    } else if (document.selection && document.selection.type != "Control") {
			      text = document.selection.createRange().text; // for IE
			    }
			    return text;
				}
			}

			function select_text() {
				var source = "http://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse";

				function SelectText(element) {
					// element example: "#select_me"
			    var doc = document
			        , text = doc.getElementById(element)
			        , range, selection
			    ;    
			    if (doc.body.createTextRange) {
			        range = document.body.createTextRange();
			        range.moveToElementText(text);
			        range.select();
			    } else if (window.getSelection) {
			        selection = window.getSelection();        
			        range = document.createRange();
			        range.selectNodeContents(text);
			        selection.removeAllRanges();
			        selection.addRange(range);
			    }
				}
			}

			function create_trigger_event() {
				var event = new Event('build');

				// Listen for the event.
				elem.addEventListener('build', function (e) {  }, false);

				// Dispatch the event.
				elem.dispatchEvent(event);
			}

			function create_event_custom() {

				var event = new CustomEvent('build', { 'detail': elem.dataset.time });
				// handler
				function eventHandler(e) {
				  log('The time is: ' + e.detail);
				}
			}

			function trigger_built_in_event() {
				function simulateClick() {
				  var event = new MouseEvent('click', {
				    'view': window,
				    'bubbles': true,
				    'cancelable': true
				  });
				  var cb = document.getElementById('checkbox'); 
				  var canceled = !cb.dispatchEvent(event);
				  if (canceled) {
				    // A handler called preventDefault.
				    alert("canceled");
				  } else {
				    // None of the handlers called preventDefault.
				    alert("not canceled");
				  }
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

			function check_click_outside_element() {
				var source = "http://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element?page=1&tab=active#tab-top";

				$(document).click(function(event) { 
				    if(!$(event.target).closest('#menucontainer').length) {
				        if($('#menucontainer').is(":visible")) {
				            $('#menucontainer').hide()
				        }
				    }        
				})
			}

			function cancel_ajax_request() {
				// how can I cancel/abort an Ajax request that 
				// I have not yet received the response from?
				var source = "http://stackoverflow.com/questions/446594/abort-ajax-requests-using-jquery";
				var xhr = $.ajax({
				    type: "POST",
				    url: "some.php",
				    data: "name=John&location=Boston",
				    success: function(msg){
				       alert( "Data Saved: " + msg );
				    }
				});

				//kill the request
				xhr.abort();

				/*
					As of jQuery 1.5 the returned object is a wrapper for the 
					native XMLHttpRequest object called jqXHR. This object appears
					to expose all of the native properties and methods so the above 
					example still works. See The jqXHR Object (jQuery API documentation).
				*/
			}

			function get_selected_text_option() {
				var source = "http://stackoverflow.com/questions/1643227/get-selected-text-from-a-drop-down-list-select-box-using-jquery";
 				$("#myselect option:selected").text();

				$("#myselect :selected").text();

 				$("#myselect").children(":selected").text();

				$("#myselect").find(":selected").text();

				$("#dropdownID").change(function(){
				  alert($('option:selected', $(this)).text());
				});
			}

			function add_color_console_log() {
				console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');

			}

			function disable_browser_plugin() {
				var source = "http://stackoverflow.com/questions/21692646/how-does-facebook-disable-the-browsers-integrated-developer-tools/21692733#21692733";
				// The logic is 
				// 1. redefine the console to be unwritable, 
				// 2. redefine the "_commandLineAPI" plugin api object, which
				
				Object.defineProperty(window, "console", {
				    value: console,
				    writable: false,
				    configurable: false
				});

				var i = 0;
				function showWarningAndThrow() {
				    if (!i) {
				        setTimeout(function () {
				            console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
				        }, 1);
				        i = 1;
				    }
				    throw "Console is disabled";
				}

				var l, n = {
				        set: function (o) {
				            l = o;
				        },
				        get: function () {
				            showWarningAndThrow();
				            return l;
				        }
				};
				Object.defineProperty(console, "_commandLineAPI", n);
				Object.defineProperty(console, "__commandLineAPI", n);
			}

			function selector_usage() {
				jQuery(this).find("img"); // under this object, find img tags

			}

			function append_table_row() {
				var source = "http://stackoverflow.com/questions/171027/add-table-row-in-jquery";
				/*
					jQuery since version 1.4(?) automatically detects if the element 
					you are trying to insert (using any of the append(), prepend(), before(), 
					or after() methods) is a <tr> and inserts it into the first <tbody> in 
					your table or wraps it into a new <tbody> if one doesn't exist.
				 */
				$('#myTable').append('<tr><td>my data</td><td>more data</td></tr>');
			}

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

			function return_false () {
				// don't use return false in jQquery or dom event handler
				// It is best to explicitely call e.preventDefault(), or 
				// e.stopPropagation()
				var source = "http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false";
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

		function file_upload() {
			var source = "http://stackoverflow.com/questions/166221/how-can-i-upload-files-asynchronously";
			var gitHub_repo = "https://github.com/FineUploader/fine-uploader";
			// simple ajax uploader
			var gitHub_repo2 = "https://github.com/LPology/Simple-Ajax-Uploader";
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

		function json_hijacking() {
			var source = "http://haacked.com/archive/2009/06/25/json-hijacking.aspx/";
			var stackoverflow = "http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses";
			// if the site request is 
			// 1) GET
			// 2) return [] of json
			// it is vulnerable
			// adding while(1); will stop it, since legitimate will parse out the real array
			//  
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

		function properties() {
			// 1. white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;
			var explanation = "http://www.w3schools.com/cssref/pr_text_white-space.asp";

			// 2. clip: auto|shape|initial|inherit;
			//    object.style.clip="rect(0px,50px,50px,0px)"
			var explanation_clip = "http://www.w3schools.com/cssref/pr_pos_clip.asp";

			// 3. content: attr(data-content); /* dynamic content for the pseudo element */
			//    data-content is attribute in the tag
		}

		function style_half_character() {
			var source = "http://stackoverflow.com/questions/23569441/is-it-possible-to-apply-css-to-half-of-a-character";
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