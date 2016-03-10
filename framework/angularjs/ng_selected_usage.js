function ng_select_usage() {
  // Sets the selected attribute on the element, if the expression 
  // inside ngSelected is truthy.

  // usage:
  <OPTION
  ng-selected="expression">
		...
	</OPTION>

	<label>Check me to select: 
	<input type="checkbox" ng-model="selected"></label><br/>
	<select aria-label="ngSelected demo">
	  <option>Hello!</option>
	  <option id="greet" ng-selected="selected">Greetings!</option>
	</select>
}