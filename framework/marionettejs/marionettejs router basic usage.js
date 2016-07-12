var Mn = require('backbone.marionette');

var Router = Mn.AppRouter.extend({
	routes: {
		'': 'default',
		'login': 'login'     // http://localhost:8080/#/login
	
	}, 
	initialize: function () {
		var initData = this.getOption('keyInOptions');
	},
	// below are route functions
	default: function () {
		console.log('this is default route');
	}, 
	login: function () {
		console.log('this is login route');
	}
});

module.exports = Router;

// if you define routes in appRoutes, e.g.:

	var Router = Mn.AppRouter.extend({
		appRoutes: {
			'': 'default',
			'login': 'login'     // http://localhost:8080/#/login
		}
	});
// then router will find route function 'default', and 'login'
// in controller in Router object. If can't find them, error
// is thrown. 






