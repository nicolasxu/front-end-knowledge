/*

If a layout view is not managed by region, then 
- 'new' the layout will cause double event bindings!
- call render() 2nd time will make previous valid regions defined in object
  literal invalid, hash in regions will not link to undefined 
  after the 2nd render(), then 
  view.getRegion('nav').show(new Menu());
  will cause error. 

  solution is 
*/
	...
	onRender: function () {
		this.addRegion('nav', '#vs-nav-region');
		this.addRegion('header', '#vs-header-region');
		this.addRegion('content', '#vs-content-region');

		var ss = new Nav();
		var navRegion = this.getRegion('nav');

		navRegion.show( ss);
	}
	...

	// solution is use addRegion() function in onRender(), 
	// which will be called to build region hash after render(). 

	