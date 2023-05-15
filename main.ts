function escreva () {
    basic.clearScreen()
    led.plot(led2, 2)
    if (led2 == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("A")
        led2 = 2
        A += 1
        basic.showNumber(A)
        basic.clearScreen()
        led.plot(led2, 2)
    } else if (led2 == 4) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.showString("B")
        led2 = 2
        B += 1
        basic.showNumber(B)
        basic.clearScreen()
        led.plot(led2, 2)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    A = 0
    B = 0
    led2 = 2
    basic.showNumber(0)
    basic.clearScreen()
    led.plot(led2, 2)
})
input.onButtonPressed(Button.A, function () {
    led2 += -1
    basic.clearScreen()
    led.plot(led2, 2)
    escreva()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A")
    basic.showNumber(A)
    basic.showString("B")
    basic.showNumber(B)
    basic.clearScreen()
    led.plot(led2, 2)
})
input.onButtonPressed(Button.B, function () {
    led2 += 1
    basic.clearScreen()
    led.plot(led2, 2)
    escreva()
})
let B = 0
let A = 0
let led2 = 0
led2 = 2
basic.clearScreen()
led.plot(led2, 2)
A = 0
B = 0
