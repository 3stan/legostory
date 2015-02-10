"use strict";

var Quest = Backbone.Model.extend({
	defaults: {
		weight: 1,
		rewards: {}
	},

	initialize: function(givenTo, reportTo) {
		if(givenTo == undefined || reportTo == undefined) {
			throw new Error("givenTo or reportTo is not defined");
		}
		this.set("givenTo", givenTo);
		this.set("reportTo", reportTo);
	}
})