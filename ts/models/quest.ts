import { Character } from "./character";

enum PrereqType {
  Quest,
  Character
}

class Prereq {
  prereqType: PrereqType

  checkPrereq() {
    if (this.prereqType == PrereqType.Quest) {
      return true;
    } else if (this.prereqType == PrereqType.Character) {
      return true;
    }
  }
}

export class Quest {
  weight: number;
  rewards: any[];
  prereqs: Prereq[];

  constructor(
    private givenTo: Character, 
    private reportTo: Character
  ) {
    
  }
}