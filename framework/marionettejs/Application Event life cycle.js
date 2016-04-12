/* 1st "before:start" event

	
"before:start" / onBeforeStart: fired just before 
the Application starts and before the initializers are executed.

 */
MyApp.on("before:start", function(options){
  options.moreData = "Yo dawg, I heard you like options so I put" +
  "some options in your options!";
});

/* 2nd run the initializer

 */
var App = Marionette.Application.extend({
  initialize: function(options) {
    console.log('My container:', options.container);
  }
});
var app = new app({container: '#app'});

/* 3nd "start" event

"start" / onStart: fires after the Application 
has started and after the initializers have been executed.

 */

MyApp.on("start", function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});