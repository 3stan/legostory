"use strict";

var Character = Backbone.Model.extend({
	defaults: {
		name: "",
		moodValue: 0,
		moodWeight: 1,
		inventory: [],
		preferences: {}
	}
})

var Player = Character.extend({
	defaults: 
		function() {
			return _.extend({}, Character.prototype.defaults,
         		{
         			quests: new QuestList()
         		})
		}
})