function transclude_usage(){

	var source = "https://docs.angularjs.org/api/ng/directive/ngTransclude";

	// elements in original directive tag will be placed into 
	// the directive template between <ng-tranclude></ng-transclude>
	
	// ng-tranclude is used in the directive template

	// example:
	
	<script>
		angular.module('transcludeFallbackContentExample', [])
		.directive('myButton', function(){
		            return {
		              restrict: 'E',
		              transclude: true,
		              scope: true,
		              template: '<button style="cursor: pointer;">' +
		                          '<ng-transclude>' +
		                            '<b style="color: red;">Button1</b>' + // fallback content
		                          '</ng-transclude>' +
		                        '</button>'
		            };
		        });
		</script>
		//<!-- fallback button content -->
		<my-button id="fallback"></my-button>
		//<!-- modified button content -->
		<my-button id="modified">
		  <i style="color: green;">Button2</i>
	</my-button>


	
}