let A_száma = 0
let osszeg = 0
let B_száma = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    A_száma += 1
    osszeg += 2
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    B_száma = 0
    A_száma = 0
    osszeg = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    B_száma += 1
    osszeg += -1
})
basic.forever(function () {
    if (A_száma + B_száma == 10) {
        basic.clearScreen()
        basic.showString("" + (osszeg))
    }
})
