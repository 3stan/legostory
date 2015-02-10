"use strict";

var Town = Backbone.Collection.extend({
	models: Character,

	calculateOverallMood: function() {
		var sum =_.reduce(
			this.models,
			function(a,b) { return a + (b.get("moodValue") * b.get("moodWeight")) },
			0);
		return sum / this.models.length;
	}
})