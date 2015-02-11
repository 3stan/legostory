"use strict";

var PrereqTypes = {
	QUEST: 1,
	CHARACTER: 2
}

var Prereq = Backbone.Model.extend({
	initialize: function(prereqType) {
		this.set("prereqType", prereqType)
	}
})

var Quest = Backbone.Model.extend({
	defaults: {
		weight: 1,
		rewards: {},
		prereqs: {}
	},

	initialize: function(givenTo, reportTo) {
		if(givenTo == undefined || reportTo == undefined) {
			throw new Error("givenTo or reportTo is not defined");
		}
		this.set("givenTo", givenTo);
		this.set("reportTo", reportTo);
	}
})

var QuestList = Backbone.Collection.extend({
	models: Quest
})