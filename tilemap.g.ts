// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);

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
            case "level0":
            case "niveau3":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level2":
            case "niveau4":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level3":
            case "niveau5":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level4":
            case "niveau6":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level5":
            case "niveau7":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level6":
            case "niveau8":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level7":
            case "niveau9":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909090909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "level8":
            case "niveau10":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "level9":
            case "niveau11":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "level10":
            case "niveau12":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "level11":
            case "niveau13":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "level12":
            case "niveau14":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "level13":
            case "niveau15":return tiles.createTilemap(hex`100010000107070b0b0e01070b07070e0b0707140209090909090409090909090909091503090909090904091809090809090912040909010b0b100809110a0a0d090912020909040909090909120909040909160409090209090809091209090209091605090902090904080912090804080915020909060d090409091208090509091204090909060f0409091209090209091602090909090904080912090904080912020908090909040909120909040909160409090b0b0b10090809090804090916050909090909080909090909040909150209080909090909090908090909131604090909090904090909091909090916060a0a0c0a0f060f0a0c0f0f060f0a17`, img`
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
`, [myTiles.tile1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,myTiles.tile18], TileScale.Sixteen);
            case "niveau16":
            case "niveau16":return tiles.createTilemap(hex`100010000201011111130201110101131101010a030f0f0f0f0f0d0f0f0f0f0f0f0f0f19090f0f0f0f0f0d0f150f0f100f0f0f170d0f0f02111104100f160606080f0f17030f0f0d0f0f0f0f0f170f0f0d0f0f0b0d0f0f030f0f100f0f170f0f030f0f0b0e0f0f030f0f0d100f170f100d100f19030f0f05080f0d0f0f17100f0e0f0f170d0f0f0f05140d0f0f170f0f030f0f0b030f0f0f0f0f0d100f170f0f0d100f17030f100f0f0f0d0f0f170f0f0d0f0f0b0d0f0f111111040f100f0f100d0f0f0b0e0f0f0f0f0f100f0f0f0f0f0d0f0f19030f100f0f0f0f0f0f0f100f0f0f180b0d0f0f0f0f0f0d0f0f0f0f0c0f0f0f0b05060612061405140612141405140607`, img`
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
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile15,myTiles.tile16,myTiles.tile18,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDark0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterEast2], TileScale.Sixteen);
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`14001400020101010101010101010101010101010101010d030a190a0a0a0a190a0a0a0a0a0a0a0a0a190a0e030a0a0a0a0a0a0a0a0a0a0a0a190a0a0a0a0a0e030a190a0a020115121214010c0101010d0a0a0e030a0a0a0a0314161212130a0a0a0a0a0e0a0a0e0302010c0105030a0a0a0e0a0a0a0a0a0e0a0a0e03030a0a0a0a030a0a0a0401010d0a0a0e190a0e03030a190a0a0b0a0a0a0a0a0a0e0a0a0e0a0a0e03030a0a0a0a030a0a0a0a0a0a0e0a0a0e0a0a0e030607090a0a030a190a0a190a0e0a0a0e0a0a0e060709030a0a030a0a0a0a0a0a0e0a0a0e0a0a0e0a1103030a0a030a0a0a0a0a0a0e0a0a0e0a0a0e0a0a03030a0a0317100a0a0a0f0e0a0a0e190a0e0a0a03030a0a06070707070707080a0a0e0a0a0e0a0a03030a0a0a0a0a0a0a0a0a0a0a0a0e0a0a0e0a0a03030a0a190a0a0a0a0a0a0a0a0a0e0a190e0a0a0306070707070712120707071a07080a0a0e0a0a120a190a0a0a0a0a0a0a190a0a0a0a0a0a0e0a0a120a0a0a0a190a0a0a0a0a0a0a190a0a0a0e1818060707070707070707070707070707070708`, img`
22222222222222222222
2..................2
2..................2
2....222..22.2222..2
2....222..2.....2..2
222.222...2.....2..2
22....2...2222..2..2
22...........2..2..2
22....2......2..2..2
2222..2......2..2..2
2222..2......2..2..2
..22..2......2..2..2
..22..2......2..2..2
..22..22222222..2..2
..22............2..2
..22............2..2
..2222222..222222..2
...................2
...................2
..222222222222222222
`, [myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile19,sprites.dungeon.stairLadder,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.chestClosed,sprites.dungeon.floorLight2,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterSouth0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "greenOuterNorth0":
            case "tile3":return tile3;
            case "greenOuterNorthWest":
            case "tile4":return tile4;
            case "greenOuterWest0":
            case "tile5":return tile5;
            case "greenInnerSouthWest":
            case "tile6":return tile6;
            case "greenInnerSouthEast":
            case "tile7":return tile7;
            case "greenOuterSouthEast":
            case "tile8":return tile8;
            case "greenOuterSouth1":
            case "tile9":return tile9;
            case "greenOuterSouthWest":
            case "tile10":return tile10;
            case "greenInnerNorthEast":
            case "tile11":return tile11;
            case "floorLight0":
            case "tile12":return tile12;
            case "stairWest":
            case "tile13":return tile13;
            case "stairNorth":
            case "tile14":return tile14;
            case "greenOuterNorthEast":
            case "tile15":return tile15;
            case "greenOuterEast0":
            case "tile16":return tile16;
            case "floorLight1":
            case "tile17":return tile17;
            case "floorLight3":
            case "tile18":return tile18;
            case "floorLight4":
            case "tile19":return tile19;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
