"use strict";

var PreferenceType = {
    Character: 1,
    Item: 2
}

var Preference = Backbone.Model.extend({
})

var Character = Backbone.Model.extend({
    defaults: {
        name: "",
        moodValue: 0,
        moodWeight: 1,
        inventory: [],
        preferences: [],
        hometown: ""
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

var CharacterList = Backbone.Collection.extend({
    models: Character
})