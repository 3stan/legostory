"use strict";

var ItemType = {
	WEAPON: 1,
	CONSUMABLE: 2
	ARMOR: 3
}

var Item = Backbone.Model.extend({
	initialize: function(itemType) {
		this.set("itemType", itemType);
	}
})