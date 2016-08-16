/// <reference path="../../ext/jquery.d.ts" />

enum TileTypes {
  Town,
  River,
  Field,
  Last // Unused.
}

enum TransportationType {
  Ground,
  Water,
  Air,
  All
}

abstract class MapTile {
  traversableBy: TransportationType[];
  public minimapRepresentation: string;
  abstract render(): void;
}

class TownTile extends MapTile {
  traversableBy = [TransportationType.All]
  minimapRepresentation = "T"

  render() {
    return
  }
}

class RiverTile extends MapTile {
  traversableBy = [TransportationType.Water, TransportationType.Air]
  minimapRepresentation = "R"

  render() {
    return
  }
}

class FieldTile extends MapTile {
  traversableBy = [TransportationType.Ground, TransportationType.Air]
  minimapRepresentation = "F"

  render() {
    return
  }
}

export class Map {

  static createTile(inputType: string): MapTile {
    if (TileTypes[inputType] == TileTypes.Field) {
      return new FieldTile()
    } else if (TileTypes[inputType] == TileTypes.River) {
      return new RiverTile()
    } else {
      return new TownTile()
    }
  }

  width: number;
  height: number;
  tiles: MapTile[] = [];

  // Just a dumb generation logic for now
  generateMap(): void {
    let numTiles = this.width * this.height
    for (var i = 0; i < numTiles; i++) {
      let random = Math.floor(Math.random() * (TileTypes.Last))
      let tile = Map.createTile(TileTypes[random])
      this.tiles = this.tiles.concat(tile)
    }
  }

  render(): void {
    let row = ""
    for (var i = 0; i < this.tiles.length; i++) {
      row = row.concat(this.tiles[i].minimapRepresentation)
      if (i % this.width == this.width - 1) {
        let domObject = $("<div>").html(row)
        $("#map").append(domObject)
        row = ""
      }
    }
  }

  constructor(inputWidth: number, inputHeight: number) {
    this.width = inputWidth
    this.height = inputHeight
    this.generateMap()
    this.render()
  }
}