input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("Weapons xReady")
})
radio.onReceivedNumber(function (receivedNumber) {
    numberCodeReceived(receivedNumber)
})
function numberCodeReceived (codeNumber: number) {
    if (codeNumber == 892) {
        serialWriter(codeNumber, "")
    } else if (codeNumber == 555) {
        serialWriter(codeNumber, "")
    } else if (codeNumber == 7) {
        serialWriter(codeNumber, "")
    } else {
        serialWriter(7, "")
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(892)
})
function stringValueReceived (stringReceived: string) {
    if (stringReceived == "Weapons Ready") {
        serialWriter(0, stringReceived)
    } else if (stringReceived == "Launched!") {
        serialWriter(0, stringReceived)
    } else if (stringReceived == "HeartFrogs") {
        serialWriter(0, stringReceived)
    } else {
        serialWriter(0, "HeartFrogs")
    }
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
    radio.sendString("HeartFrogs")
})
radio.onReceivedString(function (receivedString) {
    stringValueReceived(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(555)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendString("Launched!")
})
function serialWriter (num: number, text: string) {
    if (text == "") {
        serial.writeLine("" + (num))
    } else {
        serial.writeLine(text)
    }
}
radio.setGroup(23)
