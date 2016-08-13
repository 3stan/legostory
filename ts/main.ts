/// <reference path="../ext/jquery.d.ts" />

import { Game, GameConfig } from "./game"

module Main {
  export function documentIsReady() {
    let gameConfig = {
      townsFile: "",
      charactersFile: "",
      playerFile: ""
    }
    let game = new Game(gameConfig)

    for (let town of game.towns) {
      $("#main_app").append(town.name);
    }

    for (let character of game.characters) {
      $("#main_app").append(character.name);
    }

    $("#main_app").append(game.player.name);
  }
}

$(document).ready(function(){
    Main.documentIsReady();
});
