def on_switch_a2_minode_evt_close():
    minode.rgb_set_color(ConnName.A1, 255,0,0)
minode.on_switch_event(ConnName.A2,
    SwitchEvent.MINODE_SWITCH_EVT_CLOSE,
    on_switch_a2_minode_evt_close)

def on_switch_a2_minode_evt_open():
    minode.rgb_set_color(ConnName.A1, 0,255,0)
minode.on_switch_event(ConnName.A2,
    SwitchEvent.MINODE_SWITCH_EVT_OPEN,
    on_switch_a2_minode_evt_open)

minode.rgb_set_color(ConnName.A1, 0, 0, 0)

def on_forever():
    basic.show_number(minode.dht_get_temperature(ConnName.A0, DHTTemStyle.MINODE_DHT_CELSIUS))
basic.forever(on_forever)
