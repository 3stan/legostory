/// <reference path="../../../ext/jquery.d.ts" />

import {MapGenerator, RandomMapGenerator} from "./map_generator";

enum TransportationType {
  Ground,
  Water,
  Air,
  All
}

export abstract class MapTile {
  traversableBy: TransportationType[];
  public minimapRepresentation: string;
  abstract render(): void;
}

export class TownTile extends MapTile {
  traversableBy = [TransportationType.All]
  minimapRepresentation = "T"

  render() {
    return
  }
}

export class RiverTile extends MapTile {
  traversableBy = [TransportationType.Water, TransportationType.Air]
  minimapRepresentation = "R"

  render() {
    return
  }
}

export class FieldTile extends MapTile {
  traversableBy = [TransportationType.Ground, TransportationType.Air]
  minimapRepresentation = "F"

  render() {
    return
  }
}

export class Map {

  width: number;
  height: number;
  generator: MapGenerator
  tiles: MapTile[] = [];

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
    this.generator = new RandomMapGenerator

    this.width = inputWidth
    this.height = inputHeight
    this.tiles = this.generator.generate(this.width, this.height)
    this.render()
  }
}