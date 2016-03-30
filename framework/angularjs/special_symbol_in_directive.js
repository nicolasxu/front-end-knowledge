function special_symbol_in_directive() {
	var source = "https://docs.angularjs.org/api/ng/service/$compile";
	
}

// directive template
directive('name', [function () {
	return {
		priority: 0,
		template: '<div></div>',
		templateUrl: 'directive.html',
		replace: true,
		transclude: true,
		restrict: 'A',
		scope: {}, // The scope property can be true, an object or a falsy value

		controller: function($scope, $element, $attrs, $transclude, otherInjectables) {

		},
		compile: function compile(tElement, tAttrs, transclude) {
			return function postLink(scope, iElement, iAttrs, controller) {

			}
		},
		link: function postLink(scope, iElement, iAttrs) {

		}
	};
}])


// explanation for scope property in directive config object:
// 1. falsy: No scope will be created for the directive. 
//    The directive will use its parent's scope.
// 2. true: A new child scope that prototypically inherits from its parent 
//          will be created for the directive's element. 
//      If multiple directives on the same element request a new scope, 
//      only one new scope is created. 
// 3. {...} (an object hash)
//    - @ or @attr - bind a local scope property to the value of DOM attribute. 
//    The result is always a string since DOM attributes are strings
//       <my-component my-attr="hello {{name}}">
// 		- = or =attr - set up a bidirectional binding between a local scope property 
// 		and an expression passed via the attribute attr.
// 				<my-component my-attr="parentModel">
// 		- < or <attr, <my-component my-attr="parentModel"> and directive definition of scope: { localModel:'<myAttr' }, 
// 		  localModel will reflect the value of parentModel on the parent scope. Any changes to parentModel 
// 		  will be reflected in localModel, but changes in localModel will not reflect in parentModel. 