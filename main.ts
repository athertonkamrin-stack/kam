controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    kam.setVelocity(0, -150)
})
let kam: Sprite = null
kam = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . 3 3 3 1 1 1 1 1 1 3 . . . . . 
    3 3 3 3 1 1 1 1 1 1 3 . . . . . 
    3 3 3 . 1 1 1 1 1 1 3 . . . . . 
    3 3 . . 8 8 . . 8 8 . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(kam, 50, 50)
kam.fy = 250
kam.fx = 250
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(kam)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . 7 2 7 2 7 . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 2 2 2 7 . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . 7 e e e e e 7 . . . . 
    . . . . . 7 e e e e e 7 . . . . 
    . . . . . 7 . e e e . 7 . . . . 
    . . . . . . . e . e . . . . . . 
    . . . . . . . e . e . . . . . . 
    . . . . . . . e . e . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(kam)
kam.sayText("yooo")
