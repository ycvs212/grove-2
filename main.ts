grove.onGesture(GroveGesture.Down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Wave, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
grove.onGesture(GroveGesture.Right, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Backward, function () {
    basic.showString("get out")
})
grove.onGesture(GroveGesture.Clockwise, function () {
    basic.showIcon(IconNames.Heart)
})
grove.onGesture(GroveGesture.Up, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Forward, function () {
    basic.showString("come on")
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Anticlockwise, function () {
    basic.showIcon(IconNames.No)
})
grove.initGesture()
