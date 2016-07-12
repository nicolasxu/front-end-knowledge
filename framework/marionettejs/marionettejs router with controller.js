var document = "https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.approuter.md";

var Mn = require('backbone.marionette');

var myController = {
	default: function () {},
	login: function () {}
}
var Router = Mn.AppRouter.extend({
	appRoutes: {
		'': 'default',
		'login': 'login'     // http://localhost:8080/#/login
		// "someMethod" must exist at controller.someMethod
	
	}, 
	controller: myController
	initialize: function () {
		var initData = this.getOption('keyInOptions');
	}
});

module.exports = Router;