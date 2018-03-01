### 1809 RHAV

Pushing button causes LED to turn on, pushing once more turn LED off. Keeps track of number of buttonclicks.

# Setup
![setup](https://github.com/MacMaxx/Espruino/blob/master/ESP12%20Button%20and%20LED/ESP12%20button%20and%20LED%20setup.png)

# Code
```javascript
// 1809 RHAV
// ESP12.D4 -> LED.anode
// LED.kathode -> ESP12.GND
// ESP12.D5 -> button.pin1
// button.pin2 -> ESP12.GND

let LED = D4;
let LEDstate = false; //Start with LED is off
let BTN = D5;
let buttonCount = 0;

pinMode(BTN, "input_pullup");

function onButton(event) {
  LEDstate =! LEDstate;
  buttonCount++;
  console.log(buttonCount + ": " + LEDstate); 
  // BTN pinMode = "input_pullup". Not activating BTN = 1, activate BTN = 0
  LED.write(LEDstate); 
}

setWatch(onButton, BTN, {edge:"falling", repeat:true, debounce:25});
```
