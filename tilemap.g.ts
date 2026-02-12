// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau":
            case "niveau2":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140208080808080408080808080808081503080808080804080808080a08080812040808010b0b100a081109090d080812020808040808080808120808040808160408080208080a080812080802080816050808020808040a0812080a040a0815020808060d08040808120a080508081204080808060f04080812080802080816020808080808040a08120808040a081202080a080808040808120808040808160408080b0b0b10080a08080a040808160508080808080a08080808080408081502080a080808080808080a0802081316040808080808040808080808040808160609090c090f060f090c0f0f060f0917`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
. . . . . . 2 . . . . . . . . 2 
2 . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 . 2 . . 2 . . 2 . . 2 
2 . . . 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904090909090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
. . . . . . 2 . . . . . . . . 2 
2 . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 . 2 . . 2 . . 2 . . 2 
2 . . . 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
