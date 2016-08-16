enum ItemType {
	Weapon,
  Consumable,
  Armor
}

export class Item {
  type: ItemType;
  constructor(inputType: ItemType) {
    this.type = inputType;
  }
}