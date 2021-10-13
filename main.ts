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
function stringValueReceived (stringReceived: string) {
	
}
radio.onReceivedString(function (receivedString) {
    stringValueReceived(receivedString)
})
radio.setGroup(23)
