// function declaration vs function expression
function function_var_def() {
			var source = "http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname";
			var detailed_text = "http://kangax.github.io/nfe/";
			var functionOne = function() {
  			// Function expression
			};
			function functionTwo() {
  			// Function declarations
			}
			// The difference is that functionOne is assigned when run to this line of code, whereas 
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