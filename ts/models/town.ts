import { Character } from "./character";

export class Town {
  characters: Character[];
  name: string;

  calculateOverallMood() {
    this.characters.reduce(
      (acc, current) => 
        acc + (current.moodValue * current.moodWeight),
      0)
  }
}