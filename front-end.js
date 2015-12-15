function frontEnd () {

	function regex() {
		function trim_string() {

			if(typeof String.prototype.trim !== 'function') {
			  String.prototype.trim = function() {
			    return this.replace(/^\s+|\s+$/g, ''); 
			  }
			}
		}

		function add_comma_in_number() {
			function numberWithCommas(x) {
    			return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		}
	}

	function Javascript_language() {

		function closure() {
			var description = " Accessing outer variable status from  \
                     			lexical inner scope creates a closure. The outer variable status is still \
                     			alive even if outer function returns. ";
		  var link = " http://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111200#111200";
		  var snippets = '';

		  // closure in a loop
		  var funcs = [];
			for (var i = 0; i < 3; i++) {          // let's create 3 functions
			    funcs[i] = function() {            // and store them in funcs
			        console.log("My value: " + i); // each should log its value.
			    };
			}
			for (var j = 0; j < 3; j++) {
			    funcs[j]();                        // and now let's run each one to see
			}

			// fix closure in a loop
			var funcs_ = [];
			function createfunc(i) {
			    return function() { console.log("My value: " + i); };
			}
			for (var i = 0; i < 3; i++) {
			    funcs_[i] = createfunc(i);
			}
			for (var j = 0; j < 3; j++) {
			    funcs_[j]();                        // and now let's run each one to see
			}
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

		function this_keyword() {
			var source  = "http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work";
			var source2 = "http://www.quirksmode.org/js/this.html";
			var source3 = "http://web.archive.org/web/20110725013125/http://www.digital-web.com/articles/scope_in_javascript/"
			// need to be reviewed constantly
			// The ECMAScript Standard defines this as a keyword that "evaluates to the value of 
			//     the ThisBinding of the current execution context" (§11.1.1).
			//     ThisBinding is like a special CPU register that references to an object.
			//     The intepreter updates ThisBinding in folowing 3 cases:
			//     Case 1: Initial global execution context
			//             <script></script>
			//     Case 2: Entering eval code
			//             direct eval() or indirect eval call
			//     Case 3: Entering function code
			//       obj.myMethod() or obj["myMethod"]()
			//       Function.prototype.apply(thisArg, argArray), call(), bind()
			//       Array.prototype.every(callbackfn [ , thisArg ] ), some(), map(), filter()
			//     Case 4: new operator
			//     "this" is the new object that the interpreter created
			function quiz() {

				function quiz1() {
					function myFun() {
				  // Line D
					}
					var obj = {
					  myMethod : function () {
					      eval("myFun()");
					  }
					};
					obj.myMethod();
					// explanation:
					//window
					//This one was tricky. When evaluating the eval code, this is obj. 
					//However, in the eval code, myFun is not called on an object, 
					//so ThisBinding is set to window for the call.
				}
			}
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
				typeof null == 'object',   // true
				typeof new Number(3)		// 'object' // don't new any Number, it is not designed to do so
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

		function pass_by_value_or_reference() {
			var source = "http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language";

			function changeStuff(a, b, c) {
				// all pass a copy of reference
			  a = a * 10;
			  b.item = "changed";
			  c = {item: "changed"};
			}

			var num = 10;
			var obj1 = {item: "unchanged"};
			var obj2 = {item: "unchanged"};

			changeStuff(num, obj1, obj2);

			console.log(num);
			console.log(obj1.item);    
			console.log(obj2.item);
			// 10
			// changed
			// unchanged
		}

		function useful_code_snippets() {

			function generate_random_hex_color() {
				var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
			}

			function static_var_in_javascript() {
				var source = "http://stackoverflow.com/questions/1535631/static-variables-in-javascript";
				// example:
				function Person(){
				  if(Person.count == undefined){
				    Person.count = 1;
				  }
				  else{
				    Person.count ++;
				  }
				  console.log(Person.count);
				}

				var p1 = new Person();
				var p2 = new Person();
				var p3 = new Person();
				console.log(Person.count); // Person.count is kind of static var for Person class

			}

			function convert_unix_time_stamp_to_Date() {
				var source = "http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript";
				// unix time stamp is seconds after 1970.01.01, while javascript Date takes milliseconds
				
				// Create a new JavaScript Date object based on the timestamp
				// multiplied by 1000 so that the argument is in milliseconds, not seconds.
				var date = new Date(unix_timestamp*1000);
				// Hours part from the timestamp
				var hours = date.getHours();
				// Minutes part from the timestamp
				var minutes = "0" + date.getMinutes();
				// Seconds part from the timestamp
				var seconds = "0" + date.getSeconds();

				// Will display time in 10:30:23 format
				var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
			}

			function generate_5_random_letters() {
				var source = "http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript";

				function makeid() {
			    var text = "";
			    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			    for( var i=0; i < 5; i++ )
			        text += possible.charAt(Math.floor(Math.random() * possible.length));

			    return text;
				}

			}

			function convert_letter_to_askii_code() {
				var source = "http://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript";

				"\n".charCodeAt(0);
			}

			function standard_way_to_defind_class() {
				function Person(name, gender){

				   // Add object properties like this
				   this.name = name;
				   this.gender = gender;
				}

				// Add methods like this.  All Person objects will be able to invoke this
				Person.prototype.speak = function(){
				    alert("Howdy, my name is" + this.name);
				};

				// Instantiate new objects with 'new'
				var person = new Person("Bob", "M");

				// Invoke methods like this
				person.speak(); // alerts "Howdy, my name is Bob"
			}
			function round_number() {
				// keep money value in cents, so that you can always use Math.round()
				var intvalue = Math.floor( floatvalue ); 
				var intvalue = Math.ceil( floatvalue ); 
				var intvalue = Math.round( floatvalue );

				// note: floor of -3.1 is -4, not -3
			}

			function run_func_by_name_context() {
				var source = "http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string";
				//executeFunctionByName("Namespace.functionName", My, arguments);
				function executeFunctionByName(functionName, context /*, args */) {
				  var args = [].slice.call(arguments).splice(2);
				  var namespaces = functionName.split(".");
				  var func = namespaces.pop();
				  for(var i = 0; i < namespaces.length; i++) {
				    context = context[namespaces[i]];
				  }
				  return context[func].apply(this, args);
				}

			}

			function pass_value_to_regex() {
				var source = "http://stackoverflow.com/questions/494035/how-do-you-pass-a-variable-to-a-regular-expression-javascript";

				var str = "Tom";
				var re = new RegExp(str, "g");
				"my Tom".replace(re, "Jim");
			}

			function check_null_underfined_NaN_emptyStr_0_false() {
				var source = "http://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in";
				if(value) {
					/*
					will evaluate to true if value is not:

						null
						undefined
						NaN
						empty string ("")
						0
						false
						*/
				}
			}

			function access_matched_regex_group() {
				var myString = "something format_abc";
				var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
				var match = myRegexp.exec(myString);
				alert(match[1]);  // abc
			}
			function merge_two_arrays_remove_duplicate() {
				_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
				// => [1, 2, 3, 101, 10]
			}
			function copy_array() {
				var source = "http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript";
				myArray.slice(); // only works for number and string simple array
				// check out the table for 
				// slice, json, $.extend() approach
			}

			function find_primitive_value_in_array() {
				// it works only for primitive value
				var arrValues = ['sam', 'tom', 'shirley'];
				if (arrValues.indexOf('Sam') > -1) 
					{return true;}
				else 
					{return false;}
			}

			function plus_sign_before_function() {
				var source = "http://stackoverflow.com/questions/13341698/javascript-plus-sign-in-front-of-function-name";

				+function() { console.log("Foo!"); }();  // is the same as
				(function() { console.log("Foo!"); })();
				//It forces the parser to treat the part following the + as an expression. 
				//This is usually used for functions that are invoked immediately.
				//+ is just one of the options. It can also be -, !, ~, or just about any other unary operator. 
			}
			function is_date_valid() {
				var source = "http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript";
				// after you create Date obj, var userDate = new Date(1449107515435);
				function isDateValid(inputDateObj) {
					if ( Object.prototype.toString.call(d) === "[object Date]" ) {
					  // it is a date
					  if ( isNaN( d.getTime() ) ) {  // d.valueOf() could also work
					    // date is not valid
					    return false;
					  } else {
					    // date is valid
					    return true; 
					  }
					} else {
					  // not a date
					  return false; 
					}
				}
			}

			function if_object_is_empty() {
				var source = "http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object";
				// 1. method for ECMA5
				Object.keys({}).length; // 0
				// 2. method for Pre-ECMA5
				function isEmpty(obj) {
			    for(var prop in obj) {
			      if(obj.hasOwnProperty(prop))
			        return false;
			    }
				  return true;
				}
				// 3. lodash, jquery, underscore
				jQuery.isEmptyObject({}); // true
				_.isEmpty({}); // true
				_.isEmpty({}); // true
			}

			function what_is_exclamation_before_func() {
				var source = "http://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function";
				!function() {} ()
				// equals
				(function(){})();

			}
			function loop_deep_object() {
				var source = "http://stackoverflow.com/questions/921789/how-to-loop-through-javascript-object-literal-with-objects-as-members";
				var validation_messages = {
			    "key_1": {
			    	"your_name": "jimmy",
			    	"your_msg": "hello world"
			    },
			    "key_2": {
			    	"your_name": "billy",
			    	"your_msg": "foo equals bar"
			    }
				}

				// 
				for (var key in validation_messages) {
				  if (validation_messages.hasOwnProperty(key)) {
			      var obj = validation_messages[key];
			      for (var prop in obj) {
		         if (obj.hasOwnProperty(prop)) {
		            alert(prop + " = " + obj[prop]);
		          }
			      }
				  }
				}
			}

			function name_space() {
				var source = "http://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript";
				var your_namespace = your_namespace || {};
				your_namespace.Foo = {toAlert:'test'};
				your_namespace.Bar = function(arg) {
				    alert(arg);
				};
				with(your_namespace) {
				  Bar(Foo.toAlert);
				}
			}

			function get_random_in_range() {
				var source = "http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range";
				// Returns a random number between min (inclusive) and max (exclusive)
				function getRandomArbitrary(min, max) {
				    return Math.random() * (max - min) + min;
				}
				// Returns a random integer between min (inclusive) and max (inclusive)
				function getRandomInt(min, max) {
				  return Math.floor(Math.random() * (max - min + 1)) + min;
				} 

				Math.floor(Math.random() * 6) + 1  
			}

			function format_money() {
				var source = "http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript?page=1&tab=active#tab-top";
				// 1. use integer to represent money value, e.g: 100 is 1 dollar
				
				// must run toFixed() first to introduce '.' in the string
				(1111134).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
			}

			function format_money_number() {
				var source = "http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript";
				function numberWithCommas(x) {
    			return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			}

			function sort_array_obj() {
				var source = "http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript";

				var objs = [ 
				    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
				    { first_nom: 'Pig',    last_nom: 'Bodine'   },
				    { first_nom: 'Pirate', last_nom: 'Prentice' }
				];
				function compare(a,b) {
				  if (a.last_nom < b.last_nom)
				    return -1;
				  if (a.last_nom > b.last_nom)
				    return 1;
				  return 0;
				}

				objs.sort(compare);
			}

			function get_variable_type() {
				var source = "http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript";
				function get_type(thing){
				    if(thing===null)return "[object Null]"; // special case
				    return Object.prototype.toString.call(thing);
				}

				// example results:
				get_type(null)                    // - [object Null]
				get_type(window)                  // - [object Window]
				get_type([])                      // - [object Array]
				get_type(['1'])                   // - [object Array]
				get_type({})                      // - [object Object]
				get_type(document)                // - [object HTMLDocument]
				get_type(document.getElementById) // - [object Function]
			}

			function number_to_hex_back() {
				var hexString = (11).toString(16); // b
				var yourNumber = parseInt(hexString, 16); // parse as hex, always return decimal
			}

			function round_to_fix() {
				var source = "http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript";
				+num.toFixed(2); // toFixed() returns it to a string, and then back into an integer / float.
			}

			function parse_int() {
				// parse integer from string
				parseInt("3434", 10);  // parse the source as decimal
				// 1st para: string
				// 2nd para: what radix the string is (the base in mathematical numeral systems) 2 to 36
				parseInt("01010101", 2) // result: 85
			}

			function get_date_simple() {
				var source = "http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript";

				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; //January is 0!
				var yyyy = today.getFullYear();

				if(dd<10) {
				    dd='0'+dd
				} 

				if(mm<10) {
				    mm='0'+mm
				} 

				today = mm+'/'+dd+'/'+yyyy;
				document.write(today);
			}

			function str_end_with_sth() {
				var source = "http://stackoverflow.com/questions/280634/endswith-in-javascript";
				// polyfill:
				String.prototype.endsWith = function(suffix) {
    			return this.indexOf(suffix, this.length - suffix.length) !== -1;
				};
				// simple:
				if( "mystring#".substr(-1) === "#" ) {}
			}

			function merge_two_obj() {
				// jquery:
				var settings = $.extend({}, defaults, options);

				// javascript way:
				function merge_options(obj1,obj2){
				  var obj3 = {};
				  // should add obj.hasOwnProperty to avoid going up the prototype chain
				  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
				  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
				  return obj3;
				}
			}
			function convert_string_to_boolean() {
				var source = "http://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript";
				// warning!! every non-empty string will be converted to true
				var myBool = Boolean("false");  // === true
				var myBool2 = !!"false";  // === true

				// universal solution with JSON parse
				function getBool(val) {
				  return !!JSON.parse(String(val).toLowerCase());
				}
				// example:
				getBool("1"); //true
				getBool("0"); //false
				getBool("true"); //true
				getBool("false"); //false
				getBool("TRUE"); //true
				getBool("FALSE"); //false
			}

			function loop_through_object() {
				var source = "http://stackoverflow.com/questions/684672/loop-through-javascript-object";
				for (var key in p) {
				  if (p.hasOwnProperty(key)) {
				    alert(key + " -> " + p[key]);
				  }
				}
			}
			function for_in_loop_no_array() {
				var source = "http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-such-a-bad-idea";
				// e.g.:
				var arr = ['a','b','c'];
				for (var key in arr) {  }	// wrong choice for looping through array
				// for... in will go through the prototype chain, so not recommended for 
				// looping through the array, forEach() is right choice for array
			}
			function insert_item_into_array() {
				var source = "http://stackoverflow.com/questions/586182/how-do-i-insert-an-item-into-an-array-at-a-specific-index";

				arr.splice(index, 0, item_to_add) // at index, delete 0 items, and then add item_to_add
				arr.splice(2, 0, "Lene");
			}
			function enum_in_javascript() {
				var source = "http://stackoverflow.com/questions/287903/enums-in-javascript";

				var SIZE = {
				  SMALL : {value: 0, name: "Small", code: "S"}, 
				  MEDIUM: {value: 1, name: "Medium", code: "M"}, 
				  LARGE : {value: 2, name: "Large", code: "L"}
				};

				var currentSize = SIZE.MEDIUM;
				if (currentSize == SIZE.MEDIUM) {
				  // this alerts: "1: Medium"
				  alert(currentSize.value + ": " + currentSize.name);
				}
			}
			function count_size_of_object () {
				var source = "http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array";
				
				Object.size = function(obj) {
				    var size = 0, key;
				    for (key in obj) {
				        if (obj.hasOwnProperty(key)) size++;
				    }
				    return size;
				};
				// Get the size of an object
				var size = Object.size(myArray);
			}
			function format_date() {
				// 1. use Moment.js
				var a = moment([2010, 1, 14, 15, 25, 50, 125]);
				a.format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
				a.format("ddd, hA");                       // "Sun, 3PM"

				// 2. use plain javascript
				var d = (new Date()+'').split(' ');
				// ["Tue", "Sep", "03", "2013", "21:54:52", "GMT-0500", "(Central", "Daylight", "Time)"]
				[d[3], d[1], d[2], d[4]].join(' ');
				// "2013 Sep 03 21:58:03" 
			}
			function multi_line_code() {
				var myString = "foo \
					bar";
			}

			function trim_string() {
				// It is already part of native javascript
				var source = "http://stackoverflow.com/questions/498970/trim-string-in-javascript";

				String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
			}

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
				// 'this' in logArrayElements will refer to global object, 
				// which is different from this in $.each()
				
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

		function disable_same_origin_policy_Chrome() {
			var source = "http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome";
			// mac: 
			// open -a Google\ Chrome --args --disable-web-security
			// linux:
			// google-chrome --disable-web-security
		}

		function mobile_browser() {
			function safari_ios6_caching_ajax_result () {
				var source = "http://stackoverflow.com/questions/12506897/is-safari-on-ios-6-caching-ajax-results";
				// the problem is true if you use phoneGap
				// solution:
				
				// 1. javascript:
				var xhr = new XMLHttpRequest();
				xhr.open("post", 'uploader.php', true);
				xhr.setRequestHeader("pragma", "no-cache"); // prevent ajax caching

				// 2. jquery:
				//Check for iOS 6.0 and set Ajax header like this:
				$.ajaxSetup({ cache: false });
				// 3. jquery only no cache POST
				$.ajaxSetup({
				    type: 'POST',
				    headers: { "cache-control": "no-cache" }
				});
				// 4. server side solution also works: java
				httpResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
				// 5. change request url
				var currentTime = new Date();
				var n = currentTime.getTime();
				postUrl = "http://www.example.com/test.php?nocache="+n;
				$.post(postUrl, callbackFunction);

				// summary
				// adding [cache-control: no-cache] in the request headers
				// adding a variable URL parameter such as the current time
				// adding [pragma: no-cache] in the response headers
				// adding [cache-control: no-cache] in the response headers
			}

			function detect_mobile_browser() {
				var source = "http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery";

				// user agent detect
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 					// some code..
				}
				// here is another ua detect choice:
				// http://detectmobilebrowsers.com/
				
				// css way:
				/*
					@media only screen and (max-width: 760px) {
					  #some-element { display: none; }
					}
				*/
			}
		}
		function dom_api() {

			function XMLHttpRequest_object() {
				var w3c_spec = "https://xhr.spec.whatwg.org/";
			}

			function save_canvas_to_img() {
				var source = "http://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf";
				
				var canvas = document.getElementById("mycanvas");
				var img    = canvas.toDataURL("image/png");
				//with the value in IMG you can write it out as a new Image like so:

				document.write('<img src="'+img+'"/>');
			}

			function find_out_caller_name() {
				// which function calls this function
				var source = "http://stackoverflow.com/questions/280389/how-do-you-find-out-the-caller-function-in-javascript";
				function WhoCallsMe() {
				    alert("caller is " + arguments.callee.caller.name);
				    // arguments.callee.caller.toString()
				}

				// or you can use this lib to print out stack trace:
				// https://github.com/stacktracejs/stacktrace.js
			}

			function clear_canvas_for_redrawing() {
				var source = "http://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing";
				context.clearRect(0, 0, canvas.width, canvas.height);
			}
			function remove_element_by_id() {
				// use native javascript dom api
				var elem = document.getElementById('output');
				elem.parentNode.removeChild(element)
			}

			function console_object_is_only_activated_when_the_Dev_Toolbar_is_opened() {
				var source = "http://stackoverflow.com/questions/7742781/why-javascript-only-works-after-opening-developer-tools-in-ie-once";

			}

			function check_url_if_hash_tag_exist() {
				var source = "http://stackoverflow.com/questions/298503/how-can-you-check-for-a-hash-in-a-url-using-javascript?ppp=fdsfds&fff=kkk";
				// example.com/page.html#anotheranchor
				if(window.location.hash) {
				  // Fragment exists
				} else {
				  // Fragment doesn't exist
				}

				// check if query string exists
				if(window.location.search) {

				} else {

				}
			}

			function detect_run_when_javascript_disabled() {
				var source = "http://stackoverflow.com/questions/121203/how-to-detect-if-javascript-is-disabled";
				// when javascript is disabled, tag in <noscript> will show
				/*
				<noscript>
				  <img src="no_js.gif" alt="Javascript not enabled" />
				</noscript>
				*/
			}

			function preview_image_before_load() {
				var source = "http://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded";
				// 1. use URL.createObjectURL to load file
				/*
				<input type="file" accept="image/*" onchange="loadFile(event)">
				<img id="output"/>
				<script>
				  var loadFile = function(event) {
				    var output = document.getElementById('output');
				    output.src = URL.createObjectURL(event.target.files[0]);
				  };
				</script>				
				*/
			
				// 2. use FileReader.readAsDataURL()
				/*
				<input type="file" accept="image/*" onchange="loadFile(event)">
				<img id="output"/>
				<script>
				  var loadFile = function(event) {
				    var reader = new FileReader();
				    reader.onload = function(){
				      var output = document.getElementById('output');
				      output.src = reader.result;
				    };
				    reader.readAsDataURL(event.target.files[0]);
				  };
				</script>
				*/
			}

			function get_element_position_relative_to_viewport() {
				element.getBoundingClientRect();
			}
			function find_element_has_focus() {
				var source = "http://stackoverflow.com/questions/497094/how-do-i-find-out-which-dom-element-has-the-focus";
				// 1. DOM api
				document.activeElement

				// jquery way
				$(":focus").get(0); // can only get input, textarea focus
				
			}

			function scroll_to_window_top () {
				var source = "http://stackoverflow.com/questions/1144805/how-do-i-scroll-to-the-top-of-the-page-with-jquery";
				// 1. native javascript way
				window.scrollTo(0 /* x */, 0 /* y */);

				// 2. jquery with animate
				$("a[href='#top']").click(function(e) {
				  $("html, body").animate({ scrollTop: 0 }, "slow");
				  // it actually animate on an DOM property
				  // window.document.body.scrollTop
				  e.preventDefault();
				});

			}
			function native_get_select_option_value() {
				var source = "http://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript";
				/*
				<select id="ddlViewBy">
				  <option value="1">test1</option>
				  <option value="2" selected="selected">test2</option>
				  <option value="3">test3</option>
				</select>
				 */
				var e = document.getElementById("ddlViewBy");
				var strUserValue = e.options[e.selectedIndex].value; // get value
				var strUser = e.options[e.selectedIndex].text; // get text
			}
			function simulate_form_submit() {
				var source = "http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit";
				// copy 
				function post(path, params, method) {
				    method = method || "post"; // Set method to post by default if not specified.

				    // The rest of this code assumes you are not using a library.
				    // It can be made less wordy if you use one.
				    var form = document.createElement("form");
				    form.setAttribute("method", method);
				    form.setAttribute("action", path);

				    for(var key in params) {
				        if(params.hasOwnProperty(key)) {
				            var hiddenField = document.createElement("input");
				            hiddenField.setAttribute("type", "hidden");
				            hiddenField.setAttribute("name", key);
				            hiddenField.setAttribute("value", params[key]);

				            form.appendChild(hiddenField);
				         }
				    }

				    document.body.appendChild(form);
				    form.submit();
				}
			}
			function copy_to_clip_board() {
				var source = "http://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard";

				// 1. trello solution
				// the logic is to create an invisible textarea (1px size), then fill and select the text to copy,
				// when user press ctrl or meta key. 
				// If user then press C, then the content is copied to clipboard. If user release the key,
				// then textarea is removed from dom. 
				
				// 2. another solution
				// use clipboardjs
				var package_url = "https://zenorocha.github.io/clipboard.js/";
			}
			function can_not_choose_open_new_page_tab_or_window () {
				var source = "http://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript";

				// not possible
			}

			function doc_ready_jquery_equal_to() {
				var source = "http://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery";
				document.addEventListener("DOMContentLoaded", function(event) { 
				  //do work
				  // same as $(document).ready(function(){
				  // 
				  // });
				  
				});
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
			function encode_uri_best_practice() {
				var source = "http://stackoverflow.com/questions/75980/best-practice-escape-or-encodeuri-encodeuricomponent";
				// 1. escape() Don't use it, as it has been deprecated since ECMAScript v3.
				// 2. encodeURI()
				//    will encode uri only, not the query string after it. 
				//    encodeURI("http://www.google.com/a file with spaces.html")
				//    http://www.google.com/a%20file%20with%20spaces.html
				// 3. encodeURIComponent() 
				//    is for encoding query string value part only
				//    param1 = encodeURIComponent("http://xyz.com/?a=12&b=55")
				//		Then you may create the URL you need:
				//		url = "http://domain.com/?param1=" + param1 + "&param2=99";
			}

			function change_url_without_loading () {
				var source = "http://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page";
				// only works for HTML5
				window.history.pushState('page2', 'Title', '/page2.php');
				// MDN: https://developer.mozilla.org/en-US/docs/Web/API/History_API
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
			var list_of_events = "http://www.w3schools.com/jsref/dom_obj_event.asp"
		}

		function IE_problem() {

		}

		function jsonp() {

		}

		function cors() {

			var explanation = "http://www.html5rocks.com/en/tutorials/cors/";
			// browser plugin is not limited by Same Origin Policy, so POSTMAN 
			// will work fine for testing ajax request.
		}
	}

	function Libraries () {
		function jquery() {

			function throttle_and_debounce() {
				var source = "http://benalman.com/projects/jquery-throttle-debounce-plugin/";
				var github = "https://github.com/cowboy/jquery-throttle-debounce/";

				// They all take in a function and a param, then returns a function.
				// Debounce absorb limited the number of calls.
				// Throttle absort time intervals. 
				$(window).resize( $.throttle( 250, resize_2 ) ); // This is the line you want!
				$('input:text').keyup( $.debounce( 250, ajax_lookup ) );
			}

			function remove_all_classes() {
				$("#item").removeClass(); 
				// if no param, all classes will be removed
			}

			function assign_many_css_properties() {
				$("#message").css({
				  'font-size' : '10px',
				  'width' : '30px',
				  'height' : '10px'
				});
				// or you can put css atributes in an class, and use .addClass(). 
				// addClass() could be better solution.
			}

			function select_select_option_by_text() {
				// not by value

				// <select>
				//     <option value="0">One</option>
				//     <option value="1">Two</option>
				// </select>

				$("#myselect option:contains('YourTextHere')").attr("selected","selected");
				// tested
			}

			function replace_inner_html() {
				document.all.regTitle.innerHTML = 'Hello World';
				$("#regTitle").html("Hello World");
			}

			function select_value_from_dropdown_list() {
				var source = "http://stackoverflow.com/questions/499405/change-the-selected-value-of-a-drop-down-list-with-jquery";
				$("._statusDDL").val('2');
				$( "#multiple" ).val([ "Multiple2", "Multiple3" ]);
			}

			function remove_multiple_css_classes() {
				var source = "http://stackoverflow.com/questions/1485647/removing-multiple-classes-jquery";
				$('element').removeClass('class1').removeClass('class2');
			}

			function set_important_use_css() {
				var source = "http://stackoverflow.com/questions/2655925/how-to-apply-important-using-css";
				var $elem = $('#someDiv').style('color', 'blue', 'important');
				// or 
				$('#elem').attr('style', 'width: 100px !important'); // this will delete all other
				// style on this element
				// or you can use this function to fix:
				function addStyleAttribute($element, styleAttribute) {
				  $element.attr('style', $element.attr('style') + '; ' + styleAttribute);
				}
				addStyleAttribute($('#elem'), 'width: 100px !important');
				// example: http://jsbin.com/atulek/4/edit?html,js,output
			}

			function use_jquery_manipulate_pseudo_elements() {
				var source = "http://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin";

				// css :after and :before rules aren't part of the DOM
				// and therefore can't be altered using jQuery's DOM methods.
				
				// method 1: predetermined class
				/*
				p:before {
				  content: "foo";
				}
				p.special:before {
				  content: "bar";
				}
				*/
			  $('p').on('click', function() {
				  $(this).toggleClass('special');
				});

				// method 2: add styles directly to document's style
				var str = "bar";
				document.styleSheets[0].addRule('p.special:before','content: "'+str+'";');
				// same
				var str = "bar";
				$('<style>p.special:before{content:"'+str+'"}</style>').appendTo('head');
				// method 3: Alter a different DOM attribute
				/*
				<p>This is a paragraph.</p>
				<p>This is another paragraph.</p>
				 */
				/*
					p:before {
					  content: attr(data-before);
					  color: red;
					  cursor: pointer;
					}
				*/
				$('p').on('click', function () {
				  $(this).attr('data-before','bar');
				});
			}
			function remove_style() {
				var source = "http://stackoverflow.com/questions/4036857/jquery-remove-style-added-with-css-function";
				if(color != '000000') {
					$("body").css("background-color", color); 
				} else {
					$("body").css("background-color", "");
					// set css attribute empty to remove the style
				}
			}

			function get_id_of_element_fired_event() {
				$(document).ready(function() {
				  $("a").click(function(event) {
				      alert(event.target.id);
				  });
				});

				// method 2:
				jQuery("classNameofDiv").click(function() {
				  var contentPanelId = jQuery(this).attr("id");
				  // in event handler, this always refers to the element that event is triggered on. 
				  alert(contentPanelId);
				});
			}

			function working_with_tabular_data() {
				var jQuery_plugin = "https://github.com/DataTables/DataTables";
			}

			function html_encode_decode() {
				var source = "http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery";
				/*
				what_is_html_encode;
				Encoding data converts potentially unsafe characters to their HTML-encoded equivalent. 
				If the string to be encoded is not DBCS, HTMLEncode converts characters as follows: 
				The less-than character (<) is converted to &lt; . The greater-than character (>) 
				is converted to &gt; 
				*/
				function htmlEncode(value){
  			//create a in-memory div, set it's inner text(which jQuery automatically encodes)
  			//then grab the encoded contents back out.  The div never exists on the page.
  			// "<>" will be converted to "&lt;&gt;"
				  return $('<div/>').text(value).html();
				}

				function htmlDecode(value){
					// "&lt;&gt;" will be converted to "<>"
				  return $('<div/>').html(value).text();
				}
			}

			function empty_add_new() {
				var source = "http://stackoverflow.com/questions/47824/how-do-you-remove-all-the-options-of-a-select-box-and-then-add-one-option-and-se";
				$('#mySelect')
				  .empty()
				  .append('<option selected="selected" value="whatever">text</option>');
			}

			function check_if_element_is_attached_to_dom() {
				$('#elemId').length;

			}

			function pre_load_images() {
				var source = "http://stackoverflow.com/questions/476679/preloading-images-with-jquery";
				function preload(arrayOfImages) {
				  $(arrayOfImages).each(function () {
				    $('<img />').attr('src',this).appendTo('body').css('display','none');
				  });
				}

			}

			function make_ajax_sync() {
				// noremally ajax should be async, but you can make it sync
				// doc: http://api.jquery.com/jQuery.ajax/
			  jQuery.ajax({
          url: 'http://example.com/catalog/create/' + targetNode.id + '?name=' + encode(to.inp[0].value),
          success: function (result) {
            if (result.isOk == false) alert(result.message);
          },
          async: false // make it false to enable sync
			    });

			}

			function dollar_sign() {
				var $email = $("#email"); // refers to the jQuery object representation of the dom object
				var email_field = $("#email").get(0); // refers to the dom object itself
			}

			function check_if_element_is_visible() {
				var source = "http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling";
				// 1. native javascript way
				// Element.getBoundingClientRect() :  returns the size of an element and its position relative to the viewport
				
				function isScrolledIntoView(el) {
			    var elemTop = el.getBoundingClientRect().top;
			    var elemBottom = el.getBoundingClientRect().bottom;

			    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
			    return isVisible;
				}	
			 
				// 2. jquery way
				function isScrolledIntoView(elem) {
			    var $elem = $(elem);
			    var $window = $(window);

			    var docViewTop = $window.scrollTop();  // always >=0, number of px above viewport
			    var docViewBottom = docViewTop + $window.height(); // not include padding and border: http://api.jquery.com/height/

			    var elemTop = $elem.offset().top; // offset relative to document, not window
			    var elemBottom = elemTop + $elem.height();

			    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); 
			    // in the comparsion, all these cordinates are relative to the document
				}
			}

			function use_jquery_center_div() {
				var source = "http://stackoverflow.com/questions/210717/using-jquery-to-center-a-div-on-the-screen";
				var example = "http://jsfiddle.net/DerekL/GbDw9/";
				/*
				<div class="container">
				  <div class="target">1<br>parent</div>
				  <div class="target">2<br>window</div>
				</div>
				 */
				jQuery.fn.center = function(parent) {
			    if (parent) {
			      parent = this.parent();
			    } else {
			      parent = window;
			    }
			    this.css({
		        "position": "absolute",
		        // use this.outerHeight() and this.outerWidth() instead of just 
		        // this.height() and this.width(). Otherwise, if the object has a 
		        // border or padding, it will end up slightly off-center.
		        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
		        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
			    });
					return this;
				}
				$("div.target:nth-child(1)").center(true);
				$("div.target:nth-child(2)").center(false);
			}
			function style_iframe() {

				var source = "http://stackoverflow.com/questions/217776/how-to-apply-css-to-iframe";
				var head = jQuery("#iframe").contents().find("head");
				var css = '<style type="text/css">' +
				          '#banner{display:none}; ' +
				          '</style>';
				jQuery(head).append(css);
			}
			function load_page_from_server_append() {
				/*
				<html>
				  <header>
				    <script src="/js/jquery.js" type="text/javascript"></script>
				  </header>
				  <body>
				    <div id='include-from-outside'></div>
				    <script type='text/javascript'>
				      $('#include-from-outside').load('http://example.com/included.html');
				    </script> 
				  </body>
					</html>
				*/
				// $( "#result" ).load( "ajax/test.html" );
				// $( "#result" ).load( "ajax/test.html", function() {
				//   alert( "Load was performed." );
				// });
			}

			function hide_jquery_ui_dialog_close_button() {
				var source = "http://stackoverflow.com/questions/896777/how-to-remove-close-button-on-the-jquery-ui-dialog";
				$("#div2").dialog({
				  closeOnEscape: false,
				  open: function(event, ui) {
				  	$(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();}
				});
			}
			function bind_event_on_dynamic_created_element() {
				var source = "http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements";
				$(staticAncestors).on(eventName, dynamicChild, function() {});
				$(document).on( eventName, selector, function(){} );
				$("#dataTable tbody").on("click", "tr", function(event){
				    alert($(this).text());
				});

				// note: when you binding, elements in the selector must exist, 
				// because event is bound to the selected elements. 
				
				// Note: Delegated events do not work for SVG.
				
				// pure native javascript way for event delegation
				document.addEventListener( 'click', function ( e ) {
			    if ( hasClass( e.target, 'bu' ) ) {            
			        // .bu clicked
			        // do your thing
			    } else if ( hasClass( e.target, 'test' ) ) {
			        // .test clicked
			        // do your other thing
			    }   
				}, false ); 
				function hasClass( elem, className ) {
				    return elem.className.split( ' ' ).indexOf( className ) > -1;
				}
			}

			function press_enter_key_then_trigger_button_click() {
				var source = "http://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box";
				// html
				/*
				<input type="text" id="txtSearch" />
				<input type="button" id="btnSearch" value="Search" onclick="doSomething();" />
				*/
				// 1. jquery method
				$("#id_of_textbox").keyup(function(event){
				  if(event.keyCode == 13){
				    $("#id_of_button").click();
				  }
				  // 1. keycode list: http://www.w3schools.com/charsets/ref_html_utf8.asp
				  // 2. use this
				  var x = event.which || event.keyCode;  // Use either which or keyCode, depending on browser support
				  // 3. If you want to convert the returned Unicode value into a character, use the fromCharCode() method.
				  // 4. Both the keyCode and which property is provided for compatibility only. 
				  //    The latest version of the DOM Events Specification recommend using the key 
				  //    property instead (if available).
				  // 5. If you want to find out whether the "ALT", "CTRL", "META" or "SHIFT" key was 
				  //    pressed when a key event occured, use the altKey, ctrlKey, metaKey or shiftKey property.
				  // 6. check printable char, best use onkeypress
				  //    check "F1", "CAPS LOCK" or "Home", best use onkeydown or onkeyup event.
				  // 7. detail explanation: http://www.w3schools.com/jsref/event_key_keycode.asp


				});
				// 2. native javascript embeded
				/*
				<input type="text" id="txtSearch" onkeydown="if (event.keyCode == 13) document.getElementById('btnSearch').click()"/>
				<input type="button" id="btnSearch" value="Search" onclick="doSomething();" />
				*/
			}

			function click_toggle_class() {

				$('button').on('click', function(e) { 
			    e.preventDefault();
			    $('.inner').toggleClass('open');
				});

				var example = "http://jsfiddle.net/n5XfG/2596/";
			}

			function diff_between_onload_and_doc_ready() {
				var source = "http://stackoverflow.com/questions/3698200/window-onload-vs-document-ready";
				/*
				The "ready" is specific to jquery, occurs after the HTML document has been loaded, 
				while the onload event, standard DOM event, occurs later, when all content (e.g. images) 
				also has been loaded.

				The onload event is a standard event in the DOM, while the ready 
				event is specific to jQuery. The purpose of the ready event is that 
				it should occur as early as possible after the document has loaded, 
				so that code that adds functionality to the elements in the page 
				doesn't have to wait for all content to load.

				 */
			}
			function get_window_document_screen_dimension() {
				var source = "http://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window";

				// 1. screen dimension
				screen.width;
				screen.height;
				// 2. document dimension
				$(document).width();
				$(document).height();
				// 3. viewport/window dimension
				$(window).width();
				$(window).height();
			}

			function select_option() {
				var source = "http://stackoverflow.com/questions/196684/jquery-get-specific-option-tag-text";
				/*
				<select id='list'>
				    <option value='1'>Option A</option>
				    <option value='2'>Option B</option>
				    <option value='3'>Option C</option>
				</select>
				*/
				
				// get text of 2nd
				$("#list option[value='2']").text();

				// get selected
				$('#list option:selected').text();
				// or
				$('#list').val(); // give you the selected value, not text
			}
			function select_by_name_attr() {
				// <td name="tcol1" class="bold"> data2</td>
				$('td[name=tcol1]') // matches exactly 'tcol1'

				$('td[name^=tcol]') // matches those that begin with 'tcol'
			}

			function build_select_option_from_array() {
				var source = "http://stackoverflow.com/questions/170986/what-is-the-best-way-to-add-options-to-a-select-from-an-array-with-jquery";
				var myOptions = {
					"Value 1" : "Text 1",
					"Value 2" : "Text 2",
					"Value 3" : "Text 3"
				}
				$.each(selectValues, function(key, value) {   
		      $('#mySelect')
		        .append($("<option></option>")
		        	.attr("value",key)
		        	.text(value)); 
				});

				// or you can use this plug in:
				var jquery_plugin = "http://www.texotela.co.uk/code/jquery/select/";
			}

			function check_element_is_off_screen() {
				var source = "http://stackoverflow.com/questions/8897289/how-to-check-if-an-element-is-off-screen";
				// to be done
			}
			function move_element_into_another_element() {
				var source = "http://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element";
				$("#source")
    			.appendTo("#destination");

    		$("#source")
    			.prependTo("#destination");
			}

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

		function Raphael() {
			var website = "http://raphaeljs.com/";

		}

		function html2canvas() {
			var github = "https://github.com/niklasvh/html2canvas";
			// take a screenshot with javascript
		}
		function cytoscape() {
			var website = "http://cytoscape.github.io/cytoscape.js/";
			// library for analysis and visualisation
			var source = "http://stackoverflow.com/questions/8308516/multigraphs-with-javascript";
			var other_visulation_lib = "http://stackoverflow.com/questions/7034/graph-visualization-library-in-javascript";
			var data_visulation_compare = "http://selection.datavisualization.ch/";
		}
		function requirejs() {

		}
		function momentjs() {

		}
		function lowdash() {

		}
	}

	function components() {

		function radial_menu() {
			var source = "http://creative-punch.net/2014/02/making-animated-radial-menu-css3-javascript/";

		}
		function scroll() {
			// one page scroll: https://github.com/peachananr/onepage-scroll
			// 
		}

		function scroll_dependent_menu_bar() {
			var source = "http://creative-punch.net/2014/03/making-scroll-dependent-menu-bar-css3-javascript/";
			// it uses scrollMonitor to detect element is out of viewport
			// https://github.com/sakabako/scrollMonitor
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
			function Bootsnipp() {
				var website = "http://bootsnipp.com/";
				// Design elements, playground and code snippets for Bootstrap
				
			}

			function Bootstrap_theme() {
				var website = "http://bootswatch.com/";

			}
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

			// 1. what is control as? 
			// 2. what is link func in directive? 

			function angular_style_guide() {
				var github = "https://github.com/johnpapa/angular-styleguide";
				// comprehensive guide for angular best practice, endosed by Angular team. 
				
			}

			function service() {
				var source = "https://docs.angularjs.org/guide/services";
				// service are 
				// - Lazily instantiated
				// - Singletons
			}

			function bootstrap_app() {
				// Normally below is what bootstraps the app using your module
				// <div ng-app="myApp"> </div>
				/*
					While the example above is simple, it will not scale to large applications. Instead we recommend that you break your application to multiple modules like this:

					A module for each feature
					A module for each reusable component (especially directives and filters)
					And an application level module which depends on the above modules and contains any initialization code.

					Here is the best way to organize angular app:
					http://angularjs.blogspot.com/2014/02/an-angularjs-style-guide-and-best.html
				*/ 
				
				 
				// you can use ngApp to bootstrap(start) angularjs application
				// but you can also manually bootstrap your app. 
				var source = "https://docs.angularjs.org/api/ng/function/angular.bootstrap";
				/*
				<!doctype html>
				<html>
					<body>
						<div ng-controller="WelcomeController">
						  {{greeting}}
						</div>

						<script src="angular.js"></script>
						<script>
						  var app = angular.module('demo', [])
						  .controller('WelcomeController', function($scope) {
						      $scope.greeting = 'Welcome!';
						  });
						  angular.bootstrap(document, ['demo']);
						  // or you can do this:
						  //angular.element(document).ready(function() {
					    //  angular.bootstrap(document, ['myApp']);
					    //});
						</script>
					</body>
				</html>
				*/
			}

			function what_is_angular_module() {
				var source = "https://docs.angularjs.org/guide/module";
				var angular_app_recommended_structure = "https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub";

				/* 
					module is container for different part of the app:
						- controllers
						- services
						- filters
						- directives
						- etc..
				*/
			
				// example: angular app organization 
				angular.module('xmpl.directive', []);

				angular.module('xmpl.filter', []);

				angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter'])

				  .run(function(greeter, user) {
				    // This is effectively part of the main method initialization code
				    greeter.localize({
				      salutation: 'Bonjour'
				    });
				    user.load('World');
				  })

				  .controller('XmplController', function($scope, greeter, user){
				    $scope.greeting = greeter.greet(user.name);
				  });
				  /*
					  Beware that using angular.module('myModule', []) will create 
					  the module myModule and overwrite any existing module named myModule. 
					  Use angular.module('myModule') to retrieve an existing module.
				  */
			}

			function protect_against_minification() {
				// classic way
				app.controller('MyController', ['$scope', function($scope) {
				  $scope.greeting = 'hello';
				}]);

				// new way
				angular
					.controller('AvengersController', AvengersController);

					AvengerController.$inject = ['movieService', '$delegate'];

					function AvengerController(movieService, $delegate) {
						// do the work
					}
			}

			function what_is_$delegate_service() {
				//$delegate
			}

			function what_is_$get_service() {
				// $get
			}

			function how_to_use_$provide_decorator() {
				var doc = "https://docs.angularjs.org/api/auto/service/$provide#decorator";
				// $provide.decorator
				// what is it for?
				// real world example? 
			}

			function angular_animations()  {
				var source = "https://docs.angularjs.org/guide/animations";
				var ngAnimate_doc = "https://docs.angularjs.org/api/ngAnimate";
				var Remastered_Animation = "http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html";


				// use animate.css for conventional animations
				var animate_css = "http://daneden.github.io/animate.css/";
			}

			function handle_route_change_error() {
				var source = "https://github.com/johnpapa/angular-styleguide#style-y112";

				/* recommended */
				var handlingRouteChangeError = false;

				function handleRoutingErrors() {
			    /**
			     * Route cancellation:
			     * On routing error, go to the dashboard.
			     * Provide an exit clause if it tries to do it twice.
			     */
			    $rootScope.$on('$routeChangeError',
			        function(event, current, previous, rejection) {
		            if (handlingRouteChangeError) { return; }
		            handlingRouteChangeError = true;
		            var destination = (current && (current.title ||
		                current.name || current.loadedTemplateUrl)) ||
		                'unknown target';
		            var msg = 'Error routing to ' + destination + '. ' +
		                (rejection.msg || '');

		            /**
		             * Optionally log using a custom service or $log.
		             * (Don't forget to inject custom service)
		             */
		            logger.warning(msg, [current]);

		            /**
		             * On routing error, go to another route/state.
		             */
			          $location.path('/');
			          handlingRouteChangeError = false;

				        }
				    );
				}
			}

			function default_filter_behavior() {
				var source = "https://docs.angularjs.org/api/ng/filter/filter";
				// in template:
				// {{ filter_expression | filter : expression : comparator}}
				// in javascript:
				$filter('filter')(array, expression, comparator);

				// expression can be string, hash object, or function(value, index, array)
				// comparator is function to check if two input are equal. 
			}

			function use_default_uppercase_filter() {
				var source = "https://docs.angularjs.org/api/ng/service/$filter";
				// this is also angularjs provided.
				angular.module('filterExample', [])
					.controller('MainCtrl', function($scope, $filter) {
					  $scope.originalText = 'hello';
					  $scope.filteredText = $filter('uppercase')($scope.originalText);
					});
			}

			function filter_components_provided_in_ng() {
				var source = "https://docs.angularjs.org/api/ng/filter";
				/*
				*** Usage in javascript:
				$filter('filterName')(...)
				usage in template
				
				*** Usage in template
				inputs | filterName: [params]
				
					filter
					currency
					number
					date
					json
					lowercase
					uppercase
					limitTo
					orderBy
				*/
			}

			function customize_filter() {
				// filter should take input and return a output, filtered value. 
				// In Angular, filter definition should return a function which does the filtering. 
				var source = "https://docs.angularjs.org/guide/filter";
				angular.module('myReverseFilterApp', [])
				.filter('reverse', function() {
				  return function(input, uppercase) {
				  	// in template, input is value before '|', e.g.:
				  	// {{greeting | reverse:true}}
				  	// so input is greeting, uppercase is true
				    input = input || '';
				    var out = "";
				    for (var i = 0; i < input.length; i++) {
				      out = input.charAt(i) + out;
				    }
				    // conditional based on optional argument
				    if (uppercase) {
				      out = out.toUpperCase();
				    }
				    return out;
				  };
				})
				.controller('MyController', ['$scope', function($scope) {
				  $scope.greeting = 'hello';
				}]);	

				// usage:
				/*
				<div ng-controller="MyController">
				  <input ng-model="greeting" type="text"><br>
				  No filter: {{greeting}}<br>
				  Reverse: {{greeting|reverse}}<br>
				  Reverse + uppercase: {{greeting|reverse:true}}<br>
				</div>
				*/				
			}

			function filter_usage() {
				var app = angular.module("demoApp", ['ngResource']);

				app.filter("sanitize", ['$sce', function($sce) {
				  return function(htmlCode){
				    return $sce.trustAsHtml(htmlCode);
				  }
				}]);
				// <div ng-bind-html="whatever_needs_to_be_sanitized | sanitize"></div>
			}

			function output_as_html_not_string() {
				// For Angular 1.3, use ng-bind-html in the HTML (2 steps):
				// <div ng-bind-html="thisCanBeusedInsideNgBindHtml"></div>
				var SomeController = function () {
				  this.thisCanBeusedInsideNgBindHtml = '<ul><li>render me please</li></ul>';
				}
				// and use $sce.trustAsHtml() in the controller to convert the html string.
				$scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml(this.thisCanBeusedInsideNgBindHtml);

				// for Angular 1.2, use:
				// <div ng-bind-html-unsafe="expression"></div>
			}

			function transclude_usage(){
			}

			function ngValue_usage() {
				var source = "https://docs.angularjs.org/api/ng/directive/ngValue";
			}

			function timeout_usage() {

			}
			function watch_usage() {

			}

			function special_symbol_in_directive() {
				// &, = #
			}

			function service_provider_factory_difference() {
			}

			function difference_ngIf_ngShow() {

			}

			function what_is_myApp_value() {
				//value(obj) - registers a value/object that can only be accessed by services, not providers.
				// value(name, value);
				// It is mentioned here: https://docs.angularjs.org/api/ng/type/angular.Module
				// and here: https://docs.angularjs.org/api/auto/service/$provide#value
				$provide.value('a', 123);	
				myApp.value('decoration', {symbol: '*'});


				angular.module('myModule', []).
				  value('a', 123).
				  factory('a', function() { return 123; }).
				  directive('directiveName', '...').
				  filter('filterName', '...');

				// is same as

				angular.module('myModule', []).
				  config(function($provide, $compileProvider, $filterProvider) {
				    $provide.value('a', 123);
				    $provide.factory('a', function() { return 123; });
				    $compileProvider.directive('directiveName', '...');
				    $filterProvider.register('filterName', '...');
				  });
			}

			function q_defer_usage() {

			}

			function ui_router() {

			}

			function user_input_validation() {

			}

			function ng_select_usage() {

			}

			function avoid_flashing() {

			}

			function http_request() {

			}

			function send_event() {
				// broadcast event down to decendents
				function firstCtrl($scope) {
				  $scope.$broadcast('someEvent', [1,2,3]);
				}
				// emit up to ancestor
				function secondCtrl($scope){
				  $scope.$emit('someEvent', [1,2,3]);
				}
				// if element at same level, get rootScope and then broadcast
				function firstCtrl($rootScope){
	  			$rootScope.$broadcast('someEvent', [1,2,3]);
				}
			}
	}

		function backboneJS() {

		}
	}

	function html5() {

		function pitfall() {
			function self_closing_script_tag_wrong() {
				// wrong:
				// <script src="foobar.js" /> <!-- self-closing script tag -->
				// 
				// right:
				// <script src="foobar.js"></script>
			}
		}
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

		function snippet() {

			function tag_in_before_body(){
				var book = "http://www.amazon.com/dp/1449363261//ref=cm_sw_su_dp?tag=nethta-20";
				var source = "http://www.newthinktank.com/2014/12/html-5-tutorial/";
				/*
				<html lang="en">
				<meta charset="UTF-8">

				<!-- Description for your page. Shouldn't be longer then 200 characters -->
				<meta name="description"
				content="Learn everything you want to know about HTML5 in this video tutorial. 
				Tags, content sections, embedding media, forms, canvas and more will be covered."/>
				
				<!-- Keywords are used to define your content for search engines. Shouldn't be longer then 1,000 characters -->
				<meta name="keywords"
				content="html5 canvas,html5 tutorial,html5 tutorial, html5 doctype, html5 tags,html5 video,learn html5"/>

				//<!-- Defines how search engines should index your content.
				index / noindex : indicates if search engines should index the page
				follow / nofollow : indicates if hyperlinks should be followed and indexed
				archive / noarchive : indicates whether the page should be archived
				-->
				<meta name="robots" content="index,follow"/> 

				<!-- Must come before any other link tags -->
				<!-- Defines a default location for all links on a page for browsers -->
				<base href="http://localhost/html5/"/>

				<link rel="icon" href="favicon.ico"/>
				<title>HTML5 Tutorial</title>
				*/
			}

			function tag_in_body() {
				/*

				<!-- onunload is not supported in browsers other then IE -->
				<body onload="alert('Hello')" onunload="alert('Bye Bye')">

				<!-- Message that is displayed if the browser has JavaScript disabled -->
				<noscript>Please Enable JavaScript</noscript>

				<!-- <blockquote> indents the surrounding text and cite defines where the quote came from -->
				<blockquote cite="http://epicquotes.org/view.php?id=151">
				Never, under any circumstances, take a sleeping pill and a laxative on the same night.
				</blockquote>

				<!-- <q> surrounds text with quotes -->
				<q cite="http://www.brainyquote.com/quotes/quotes/h/hennyyoung128883.html">If at first you don’t succeed ... so much for skydiving.</q><br><br>


				<!-- <pre> preserves white space, but tabs can get messed up -->
				<pre>
			                  _          _
			                 (.&lt;        &gt;.)
			                \(_)________( \
			                 (___________)\\
			                    (     )     \
			                     |   |
			                     |   |
			                     |   |
			                    _|   |_
			                   (_______)
				</pre>

				<!-- Use pre and code to surround code -->
				<!-- var is used to emphasive important variables -->
				<pre>
					<code>
						function init(){
							var <var>h1tags</var> = document.getElementsByTagName("h1");
							<var>h1tags[0]</var>.onclick = changeColor;
						}
					</code>
				</pre>

					<!-- 4 ways to emphasize text without a line break -->
					<b>Bold : Bold Font</b><br>
					<strong>Strong : Bold Font</strong><br>
					<em>Emphasis : Italic Font</em><br>
					<i>Italic : Italic Font</i><br>

					<!-- 3 ways to format text for special purposes -->
					<small>Small : Short Comment</small><br>
					<ins>Insert : Added to Document</ins><br>
					<del>Delete : Strike</del><br>
					<samp>Sample Programming Output</samp><br><br>

					<!-- Advisory tags -->
					<!-- dfn adds emphasis to a word without title and a popup with title -->
					<!-- kbd is used to emphasis input expected from a user -->
					This is an abbreviation <abbr title="abbreviation">abbrv.</abbr><br>
					<dfn>Definition: </dfn>the formal statement of the meaning or significance of a word<br>
					<dfn title="the formal statement of the meaning or significance of a word">Definition</dfn><br>
					<kbd>Enter something here</kbd>

					<!-- Character Entities : http://dev.w3.org/html5/html-author/charref -->
					&cent;
					&pound;
					&yen;
					&copy;
					&reg;
					&deg;
					&frac14;
					&frac12;
					&frac34;
					&sup2;<br>

					<!-- Superscript / Subscript -->
					4<sup>2</sup><br>
					
					CO<sub>2</sub><br>

					<!-- You can define the direction of text with rtl or ltr -->
					<bdo dir="rtl">أين هو مطعم</bdo><br>
					
					<!-- You can provide ruby annotation for pronunciation -->
					<ruby>飯店<rt>hanten</rt></ruby><br>

					<!-- HYPERLINKS -->
					<!-- Contains the referenced link with an optional title -->
					<!-- A hyperlink has 3 interactive states hover, active, visited -->
					<a href="http://youtube.com/" title="YouTube">YouTube</a>

					<!-- You can open the mail software to send a message -->
					<a href="mailto:derekbanas@verizon.net">Send an Email</a>
					
					<!-- You can also dynamically call for a JavaScript function to execute -->
					<a href="javascript:toggleImg()">Toggle Image</a><br>

					<!-- You can define hot spot links in images with image maps. 
					Import your image into Gimp and Filters → Web → ImageMap -->
					<img src="http://localhost/html5/imagemap.png" alt="imagemap example" width="600" height="125" usemap="#map" />

					<map name="map">
					<area shape="circle" coords="57,62,39" alt="Yahoo" title="Go to Yahoo" href="http://yahoo.com" />
					<area shape="poly" coords="192,20,166,45,232,105,301,42,272,20,192,19,195,20" alt="Diamonds" title="Go to Diamonds" href="http://diamonds.com" />
					<area shape="rect" coords="332,8,595,115" alt="Google" title="Go to Google" href="http://google.com" />
					</map>

					<!-- Embed a PDF -->
					<object data="SmallBusinessPresentation.pdf" type="application/pdf" 
						width="750" height="400">
					</object>

					<!-- Embed a HTML file -->
					<object data="html52.html" type="text/html" 
						width="750" height="400">
					</object>

					<!-- Embed a WAV file -->
					<object data="http://www.wavsource.com/snds_2014-11-23_3967152387108926/animals/bird.wav" type="audio/x-wav">
					
						<!-- Used to pass parameters to an embedded object 
						attributes consist of a name and value -->
						<param name="autoplay" value="true">
						<param name="controller" value="true">
					
					</object>

					<!-- You can embed MP3 and Wav (Not IE) files using audio 
					mp3 uses audio/mpeg -->
					
					<audio controls autoplay loop preload>
						<source src="comingtotake.wav" type="audio/wav">
						Browser doesn't support the audio tag
					</audio>
						
					<!-- You can embed MP4s with video -->
					<video controls autoplay loop preload>
						<source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
					</video>



				*/
			}

			function canvas_api() {
				// in html
				// <canvas id = "my_canvas" width="800" height="400">
				// </canvas>
				function init() {
					var canvas = document.getElementById('my_canvas');
					if(canvas.getContext) {
						var ctx = canvas.getContext("2d");

						// 1. draw rect
						ctx.fillStyle = "#FAEBD7"; // color used to fill a shape
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						// draw a rect from top left 0, 0 to width and height
						
						ctx.fillStyle = "#AF002A";
						// every time you draw new shape, you have to change this value
						// or new shape will use previous color and you will not see if
						// it is overlaps with existing shape. 
						ctx.fillRect(100, 100, 50, 50);
						// fillRect are border less
						
						// 2. stroke rect
						// border is called stroke in canvas, here is how you add border
						ctx.lineWidth = 5; // border width
						ctx.strokeStyle = "#A4C639"; // border color
						ctx.strokeRect(100, 100, 50, 50); // draw border around the rect

						// 3. draw circle (path)
						ctx.beginPath(); // call this func to begin drawing a path
							ctx.arc(200 /* center X */, 200 /* center Y */, 
								50 /* radius */, 0 /* starting angle */, 
								Math.PI*2 /* ending angle */, 
								true /* anticlockwise */);
							// this line draws a circle
							ctx.fill(); // execute
						ctx.closePath();

						// 4. draw polygon
						ctx.beginPath();
							ctx.fillStyle = "#3B444";
							ctx.moveTo(350, 200);
							ctx.lineTo(400, 50); // draw a line to this point from prevous point
							// new point stops at end of this line
							ctx.lineTo(450, 200);
						ctx.closePath();

						// 4. draw stroke to polygon
						ctx.strokeStyle = "#A4C639";
						ctx.beginPath();
							ctx.lineWidth = 5;
							ctx.moveTo(350, 200);
							ctx.lineTo(400, 50); 
							ctx.lineTo(450, 200);
						ctx.closePath();
						ctx.stroke();

						// 6. linear gradient fill
						var linGrad = ctx.createLinearGradient(400, 100, 500, 500);
						// top left, bottom right
						linGrad.addColorStop(0, "#8DB600");
						linGrad.addColorStop(0.5, "#9966CC");
						linGrad.addColorStop(1, "#7C0A02");
						ctx.fillStyle = linGrad;
						//ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
						// this also works
						ctx.fillRect(400, 100, 100, 100);

						// 7. radial gradient fill
						var radGrad = ctx.createRadialGradient(275, 250, 5, 290, 260, 100)
						radGrad.addColorStop(0, "red");
						radGrad.addColorStop(1, "white");
						ctx.fillStyle = radGrad;
						ctx.arc(250, 250, 50, 0, Math.PI*2, true);
						ctx.fill();

						// 8. draw text
						ctx.font = "bold 40px Arial";
						ctx.fillStyle = "#8db600";
						ctx.fillText("Hello", 100, 100);

						// 9. stroke text (add border to text)
						ctx.strokeStyle = "black";
						ctx.lineWidth = 2;
						ctx.strokeText("Hello", 100, 100);

						// 10. add shadow to text
						ctx.shadowOffsetX = 2;
						ctx.shadowOffsetY = 2;
						ctx.shadowBlur    = 3;
						ctx.shadowColor   = "black";
						ctx.fillText("Hello", 100, 100);

						// 11. lineCap
						ctx.lineWidth = 20;
						ctx.strokeStyle = "purple";
						ctx.beginPath();
							ctx.moveTo(200, 150);
							ctx.lineCap = "round"; // "square"
							ctx.lineTo(200, 250);
							ctx.stroke();
						ctx.closePath();

						// 12. draw curve
						ctx.arc(270, 270, 50, 0, Math.PI, true);
						ctx.stroke();

						// 13. draw bezier curve
						ctx.strokeStyle = "blue";
						ctx.beginPath();
						ctx.moveTo(450, 250);
						ctx.bezierCurveTo(550, 250, 450, 100, 550, 100);
						ctx.stroke();
						ctx.closePath();

						// 14. scale & rotate
						ctx.fillStyle = "purple";
						ctx.fillRect(200, 200, 100, 100);
						ctx.rotate(Math.PI / 4);
						ctx.scale(0.5, 1);
						ctx.fillRect(400, 500, 100, 100);
						
					}
				}
				onload = init;
			}

			function geolocation_api() {

				navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
			}

			function local_storage() {
				var my_name = "Nicolas Xu";
				localStorage.setItem("name", my_name);
				localStorage.getItem("name");
				localStorage.removeItem("name");

			}

			function message_api() {

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

		function full_css_code_for_a_feature() {
			function animation() {
				// 1. CSS loader animation using Sass and Compass
				var address1 = "http://creative-punch.net/2014/01/pure-css-loader-animation-using-sass-compass/";

				// 2. flip effect with CSS3 transform property
				var address2 = "http://creative-punch.net/2013/12/create-a-modern-flat-metro-style-menu-with-flip-effect-using-the-css3-transform-property/";
			}

			function transparent() {
				// 1. transparent glass menu bar with CSS3
				var address = "http://creative-punch.net/2014/02/make-transparent-glass-menu-bar-css3/";
			}

			function shapes() {
				// 1. hexagons
				var address1 = "http://creative-punch.net/2014/01/perfect-css-hexagons-size-using-transform-calc/";
				// Perfect CSS hexagons in any size using transform and calc()
			}
		}

		function css_file_path_relative() {
			var source = "http://stackoverflow.com/questions/940451/using-relative-url-in-css-file-what-location-is-it-relative-to";
			/*
			div#header { 
			  background-image: url('images/header-background.jpg');
			}
			 */
			// answer:
			// Partial URLs are interpreted relative to the source of the style sheet 
			// (the one linked in html file), 
			// not relative to the html document
			// 
		}

		function block_formating_context() {
			var source = "http://yuiblog.com/blog/2010/05/19/css-101-block-formatting-contexts/";
			var source2 = "http://www.sitepoint.com/understanding-block-formatting-contexts-in-css/";
			// block formatting context can:
			// 1. contain float
			// 2. prevent margin collapsing
		}

		function selectors() {

			function css_30_you_must_remember() {
				var source = "http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048";
				// 11. X[href="foo"]
				// 12. X[href*="nettuts"]
				// 13. X[href^="http"]
				// 14. X[href$=".jpg"]
				// 16. X[foo~="bar"]
				//    The tilda (~) symbol allows us to target an attribute which has a 
				//    spaced-separated list of values.
				//    .e.g: <a href="path/to/image.jpg" data-info="external image"> Click Me, Fool </a>
				// 18. X:after, X:before
				//     append element after X
				// 20. X:not(selector), e.g.: div:not(#container), *:not(p) 
				// 21. X::first-line, p::first-letter. pseudoElement
				// 22. li:nth-child(3), li:nth-last-child(2)
				// 24. ul:nth-of-type, ul:nth-last-of-type(3)
				// 26. li:first-child, li:last-child, 
				//     div p:only-child (It allows you to target elements which are the only child of its parent)
				// 29. li:only-of-type, ul > li:only-of-type
				// 30. [data-role="page"], this is an attribute selector
			}
			function same_level_after_selector() {
				// ~ selector
				/*
				p ~ ul {
					background: green;
				}
				*/
				// select all the uls at same level, after p
				// p and ul doesn't have to next to each other	
			}
			function same_level_selector_immediate_after() {
				// + selector
				/*
				div + p {
					background: yellow;
				}
				*/
				// select one p immediately after div, 
				// div and p must be at same level
			}

			function children_selector() {
				// > selector
				/*
				div > p {
					background: yellow;
				}
				*/
				// select children p of div
				// note the difference: ancestor, parent, children, descendent
			}

			function user_selection_selector() {
				// ::selection
				/*
					::selection {
						color: red;
						background: yellow;
					}
					::-moz-selection {
						color: red;
						background: yellow;
					}
				*/
				// it targets user selected text, example: http://www.w3schools.com/cssref/sel_selection.asp
			}

			function first_child_selector() {
				var source = "http://stackoverflow.com/questions/2717480/css-selector-for-first-element-with-class";
				// it can only to select first child relative to a parent element,
				// not working to select "first element with red class"
				/*
				.list:first-child {
					background-color: yellow;
				}

				 */
				
			}

			function nth_of_type_selector() {
				// if you want to select 2nd element with "red" class on it
				/*
				.red:nth-of-type(1)
				{
				  border:5px solid red;
				} 
				.red:first-of-type
				{
				  border:5px solid red;
				} 
				*/
			}
		}

		function specificity() {
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

		function css_properties_explanation() {
			// 1. white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;
			var explanation = "http://www.w3schools.com/cssref/pr_text_white-space.asp";

			// 2. clip: auto|shape|initial|inherit;
			//    object.style.clip="rect(0px,50px,50px,0px)"
			var explanation_clip = "http://www.w3schools.com/cssref/pr_pos_clip.asp";

			// 3. content: attr(data-content); /* dynamic content for the pseudo element */
			//    data-content is attribute in the tag
			// 4. user-select: none
			//    disable user selecting a text
			var user_select_explanation = "http://stackoverflow.com/questions/826782/css-rule-to-disable-text-selection-highlighting";
			// 5. pointer-events: none;
			var pointer_events_explanation = "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events";
			// 6. word-wrap:  normal|break-word|initial|inherit;
			// 7. word-break: normal|break-all|keep-all|initial|inherit;
			//    The word-break property specifies line breaking rules for non-CJK scripts.
			// 8. text-overflow: clip|ellipsis|string|initial|inherit
			// 9. calc(), attr(data-content), 
		}
		function snippets() {

			function not_selector_adding() {
				//input:not([type="radio"]):not([type="checkbox"])
				//:not([attr][attr2])
				// but this is not working
				// form input:not([type="radio"], [type="checkbox"]) {
				  /* css here */
				//}
			}

			function alternate_row_color() {

				// table tr:nth-child(odd) td{
				// 	background-color: #000000;
				// }
				// table tr:nth-child(even) td{
				// }
			}

			function use_css_to_set_img_src() {
				var source = "http://stackoverflow.com/questions/2182716/is-it-possible-to-set-the-equivalent-of-a-src-attribute-of-an-img-tag-in-css";
				/*
				<style>
				.MyClass123{
					content:url("http://imgur.com/SZ8Cm.jpg");
				}
				</style>

				<img class="MyClass123"/>
				*/
			}

			function find_out_unused_css_rule() {
				var source = "http://stackoverflow.com/questions/135657/tool-to-identify-unused-css-definitions";
				var firefox_plugin = "https://addons.mozilla.org/en-US/firefox/addon/dust-me-selectors/";

			}

			function multiple_font_file_for_same_font() {
				var source = "http://stackoverflow.com/questions/2436749/how-to-add-multiple-font-files-for-the-same-font";
				// each for different sub style for the same font
				// @font-face {
				//   font-family: "DejaVu Sans";
				//   src: url("fonts/DejaVuSans.ttf");
				// }
				// @font-face {
			 //    font-family: "DejaVu Sans";
			 //    src: url("fonts/DejaVuSans-Bold.ttf");
			 //    font-weight: bold;
				// }
				// @font-face {
			 //    font-family: "DejaVu Sans";
			 //    src: url("fonts/DejaVuSans-Oblique.ttf");
			 //    font-style: italic, oblique;
				// }
				// @font-face {
			 //    font-family: "DejaVu Sans";
			 //    src: url("fonts/DejaVuSans-BoldOblique.ttf");
			 //    font-weight: bold;
			 //    font-style: italic, oblique;
				// }
			}

			function no_way_to_set_background_image_from_right() {
				var source = "http://stackoverflow.com/questions/5142405/offset-a-background-image-from-the-right-using-css";
				// work around:
				// - setting a margin-right on the element instead
				// - adding transparent pixels to the image itself and positioning it top right
				// - or calculating the position using jQuery after the element's width is known.
			}

			function how_to_style_hr_element() {
				var source = "http://www.syntaxxx.com/how-to-style-hr-with-css/";

				// hr {
				// 	width: 80%;
				// 	height: 8px;
				// 	margin-left: auto;
				// 	margin-right: auto;
				// 	background-color:#FF0066;
				// 	color:#FF0066;
				// 	border: 0 none;
				// 	margin-top: 100px;
				// 	margin-bottom:100px;
				// 	}
			}

			function wild_characters_for_class() {
				var source = "http://stackoverflow.com/questions/5110249/wildcard-in-css-for-classes";
				// below selector is not working
				// .tocolor-*{
				//   background: red;
				// }
				// but you can do this:
				
				// div[class^="tocolor-"], div[class*=" tocolor-"] {
				//   color:red 
				// }

			}

			function box_shadow_only_one_side() {
				
				// .myDiv {
				//     border: 1px solid #333;
				//     width: 100px;
				//     height: 100px;
				//     -webkit-box-shadow: 10px 0 5px -2px #888;
				//             box-shadow: 10px 0 5px -2px #888;
				// }
				// params:
				//   1. x position
				//   2. y position
				//   3. bur radius
				//   4. shadow size, in px. 0 is same as box size, 
				//     5px is 5px larger than orginal box
				//     -5px is 5px small than original box
				//   5. color
			}

			function two_background_images() {
				var source = "http://stackoverflow.com/questions/423172/can-i-have-multiple-background-images-using-css";
				// body {
				//   background-image: url(images/bgtop.png), url(images/bg.png);
				//   background-repeat: repeat-x, repeat;
				// }
				// example here: http://www.css3.info/preview/multiple-backgrounds/
			}

			function customize_image_in_list() {

				// li{
				//   list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAE0lEQVQIW2NkYGD4D8RwwEi6AACaVAQBULo4sgAAAABJRU5ErkJggg==");
				// }
				// or you can use li:before following:
				// ul {
				//     list-style: none;
				//     padding:0;
				//     margin:0;
				// }

				// li { 
				//     padding-left: 1em; 
				//     text-indent: -.7em;
				// }

				// li:before {
				//     content: "• ";
				//     color: red; /* or whatever color you prefer */
				// }
			}

			function sass_$for_loop() {
				var explanation = "http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10";

				// @for $i from 1 through 3 {
				//   .item-#{$i} { width: 2em * $i; }
				// }
				// is compiled to:

				// .item-1 {
				//   width: 2em; }
				// .item-2 {
				//   width: 4em; }
				// .item-3 {
				//   width: 6em; }
				
				//used here: http://creative-punch.net/2014/01/pure-css-loader-animation-using-sass-compass/
				/*
				@for $i from 1 to ($elements + 1)
			  div.loader div:nth-child(#{$i})
			    animation-delay: #{sin(360deg * ($i / ($elements * $multiplier)))}s
			    background-color: hsl((360deg * ($i / $elements)), 50%, 60%)
				*/
			}

			function font_face(){

				// @font-face {
				//   font-family: 'icomoon';
				//   src:url('fonts/icomoon.eot?-5fbd21');
				//   src:url('fonts/icomoon.eot?#iefix-5fbd21') format('embedded-opentype'),
				//     url('fonts/icomoon.woff?-5fbd21') format('woff'),
				//     url('fonts/icomoon.ttf?-5fbd21') format('truetype'),
				//     url('fonts/icomoon.svg?-5fbd21#icomoon') format('svg');
				//   font-weight: normal;
				//   font-style: normal;
				// }
			}

			function customize_bootstrap_nav_bar() {
				// set the color in css
				// download the bootstrap css in component, configure and compile
				// http://getbootstrap.com/customize/
				
			}

			function make_bootstrap_column_same_height() {
				var source = "http://stackoverflow.com/questions/19695784/how-can-i-make-bootstrap-columns-all-the-same-height";
				// method 1
				/* 
				
				.row{
				  overflow: hidden; 
				}

				[class*="col-"]{
				  margin-bottom: -99999px;
				  padding-bottom: 99999px;
				}

				*/
				// method 2
				/*
				.row {
				  display: table;
				}

				[class*="col-"] {
				  float: none;
				  display: table-cell;
				  vertical-align: top;
				}

				*/
				// method 3, flex
				/*
				row {
				  display: -webkit-box;
				  display: -webkit-flex;
				  display: -ms-flexbox;
				  display:         flex;
				}
				 */
			}

			function pre_tag_css_wrap_code() {
				var source = "https://longren.io/wrapping-text-inside-pre-tags/";
				var stackoverflow = "http://stackoverflow.com/questions/248011/how-do-i-wrap-text-in-a-pre-tag";

					// best solution:
					// pre {
					//  white-space: pre-wrap;       /* css-3 */
					//  white-space: -moz-pre-wrap !important;  /* Mozilla, since 1999 */
					//  white-space: -pre-wrap;      /* Opera 4-6 */
					//  white-space: -o-pre-wrap;    /* Opera 7 */
					//  word-wrap: break-word;       /* Internet Explorer 5.5+ */
					//  width: 99%;
					// }
			}

			function background_image_size() {
				var source = "http://stackoverflow.com/questions/1341358/set-size-on-background-image-with-css";
				// .stretch{
				// /* Will stretch to specified width/height */
				//   background-size: 200px 150px;
				// }
				// .stretch-content{
				// /* Will stretch to width/height of element */
				//   background-size: 100% 100%;
				// }

				// .resize-width{
				// /* width: 150px, height: auto to retain aspect ratio */
				//   background-size: 150px Auto;
				// }
				// .resize-height{
				// /* height: 150px, width: auto to retain aspect ratio */
				//   background-size: Auto 150px;
				// }
				// .resize-fill-and-clip{ 
				//   /* Resize to fill and retain aspect ratio.
				//      Will cause clipping if aspect ratio of box is different from image. */ 
				//   background-size: cover;
				// }
				// .resize-best-fit{
				// /* Resize to best fit and retain aspect ratio.
				//    Will cause gap if aspect ratio of box is different from image. */ 
				//   background-size: contain;
				// }
			}

			function style_checkbox_radio_button_css3() {
				// before, you can not do it in css alone,
				// but now you can do it in css3
				var source = "http://webdesign.tutsplus.com/tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953";
				var source2 = "http://stackoverflow.com/questions/4148499/how-to-style-checkbox-using-css";
				// there are generators to help you, e.g.: http://www.csscheckbox.com/
				
				// html
				/*
					<input type="checkbox" id="c1" name="cc" />
					<label for="c1"><span></span>Check Box 1</label>
				*/
				/*
				
				input[type="checkbox"] {
				    display:none;
				}
				input[type="checkbox"] + label span {
				    display:inline-block;
				    width:19px;
				    height:19px;
				    margin:-1px 4px 0 0;
				    vertical-align:middle;
				    background:url(check_radio_sheet.png) left top no-repeat;
				    cursor:pointer;
				}
				input[type="checkbox"]:checked + label span {
				    background:url(check_radio_sheet.png) -19px top no-repeat;
				}


			  */
			}

			function hide_spinner_on_input_number() {
				var source = "http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box";
				/*
				input[type="number"]::-webkit-outer-spin-button,
				input[type="number"]::-webkit-inner-spin-button {
				    -webkit-appearance: none;
				    margin: 0;
				}
				input[type="number"] {
				    -moz-appearance: textfield;
				}
				<input type="number" />

				 */
			}

			function resize_img_proportionally_css() {
				// img.resize{
				//   width:540px;  // you can use % 
				//   height: auto;
				// }
				
				// or use the max-width or max-height
				/*
				#your-img {
				    height: auto; 
				    width: auto; 
				    max-width: 300px; 
				    max-height: 300px;
				} 
				*/
			}

			function inheret_class() {
				var source = "http://stackoverflow.com/questions/1065435/can-a-css-class-inherit-one-or-more-other-classes";
				/* LESS */
				/*
				.rounded_corners {
				  -moz-border-radius: 8px;
				  -webkit-border-radius: 8px;
				  border-radius: 8px;
				}

				#header {
				  .rounded_corners;
				}

				#footer {
				  .rounded_corners;
				}
				*/
				
				// you can also do it this way in html tag
				// <div class="firstClass secondClass thirdclass fourthclass"></div>
			}

			function css_target_vendor_browser() {
				var source = "http://stackoverflow.com/questions/952861/targeting-only-firefox-with-css";

				// <style type='text/css'>
				// /*This will work for chrome */
				// #categoryBackNextButtons
				// {
				//     width:490px;
				// }
				// /*This will work for firefox*/
				// @-moz-document url-prefix() {
				//     #categoryBackNextButtons{
				//         width:486px;
				//     }
				// }
				// </style>
				// <!--[if IE]>
				// <style type='text/css'>
				// /*This will work for IE*/
				// #categoryBackNextButtons
				// {
				//     width:486px;
				// }
				// </style>
				// <![endif]-->
			}
			function base64_background() {
				//.even { background: #fff url(data:image/gif;base64,R0lGODlhBgASALMAAOfn5+rq6uvr6+zs7O7u7vHx8fPz8/b29vj4+P39/f///wAAAAAAAAAAAAAAAAAAACwAAAAABgASAAAIMAAVCBxIsKDBgwgTDkzAsKGAhxARSJx4oKJFAxgzFtjIkYDHjwNCigxAsiSAkygDAgA7) repeat-x bottom}
				// small img, e.g. pattern background, you can encode in css
				// large image, it is best to put to seperate file
			}
			function disable_link_tag() {
				// .not-active {
				//   pointer-events: none;
				//   cursor: default;
				// }
			}
			function page_ankor_jump_keep_header() {
				var source = "http://stackoverflow.com/questions/4086107/html-positionfixed-page-header-and-in-page-anchors";
				// <h1><a class="anchor" name="barlink">Bar</a></h1>
				// .anchor { padding-top: 90px; }
			}
			function white_space_between_inline_block() {
				var source = "http://stackoverflow.com/questions/5078239/how-to-remove-the-space-between-inline-block-elements";
				var problem_explanation = "http://jsfiddle.net/dGHFV/1/";
				// solution 1:
				// add font-size: 0 to the parent element, and then declare a sensible font-size on the children
			}

			function put_copyright_at_bottom() {
				var source = "http://stackoverflow.com/questions/526035/html-css-positioning-float-bottom";
				/*
				<div id="container">
				  <!-- Other elements here -->
				  <div id="copyright">
				    Copyright Foo web designs
				  </div>
				</div>
				*/
				/*
				#container {
				    position: relative;
				}
				#copyright {
				    position: absolute;
				    bottom: 0;
				}
				*/
			}

			function remove_iframe_border() {
				var source = "http://stackoverflow.com/questions/65034/remove-border-from-iframe";
				// use frameBorder attribute in iframe attribute
				// example: 
				// <iframe src="myURL" width="300" height="300" frameBorder="0">Browser not compatible.</iframe>
			}
			function placeholder_for_select() {
				var source = "http://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box";
				/*
				<select>
			    <option value="" disabled selected>Select your option</option>
			    <option value="hurr">Durr</option>
				</select>
				 */
			}
			function make_img_gray_scale() {
				var source = "http://stackoverflow.com/questions/609273/convert-an-image-to-grayscale-in-html-css";
				/*
				img {
				  filter: gray; //IE6-9 
				  filter: grayscale(1); // Firefox 35+ 
				  -webkit-filter: grayscale(1); // Google Chrome, Safari 6+ & Opera 15+
				}

				// Disable grayscale on hover 
				img:hover {
				  filter: none;
				  -webkit-filter: grayscale(0);
				}

				*/
			}
			function img_auto_fit_container_ratio_remains() {
				/*
				img {
					max-width:100%;
					max-height:100%;

				}
				*/
			  // example: http://jsfiddle.net/xwrvxser/1/
				// To resize an image proportionally, you have to set 
				// either the height or width to "100%", but not both. 
				// If you set both to "100%", your image will be stretched.
			}

			function inline_hover_style() {
				var source = "";
				// you can NOT use inline :hover style because the spec won't allow it. 
				/*
				:hover is a pseudo-selector and, for CSS, only has meaning within the 
				style sheet. There isn't any inline-style equivalent (as it isn't defining 
				the selection criteria).
				*/
				
				// a walk around is to just add remove css class that use :hover
			}

			function import_css_file_in_css() {
				// @import url("base.css");
				// The @import rule must precede all other rules (except the @charset rule); and
				// Additional @import statements require additional server requests.
			}
			function animate_display_property() {
				var source = "http://stackoverflow.com/questions/3331353/transitions-on-the-display-property";
				// display is not a animatable property, because display none to block
				// will cause re-flow.
				// visibility is animatable, since it only cause re-paint.
				// but you can work around it by animating on other properties, such as 
				// visibility, or height
				// example: 
				// http://codepen.io/mindfullsilence/pen/DtzjE
			}

			function no_previous_sibling_selector() {
				var source = "http://stackoverflow.com/questions/1817792/is-there-a-previous-sibling-selector";

			}
			function css3_background_stretch() {
				var source = "http://stackoverflow.com/questions/376253/stretch-and-scale-css-background";
				/*
				#my_container {
				    background-size: 100% auto; // width and height, can be %, px or whatever. 
				}
				*/
				/*
				body {
			    background-image: url(bg.jpg);
			    -webkit-background-size: cover;
			    -moz-background-size: cover;
			    -o-background-size: cover;
			    background-size: cover;
				}
				// cover means stretching the image either vertically or horizontally 
				so it never tiles/repeats.
				*/
			}
			function vertical_center() {
				var source = "http://stackoverflow.com/questions/396145/how-to-vertically-center-a-div-for-all-browsers";
				// note: with css3 you can center anything without knowing the width and height 
				var source2 = "http://stackoverflow.com/questions/6794000/fixed-position-but-relative-to-container"
				/*
				<div class="outer">
				<div class="middle">
				<div class="inner">

				<h1>The Content</h1>

				<p>Once upon a midnight dreary...</p>

				</div>
				</div>
				</div>
				*/
				/*
				.outer {
				    display: table;
				    position: absolute;
				    height: 100%;
				    width: 100%;
				}

				.middle {
				    display: table-cell;
				    vertical-align: middle;
				}

				.inner {
				    margin-left: auto;
				    margin-right: auto; 
				    width: 100px; //whatever width you want
				}
				*/
			}
			function vertical_center_text_in_div() {

				// css verticl-align = middle, only works for inline elements, not on block elem
				// source = "http://phrogz.net/CSS/vertical-align/index.html"
				var source = "http://stackoverflow.com/questions/8865458/how-to-align-text-vertically-center-in-div-with-css";
				// html
				/*
				<div Id="box">
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				*/
				// 1. line height method, 
				//    only one line text, height is known and fixed
				/*
				#box {
				  height: 90px;
				  line-height: 90px;
				}
				*/
				// 2. line height allow multiple lines
				// <div>
				//   <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
				// </div>
				/*
				div {
				  width: 250px;
				  height: 100px;
				  line-height: 100px;
				  text-align: center;
				}

				span {
				  display: inline-block;
				  vertical-align: middle;
				  line-height: normal;      
				}
				*/
			  // 3. table display method
			  /*
			  div {
				  display: table;
				  width: 250px;
				  height: 100px;
				  text-align: center;
				}

				span {
				  display: table-cell;
				  vertical-align: middle;
				}
			  */
				// 4. flexbox
				// <div class="box">
				//     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
				// </div>
				/*
				display: flex;
				justify-content: center; 
				align-items: center; 
				*/
				// 5. table cell only, works on multi lines (recommended)
				// http://jsfiddle.net/TB43r/
				// <div id="box">
				//   Some text Some textSome textSome textSome
				//   <h1>h1 title</h1>
				// </div>
				/*
					display: table-cell;
					vertical-align: middle;
				 */
			}			
			function absolute_center_vertical_horizontal() {
				var source = "http://stackoverflow.com/questions/1776915/how-to-center-absolute-element-in-div#_=_";
				// Method 1: transform-translate, unknow height or width
				/*
				.centered-axis-xy {
				    position: absolute;
				    left: 50%;
				    top: 50%;
				    transform: translate(-50%,-50%);
					}
				 */
					// good for responsive design or unknown dimensions in 
					// general if you don't need to support IE8 and lower.
					// Explanation: 
					// The clue is, that left: 50% is relative to the parent while the 
					// translate transform is relative to the elements width/height.
					
					// Method 2: traditional one, known height and width
					// also known parents height and width
					// http://output.jsbin.com/rexuk/2/
			}
			function remove_border_input_box_button() {
				var source = "http://stackoverflow.com/questions/3397113/how-to-remove-border-outline-around-text-input-boxes-chrome";
				// remove  dotted outline on BUTTONS
				/*
				textarea:focus, input:focus{
				  outline: 0;
				}
				// remove all border on focused element
				*:focus {
				  outline: 0;
				}
				*/
				/*
				button::-moz-focus-inner {
				  border: 0;
				}

				*:focus {
				  outline: none;
				}
				 */
			}


			function force_reload_cached_css_file() {
				var source = "http://stackoverflow.com/questions/118884/what-is-an-elegant-way-to-force-browsers-to-reload-cached-css-js-files?page=1&tab=votes#tab-top";
				// use file version
				//<script src="/myJavascript.js?version=4"></script>
				// version should be a hash number
			}
			function hide_close_button_jquery_ui_css() {
				var source = "http://stackoverflow.com/questions/896777/how-to-remove-close-button-on-the-jquery-ui-dialog";
				// howver, this will affect all the dialog, please refer to the jquery way to do it.
				// css way
				/*
				.ui-dialog-titlebar-close{
				  display: none;
				}

				*/
			}
			function parent_selector() {
				// there is no css parent selector
				// but you can use the following jquery 
				// $("a.active").parents('li').css("property", "value");
			}

			function make_background_transparent_but_not_the_front_text() {
				var source = "http://stackoverflow.com/questions/806000/how-to-give-text-or-an-image-a-transparent-background-using-css";

				// you can use 
				// 1. Either use a semi-transparent PNG image or 
				// 2. use CSS3:
				// e.g. set this to parent element
				// background-color:rgba(255,0,0,0.5);
				// 
				// If you just use opacity: 0.5 on parent, and opacity: 1 on child, then
				// the child real opacity is the multiplication of 0.5 and 1. 
			}

			function use_css_to_style_select_tag() {
				var source = "http://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript";
				var code = "http://jsfiddle.net/danield770/YvCHW/4232/";
			}

			function html_enties_in_css() {
				var source = "http://stackoverflow.com/questions/190396/adding-html-entities-using-css-content";
				var all_html_enties = "http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/";
				// use escaped unicode in css content
				/*
				.breadcrumbs a:before {
				  content: '>\0000a0';
				}


				*/
			}

			function micro_clearfix() {
				var source = "http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best";
				/*
				.container:before,
				.container:after {
				  content:"";
				  display:table;
				}
				.container:after {
				  clear:both;
				}
				.container {
				  zoom:1;  //For IE 6/7 (trigger hasLayout) 
				}
				*/
			}

			function full_height_without_absolute_pos() {
				var source = "http://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space";
				var code = "http://jsfiddle.net/danield770/FC7eY/";
			}

			function show_bootstrap_dropdown_on_hover() {
				var source = "http://stackoverflow.com/questions/8878033/how-to-make-twitter-bootstrap-menu-dropdown-on-hover-rather-than-click";
				/*
				ul.nav li.dropdown:hover > ul.dropdown-menu {
				  display: block;    
				}
				<a class="dropdown-toggle" data-toggle="dropdown" href="#">
				    Dropdown
				    <b class="caret"></b>    <-- remove this line
				</a>


				 */
			}

			function transition_condition () {
				var source = "http://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css";
				// You can't animate a property if one of the property status is auto
			}

			function pure_css_hover_transition_menu() {
				var source = "";
				// markup
				/*
				<p>Here (scaleY(1))</p>
				<ul>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ul>
				 */
				// css
				/*
				ul {
				  background-color: #eee;
				  transform: scaleY(0);    
				  transform-origin: top;
				  transition: transform 0.26s ease;
				  position: absolute;
    			top: 20px;
				}

				p:hover ~ ul {
				  transform: scaleY(1);
				}
				ul:hover {
				  transform: scaleY(1);
				}
				*/
			}

			function make_div_100_of_browser_window() {
				var source = "http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window";
				// 1. view port height method
				//    1vh to 100vh
				// div {
				//   height:100vh;
				// }
				
				// 2. height 100% method
				// html, body {
				//   height: 100%;
				// }
				// #right {
				//   height: 100%;
				// }
				// 
				// 3. absolute position method
				// #right {
				//   position: absolute;
				//   top: 0;
				//   bottom: 0;
				// }
				// 4. flex method
				// to be added
			}

			function make_cursor_hand() {
				var source = "http://stackoverflow.com/questions/3087975/how-can-i-make-the-cursor-a-hand-when-a-user-hovers-over-a-list-item";
				// li { cursor: pointer; cursor: hand; }
				//Actually to expand on the previous answers, different browsers use different names.
			}

			function disable_resize_textarea() {
				var source = "http://stackoverflow.com/questions/5235142/how-to-disable-resizable-property-of-textarea";
				/*
				textarea {
				    resize: none;
				}
				*/
			}

			function disable_bullet_in_ol () {
				var source = "http://stackoverflow.com/questions/1027354/need-an-unordered-list-without-any-bullets";
				/*
				ul {
					  list-style-type: none;
					}
				*/
			}

			function align_label_checkbox() {
				// <div>
    		// 			<input type="checkbox" id="cb" /> <label for="cb">Label text</label>
  			// 	</div>
  			// 	input[type="checkbox"] {
				// 	vertical-align: middle;
				// }
			}
			function horizontal_center() {
				var source = "http://stackoverflow.com/questions/114543/horizontally-center-a-div-in-a-div?";
				// method 1:
				// works on all browser
				/*
					#inner {
	    		width: 50%;
	    		margin: 0 auto;
				} 
				*/
				// method 2: unknown width
				// works IE8+, doesn't matter the inner width
				/*
				#inner {
				  display: table;
				  margin: 0 auto;
				}
				 */
				// method 3: unknown width
				/*
					#outer {
					  width: 100%;
					  text-align: center;
					}

					#inner {
					  display: inline-block;
					}
					example:
					<div id="wrapper" style="text-align: center">    
					  <div id="yourdiv" style="display: inline-block;">You text</div>
					</div>
				 */
				// method 4: both horizontal & vertical center
				//<div class="content">This works with any content</div>
				/*
				.content {
				  position: absolute;
				  left: 50%;
				  top: 50%;
				  -webkit-transform: translate(-50%, -50%);
				  transform: translate(-50%, -50%);
				}

				*/
			}
			function set_placeholder_color_style() {
				var source = "http://stackoverflow.com/questions/2610497/change-an-inputs-html5-placeholder-color-with-css";
				// <input type="text" placeholder="Value">

				// ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
				//     color:    #909;
				// }
				// :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
				//    color:    #909;
				//    opacity:  1;
				// }
				// ::-moz-placeholder { /* Mozilla Firefox 19+ */
				//    color:    #909;
				//    opacity:  1;
				// }
				// :-ms-input-placeholder { /* Internet Explorer 10-11 */
				//    color:    #909;
				// }
			}

			function table_cell_padding_and_border() {
				var source = "http://stackoverflow.com/questions/339923/set-cellpadding-and-cellspacing-in-css";

				/*
					table {border-collapse: collapse;}
					td    {padding: 6px;}
				*/
			}

			function css_triangle() {
				var source = "http://stackoverflow.com/questions/7073484/how-do-css-triangles-work";
				/*
				#triangle-up {
				    width: 0;
				    height: 0;
				    border-left: 50px solid transparent;
				    border-right: 50px solid transparent;
				    border-bottom: 100px solid red;
				}
				*/
				// for more interesting answers, go to the source link
			}

			function style_half_character() {
				var source = "http://stackoverflow.com/questions/23569441/is-it-possible-to-apply-css-to-half-of-a-character";
			}
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

	function git_command() {
		// 1. update git user name
		// git config --global user.name "Your Actual Name"
		// 
		// 2. update git user email
		// git config --global user.email "Your Actual Email"
		// Your email address should be the same one associated with your GitHub account.
		// 
		// 3. verify git global configuration
		// git config -l

	}
}