controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.up.isPressed() && (!(controller.left.isPressed()) && !(controller.right.isPressed()))) {
        mySprite.setImage(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f d 5 5 5 5 5 5 d f . . 
            . f d 5 5 5 5 5 5 5 5 d f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b b 5 5 5 5 5 5 5 5 b b f 
            f b b b d 5 5 5 5 d b b b f 
            f b b b b b b b b b b b b f 
            f f b b b b b b b b b b f . 
            . c c b b b b b b b b c c . 
            . 4 d c f f f f f f c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 b f f . . 
            . . . . f f b b f f . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 b f . . 
            . f 5 5 5 5 5 5 5 5 5 b f . 
            f d 5 5 5 5 5 5 5 5 5 b f . 
            f d 5 5 5 5 5 5 5 5 d b b f 
            f b 5 5 5 5 5 5 5 5 b b b f 
            f b b 5 5 5 5 5 d b b b b f 
            f b b b b b b b b b b b b f 
            f b b b b b b b b b b b f c 
            f c b b b b b b b b b c c . 
            4 d 4 f f f f f f f c 4 c . 
            . 4 c b b 3 b 3 b 4 d d 4 . 
            . . c c 3 3 b 3 b b 4 e . . 
            . . . . c b b c c c . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f b 5 5 5 5 5 5 5 f . . 
            . f b 5 5 5 5 5 5 5 5 5 f . 
            . f b 5 5 5 5 5 5 5 5 5 d f 
            f b b d 5 5 5 5 5 5 5 5 d f 
            f b b b 5 5 5 5 5 5 5 5 b f 
            f b b b b d 5 5 5 5 5 b b f 
            f b b b b b b b b b b b b f 
            c f b b b b b b b b b b b f 
            . c c b b b b b b b b b c f 
            . c 4 c f f f f f f f 4 d 4 
            . 4 d d 4 b 3 b 3 b b c 4 . 
            . . e 4 b b 3 b 3 3 c c . . 
            . . . . c c c b b c . . . . 
            `)
        pause(100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.left.isPressed()) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . f f f c c c . . . . . 
            . f f 5 5 5 5 5 5 f f . . . 
            . f 5 5 5 5 5 5 5 5 5 f . . 
            f 5 5 5 5 5 5 5 5 5 5 5 c . 
            f 5 5 b d 5 5 5 5 5 5 5 5 c 
            f 5 d 4 4 b 5 5 5 5 5 5 5 f 
            f 5 b 4 4 4 c c 5 5 5 5 5 f 
            . f f 4 4 c b c b 5 5 5 b f 
            . . f d d c 1 e b b b b b c 
            . . c d d d d e e b b b b c 
            . . c 4 4 4 e d d 4 b b c . 
            . . c 9 9 9 e d d e c c . . 
            . c b b b b b e e b b c . . 
            . c 3 b 3 b 3 3 3 b c . . . 
            . . c c c b b c c c . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . f f f c c c . . . . . 
            . f f 5 5 5 5 5 5 f f . . . 
            . f 5 5 5 5 5 5 5 5 5 f . . 
            f 5 5 5 5 5 5 5 5 5 5 5 c . 
            f 5 5 b d 5 5 5 5 5 5 5 c . 
            f 5 d 4 4 b 5 5 5 5 5 5 5 f 
            f 5 b 4 4 4 c c 5 5 5 5 5 f 
            f f f 4 4 c b c b 5 5 5 b f 
            . f f d d c 1 e b b b b b c 
            . . f d d d d 4 f b b b b c 
            . . f 4 4 4 e e e 4 b b c . 
            . . f 9 9 9 e d d 4 f f . . 
            . . f 9 9 9 e d d e f . . . 
            . f 3 3 b 3 b e e b f . . . 
            . f f 3 b 3 b 3 b f f . . . 
            . . . f f b b f f . . . . . 
            `)
        pause(100)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.right.isPressed()) {
        mySprite.setImage(img`
            . . . . . c c c f f f . . . 
            . . . f f 5 5 5 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 f . 
            . c 5 5 5 5 5 5 5 5 5 5 5 f 
            . c 5 5 5 5 5 5 5 d b 5 5 f 
            f 5 5 5 5 5 5 5 b 4 4 d 5 f 
            f 5 5 5 5 5 c c 4 4 4 b 5 f 
            f b 5 5 5 b c b c 4 4 f f f 
            c b b b b b e 1 c d d f f . 
            c b b b b f 4 d d d d f . . 
            . c b b 4 e e e 4 4 4 f . . 
            . . f f 4 d d e 9 9 9 f . . 
            . . . f e d d e 9 9 9 f . . 
            . . . f b e e b 3 b 3 3 f . 
            . . . f f b 3 b 3 b 3 f f . 
            . . . . . f f b b f f . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . c c c f f f . . . 
            . . . f f 5 5 5 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 f . 
            . c 5 5 5 5 5 5 5 5 5 5 5 f 
            c 5 5 5 5 5 5 5 5 d b 5 5 f 
            f 5 5 5 5 5 5 5 b 4 4 d 5 f 
            f 5 5 5 5 5 c c 4 4 4 b 5 f 
            f b 5 5 5 b c b c 4 4 f f . 
            c b b b b b e 1 c d d f . . 
            c b b b b e e d d d d c . . 
            . c b b 4 d d e 4 4 4 c . . 
            . . c c e d d e 9 9 9 c . . 
            . . c b b e e b b b b b c . 
            . . . c b 3 3 3 b 3 b 3 c . 
            . . . . c c c b b c c c . . 
            `)
        pause(100)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.down.isPressed() && (!(controller.left.isPressed()) && !(controller.right.isPressed()))) {
        mySprite.setImage(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            c b 5 5 5 d b b d 5 5 5 b c 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b e 1 f d d f 1 e b b f 
            c f b f d d d d d 4 4 b f c 
            . c e c 6 9 9 9 4 d d d c . 
            . e 4 c 9 9 9 9 4 d d 4 c . 
            . e c b b 3 b b b e e c . . 
            . . c c 3 3 b 3 b 3 c c . . 
            . . . . c b b c c c . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            c b 5 5 5 d b b d 5 5 5 b c 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b e 1 f d d f 1 e b b f 
            c f b 4 4 d d d d d f b f c 
            . c d d d 4 9 9 9 6 c e c . 
            . c 4 d d 4 9 9 9 9 c 4 e . 
            . . c e e b b b 3 b b c e . 
            . . c c 3 b 3 b 3 3 c c . . 
            . . . . c c c b b c . . . . 
            `)
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(100)
    pizza.setPosition(randint(10, 150), randint(10, 110))
})
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
