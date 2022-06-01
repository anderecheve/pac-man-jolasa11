let pac_man = game.createSprite(2, 2)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
pac_man.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
})
basic.forever(function () {
    basic.pause(400)
    if (input.acceleration(Dimension.X) > 200) {
        pac_man.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pac_man.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pac_man.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < 200) {
        pac_man.change(LedSpriteProperty.Y, -1)
    }
})
basic.forever(function () {
    if (pac_man.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria = game.createSprite(randint(1, 10), 2)
        janaria.set(LedSpriteProperty.Brightness, 10)
    }
    if (mamua.isTouching(pac_man)) {
        game.gameOver()
    }
})
