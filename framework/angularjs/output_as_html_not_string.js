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