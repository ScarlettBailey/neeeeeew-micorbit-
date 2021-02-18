input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
    soundExpression.hello.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.yawn.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
})
