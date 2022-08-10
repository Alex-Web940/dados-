let Numero = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.isGesture(Gesture.Shake)) {
        Numero = randint(1, 6)
        basic.showNumber(Numero)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && input.isGesture(Gesture.Shake)) {
        Numero = randint(1, 6)
        if (Numero == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (Numero == 2) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
        } else if (Numero == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        } else if (Numero == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        } else if (Numero == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
    }
})
