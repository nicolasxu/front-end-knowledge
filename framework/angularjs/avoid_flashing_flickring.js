function avoid_flashing() {
	// Method 1: ngClock
	var source = "https://docs.angularjs.org/api/ng/directive/ngCloak";
	var another_source = "http://stackoverflow.com/questions/28514241/angularjs-how-to-prevent-code-flash-in-page-while-loading";
	
	// The ngCloak directive is used to prevent the Angular html template 
	// from being briefly displayed by the browser in its raw (uncompiled) 
	// form while your application is loading.
	
	// The directive can be applied to the <body> element, 
	// but the preferred usage is to apply multiple ngCloak directives 
	// to small portions of the page to permit progressive rendering of the browser view.
	
	// example:
	<div id="template1" ng-cloak>{{ 'hello' }}</div>
	<div id="template2" class="ng-cloak">{{ 'world' }}</div>


	// old time: (doesn't work now)
	<body style="display:none" ng-show="true" ng-class="{{bodyClass}}">


	// Method 2: ng-bind
	// ng-cloak will help to some extent, but you can fully prevent 
	// it using ng-bind directive instead of using {{ }}
	<td ng-bind="val.monthly"> </td>
	// not
	<td>{{val.monthly}}</td>
	// This has another advantage, namely that you can provide some
	// default text until the template is loaded. E.g. <h1 ng-bind="title">Loading...</h1>
}