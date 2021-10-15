input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("Weapons Ready")
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
    if (stringReceived == wr) {
        serialWriter(0, stringReceived)
    } else if (stringReceived == ld) {
        serialWriter(0, stringReceived)
    } else if (stringReceived == panic) {
        serialWriter(0, stringReceived)
    } else {
        serialWriter(0, panic)
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
let panic = ""
let ld = ""
let wr = ""
radio.setGroup(23)
wr = "Weapons Ready"
ld = "Launched!"
panic = "HeartFrogs"
