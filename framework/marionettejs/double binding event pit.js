var MenuView = Marionette.LayoutView.extend({
	events: {
		'click #btn': function(e) {}
	}
});

var menu = new MenuView();

// 1. new operator will cause event binding 
var menu = new MenuView();
 menu = new MenuView();
 menu = new MenuView();
// above code will bind event 3 times

// 2. but if view is attached to region, then
//    region will remove all event binding
//    new a new view. No mutipal event binding.

dashboard.nav.show(new MenuView()); 
// will not cause double event binding. 