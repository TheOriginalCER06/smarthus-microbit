let soundTriggered = 0
let pirTriggered = 0
let lightActive = 0
function changeLed (R: number, G: number, B: number) {
    minode.RGBSetColor(
    ConnName.D12,
    R,
    G,
    B
    )
}
function clrScrnstpAnimtn () {
    basic.clearScreen()
    led.stopAnimation()
}
minode.onMICEvent(AnalogConnName.Analog_A0, function () {
    soundTriggered = 1
    basic.pause(100)
})
minode.onPIREvent(ConnName.D14, function () {
    pirTriggered = 1
})
basic.forever(function () {
    if (pirTriggered) {
        lightActive = 1
    }
    if (lightActive) {
        changeLed(255, 1, 255)
    } else {
        changeLed(1, 1, 1)
    }
    if (soundTriggered) {
        soundTriggered = 0
        if (lightActive) {
            lightActive = 0
        } else {
            lightActive = 0
        }
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
        basic.pause(100)
        clrScrnstpAnimtn()
    }
})
