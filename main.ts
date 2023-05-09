function escreva () {
    basic.clearScreen()
    led.plot(ponto, 2)
    if (ponto == 0) {
        basic.showString("A")
        ponto = 2
    } else if (ponto == 4) {
        basic.showString("B")
        ponto = 2
    }
}
input.onButtonPressed(Button.A, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    ponto += -1
    basic.clearScreen()
    led.plot(ponto, 2)
    escreva()
})
input.onButtonPressed(Button.AB, function () {
    ponto = 2
    basic.clearScreen()
    led.plot(ponto, 2)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    ponto += 1
    basic.clearScreen()
    led.plot(ponto, 2)
    escreva()
})
let ponto = 0
ponto = 2
basic.clearScreen()
led.plot(ponto, 2)
