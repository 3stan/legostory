import { MapTile, Map, FieldTile, RiverTile, TownTile } from "./map";

export enum TileTypes {
    Town,
    River,
    Field,
    Last // Unused.
}

export abstract class MapGenerator {
    static createTile(inputType: string): MapTile {
        if (TileTypes[inputType] == TileTypes.Field) {
            return new FieldTile()
        } else if (TileTypes[inputType] == TileTypes.River) {
            return new RiverTile()
        } else {
            return new TownTile()
        }
    }

    abstract generate(width: number, height: number): MapTile[]
}

export class RandomMapGenerator extends MapGenerator {
    generate(width: number, height: number): MapTile[] {
        let numTiles = width * height
        let tiles: MapTile[] = []
        for (var i = 0; i < numTiles; i++) {
            let random = Math.floor(Math.random() * (TileTypes.Last))
            let tile = MapGenerator.createTile(TileTypes[random])
            tiles = tiles.concat(tile)
        }
        return tiles
    }
}

class ExpandingMapGenerator extends MapGenerator {
    generate(): MapTile[] {
        return []
    }
}