"use strict";

var TownView = Backbone.View.extend({
	template: _.template("<div><%= name %></div>"),

	initialize: function(model) {
		this.model = model;
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this.$el;
	}
})