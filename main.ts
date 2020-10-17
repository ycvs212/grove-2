grove.onGesture(GroveGesture.Wave, function () {
    basic.showString("HEllo")
})
grove.onGesture(GroveGesture.Right, function () {
    basic.showString("Right")
})
grove.onGesture(GroveGesture.Clockwise, function () {
    basic.showIcon(IconNames.Heart)
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showString("Left")
})
grove.onGesture(GroveGesture.Anticlockwise, function () {
    basic.showIcon(IconNames.No)
})
