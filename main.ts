// When countdown ends
info.onCountdownEnd(function () {
    if (currentPlayer == 1) {
        p1Score = info.score()
        game.splash("Player 1 scored " + p1Score)
        currentPlayer = 2
        startTurn()
    } else {
        p2Score = info.score()
        game.splash("Player 2 scored " + p2Score)
        // Decide winner
        if (p1Score > p2Score) {
            game.over(true, effects.confetti)
        } else if (p2Score > p1Score) {
            game.over(true, effects.confetti)
        } else {
            game.over(false)
        }
    }
})
function startTurn () {
    info.setScore(0)
    player1.setPosition(30, 60)
    player2.setPosition(130, 60)
    if (currentPlayer == 1) {
        controller.moveSprite(player1, 100, 100)
        controller.player2.moveSprite(player2, 0, 0)
        game.splash("Player 1 Turn!")
    } else {
        controller.moveSprite(player1, 0, 0)
        controller.player2.moveSprite(player2, 100, 100)
        game.splash("Player 2 Turn!")
    }
    info.startCountdown(10)
}
// Tag logic
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (currentPlayer == 1 && sprite == player1) {
        info.changeScoreBy(1)
        player2.setPosition(randint(10, 150), randint(10, 110))
    } else if (currentPlayer == 2 && sprite == player2) {
        info.changeScoreBy(1)
        player1.setPosition(randint(10, 150), randint(10, 110))
    }
})
let p2Score = 0
let p1Score = 0
let currentPlayer = 0
let player2: Sprite = null
let player1: Sprite = null
scene.setBackgroundColor(7)
// Create players
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
player2 = sprites.create(assets.image`dot`, SpriteKind.Player)
player1.setPosition(30, 60)
player2.setPosition(130, 60)
// Variables
currentPlayer = 1
// Start Player 1 Turn
startTurn()
