
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
        
        [new String("pancake") == new String("pancake"), 
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

		}

		function IE_problem() {

		}
	}

	function Libraries () {

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
	}

	function Frameworks() {
		function angularJS() {

		}

		function backboneJS() {

		}
	}

	function html5() {

	}

	function css() {

	}
}