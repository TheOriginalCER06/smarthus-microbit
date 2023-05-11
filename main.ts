minode.onSwitchEvent(ConnName.A0, SwitchEvent.MINODE_SWITCH_EVT_CLOSE, function () {
    minode.rgbChooseColor(ConnName.A0, MiNodeColor.MiNode_RGB_COLOR_BLUE)
})
minode.onSwitchEvent(ConnName.A0, SwitchEvent.MINODE_SWITCH_EVT_OPEN, function () {
    minode.rgbChooseColor(ConnName.D13, MiNodeColor.MiNode_RGB_COLOR_RED)
})
basic.showNumber(minode.DHTGetTemperature(ConnName.A0, DHTTemStyle.MINODE_DHT_CELSIUS))
