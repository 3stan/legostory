import { Item } from "./item";
import { Quest } from "./quest";
import { Town } from "./town";

enum PreferenceType {
  Character,
  Item
}

export class Character {
  name: string;
  moodValue: number;
  moodWeight: number;
  inventory: Item[];
  hometown: Town;
}

export class Player extends Character {
  quests: Quest[];
}
