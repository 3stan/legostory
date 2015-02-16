"use strict";

$(document).ready(function() { 
	var game = new Game();
	var testView = new TownView({model: game.get('towns').at(0)});
	$("#main_app").append(testView.render());
});
