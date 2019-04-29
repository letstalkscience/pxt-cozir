input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(COZIR.temperature()))
    basic.showString(" C")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(COZIR.temperature()))
    basic.showString(" C")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.round(COZIR.relativeHumidity()))
    basic.showString(" %RH")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(500)
