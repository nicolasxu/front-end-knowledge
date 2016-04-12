/*

The above example works great, but it causes three separate 
paints: one for each layout that's being
shown. Marionette provides a simple mechanism to infinitely 
nest views in a single paint: just render all
of the children in the onBeforeShow callback.


 */


var ParentLayout = Marionette.LayoutView.extend({
  onBeforeShow: function() {
    this.showChildView('header', new HeaderView());
    this.showChildView('footer', new FooterView());
  }
});

myRegion.show(new ParentLayout(), options);

/*

In this example, the doubly-nested view structure will be rendered 
in a single paint.

This system is recursive, so it works for any deeply nested structure. 
The child views you show can render their own child views within their 
onBeforeShow callbacks!


 */