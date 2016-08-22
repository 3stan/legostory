import { Character, Player } from "./models/character";
import { Map } from "./models/map/map";
import { Town } from "./models/town";

export interface GameConfig {
  townsFile?: string;
  charactersFile?: string;
  playerFile?: string;
}

export class Game {
  towns: Town[] = [];
  characters: Character[] = [];
  player: Player;
  map: Map;

  generateCharacters(town: Town): void {
    let testCharacter = new Character()
    testCharacter.name = "TestCharacter"
    testCharacter.hometown = town
    this.characters = this.characters.concat(testCharacter)
  }

  generateTowns(townsFile: string): void {
    let testTown = new Town()
    testTown.name = "TestTown2"
    this.towns = this.towns.concat(testTown)

    for (let town of this.towns) {
      this.generateCharacters(town)
    }
  }

  loadPlayer(playerFile: String): void {
    let testPlayer = new Player()
    testPlayer.name = "TestPlayer"
    this.player = testPlayer
  }

  constructor(config: GameConfig) {
    this.generateTowns("")
    this.loadPlayer("")
    this.map = new Map(4, 4)
  }
} 