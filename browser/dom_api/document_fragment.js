var CollectionView = Backbone.View.extend({
	render: function() {
		var fragment = document.createDocumentFragment();
		
		_.each(this.collections.models, function(item){
			var view = new MyView({model: item});
			fragment.appendChild(view.render().el);
			// appending to fragment

		}, this);

		this.$el.html(fragment);
		// avoid page rendering slow protentially
	}
});