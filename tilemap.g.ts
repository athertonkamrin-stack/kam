// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000c0c0c0c0c01010101010101010101010c0c0c0c0c010101010101010103030301010101010101010101010101010303040101010101010101010404040404030404010104030303030301030304010304040101040401010404040404040403010303010101010101010101010104030b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b120606060606060f060606060f0606100505050505010101010801010101050f050a0a0505050101040404040404050f05080a0a05050501010307040104050f050505050f05050f030104040404050e0101010303040505050101040402050e010901030703030f0505010303030f0e01010103010303010d0d0d0d0d0d0d11`, img`
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 . 2 2 2 2 . . 
. 2 2 . . . 2 2 2 2 2 2 2 2 . . 
. 2 2 2 . . . 2 2 2 2 2 2 2 . . 
. . . . . . . . 2 2 2 2 2 2 . . 
2 2 2 2 2 2 . . . 2 2 2 2 2 . . 
2 2 2 2 2 2 2 . . . 2 2 2 2 . . 
2 2 2 2 2 2 2 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.dungeon.hazardWater,sprites.vehicle.roadHorizontal,sprites.swamp.swampTile9,sprites.castle.tilePath8,sprites.castle.tilePath6,myTiles.tile1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
