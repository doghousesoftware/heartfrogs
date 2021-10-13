radio.onReceivedNumber(function (receivedNumber) {
    numberCodeReceived(receivedNumber)
})
function numberCodeReceived (codeNumber: number) {
    if (codeNumber == 7) {
        serial.writeLine("HearFrogs")
    } else {
        serial.writeLine("HearFrogs")
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function stringValueReceived (stringReceived: string) {
	
}
radio.onReceivedString(function (receivedString) {
    stringValueReceived(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
radio.setGroup(23)
