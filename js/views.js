"use strict";

var TownView = Backbone.View.extend({
	template: _.template("<div><%= name %></div>"),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this.$el;
	}
})