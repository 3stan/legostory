"use strict";

var Game = Backbone.Model.extend({
    defaults:{
        towns: new TownList(),
        characters: new CharacterList(),
        player: new Player()
    },

    loadTowns: function(townsFile) {
        var testTown = new Town()
        testTown.set("name", "TestTown")
        this.get("towns").add(testTown)
    },

    loadCharacters: function(charactersFile) {
        var testCharacter = new Character();
        testCharacter.set("name", "TestCharacter")
        this.get("characters").add(testCharacter)
    },

    loadPlayer: function(playerFile) {
        var testPlayer = new Player();
        testPlayer.set("name", "TestPlayer");
        this.set("player", testPlayer);
    },

    initialize: function(townsFile, charactersFile, playerFile) {
        townsFile = typeof townsFile !== 'undefined' ? townsFile : "resources/towns.tsv";
        charactersFile = typeof charactersFile !== 'undefined' ? charactersFile : "resources/characters.tsv";
        playerFile = typeof playerFile !== 'undefined' ? playerFile : "resources/player.txt";

        loadTowns(townsFile)
        loadCharacters(charactersFile)
        loadPlayer(playerFile)
    }
})