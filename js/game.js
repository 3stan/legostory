"use strict";

var Game = Backbone.Model.extend({
	defaults:{
		towns: new TownList()
	},

	initialize: function(townList) {
		this.set("towns", townList)
	}
})