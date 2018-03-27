# 1813 RHAV

[4 wire fans](http://www.pavouk.org/hw/fan/en_fan4wire.html)

Run fan at full speed (no use of PWM wire on fan). Flash LED with fanspeed.

```
// FAN_SENSE -> ESP32.D12
// FAN_GND -> ESP32.GND

let FAN_SENSE = D12;
let LED = D2; /* NodeMCU ESP32 onboard LED */

pinMode(FAN_SENSE, "input_pullup", true);

function onSense(event) {
  digitalWrite(LED, event.state);
}

setWatch(onSense, FAN_SENSE, {edge:"both", repeat:true});
```
