let x = 0
radio.setGroup(1)
let smitta = 0
radio.setTransmitPower(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    x = radio.receiveNumber()
    if (radio.receivedSignalStrength() > -68 && radio.receivedSignalStrength() < -5) {
        basic.showIcon(IconNames.No)
        while (radio.receivedSignalStrength() > -68 && radio.receivedSignalStrength() < -5) {
            radio.sendNumber(0)
            basic.pause(200)
        }
    }
})
