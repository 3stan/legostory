var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("item", ["require", "exports"], function (require, exports) {
    "use strict";
    var ItemType;
    (function (ItemType) {
        ItemType[ItemType["Weapon"] = 0] = "Weapon";
        ItemType[ItemType["Consumable"] = 1] = "Consumable";
        ItemType[ItemType["Armor"] = 2] = "Armor";
    })(ItemType || (ItemType = {}));
    var Item = (function () {
        function Item(inputType) {
            this.type = inputType;
        }
        return Item;
    }());
    exports.Item = Item;
});
define("quest", ["require", "exports"], function (require, exports) {
    "use strict";
    var PrereqType;
    (function (PrereqType) {
        PrereqType[PrereqType["Quest"] = 0] = "Quest";
        PrereqType[PrereqType["Character"] = 1] = "Character";
    })(PrereqType || (PrereqType = {}));
    var Prereq = (function () {
        function Prereq() {
        }
        Prereq.prototype.checkPrereq = function () {
            if (this.prereqType == PrereqType.Quest) {
                return true;
            }
            else if (this.prereqType == PrereqType.Character) {
                return true;
            }
        };
        return Prereq;
    }());
    var Quest = (function () {
        function Quest(givenTo, reportTo) {
            this.givenTo = givenTo;
            this.reportTo = reportTo;
        }
        return Quest;
    }());
    exports.Quest = Quest;
});
define("town", ["require", "exports"], function (require, exports) {
    "use strict";
    var Town = (function () {
        function Town() {
        }
        Town.prototype.calculateOverallMood = function () {
            this.characters.reduce(function (acc, current) {
                return acc + (current.moodValue * current.moodWeight);
            }, 0);
        };
        return Town;
    }());
    exports.Town = Town;
});
define("character", ["require", "exports"], function (require, exports) {
    "use strict";
    var PreferenceType;
    (function (PreferenceType) {
        PreferenceType[PreferenceType["Character"] = 0] = "Character";
        PreferenceType[PreferenceType["Item"] = 1] = "Item";
    })(PreferenceType || (PreferenceType = {}));
    var Character = (function () {
        function Character() {
        }
        return Character;
    }());
    exports.Character = Character;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.apply(this, arguments);
        }
        return Player;
    }(Character));
    exports.Player = Player;
});
define("game", ["require", "exports", "character", "town"], function (require, exports, character_1, town_1) {
    "use strict";
    var Game = (function () {
        function Game(config) {
            this.towns = [];
            this.characters = [];
            this.generateTowns("");
            this.loadPlayer("");
        }
        Game.prototype.generateCharacters = function (town) {
            var testCharacter = new character_1.Character();
            testCharacter.name = "TestCharacter";
            testCharacter.hometown = town;
            this.characters = this.characters.concat(testCharacter);
        };
        Game.prototype.generateTowns = function (townsFile) {
            var testTown = new town_1.Town();
            testTown.name = "TestTown2";
            this.towns = this.towns.concat(testTown);
            for (var _i = 0, _a = this.towns; _i < _a.length; _i++) {
                var town = _a[_i];
                this.generateCharacters(town);
            }
        };
        Game.prototype.loadPlayer = function (playerFile) {
            var testPlayer = new character_1.Player();
            testPlayer.name = "TestPlayer";
            this.player = testPlayer;
        };
        return Game;
    }());
    exports.Game = Game;
});
/// <reference path="../ext/jquery.d.ts" />
define("main", ["require", "exports", "game"], function (require, exports, game_1) {
    "use strict";
    var Main;
    (function (Main) {
        function documentIsReady() {
            var gameConfig = {
                townsFile: "",
                charactersFile: "",
                playerFile: ""
            };
            var game = new game_1.Game(gameConfig);
            for (var _i = 0, _a = game.towns; _i < _a.length; _i++) {
                var town = _a[_i];
                $("#main_app").append(town.name);
            }
            for (var _b = 0, _c = game.characters; _b < _c.length; _b++) {
                var character = _c[_b];
                $("#main_app").append(character.name);
            }
            $("#main_app").append(game.player.name);
        }
        Main.documentIsReady = documentIsReady;
    })(Main || (Main = {}));
    $(document).ready(function () {
        Main.documentIsReady();
    });
});
