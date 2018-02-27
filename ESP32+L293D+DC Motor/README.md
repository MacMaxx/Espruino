### 1809.2 RHAV

# Reference:
* [L293D datasheet](http://www.alldatasheet.com/view.jsp?Searchword=L293DNE)
* [NodeMCU ESP32 pinout](http://esp32.net/)
* [Espruino 1.96](http://www.espruino.com/ESP32)

# Setup:
![Setup](https://github.com/MacMaxx/Espruino/blob/master/ESP32%2BL293D%2BDC%20Motor/Setup.jpg)
* ESP32.D0 -> L293D.1A
* ESP32.D4 -> L293D.2A
* L293D.1Y -> Motor.+
* L293D.2Y -> Motor.-

# Code
```javascript
var ctrlPins = [ D0, D4 ];
var d = { "direct": 0b01, "reverse": 0b10, "stop": 0b00 };

digitalWrite(ctrlPins, d.direct)
digitalWrite(ctrlPins, d.reverse)
digitalWrite(ctrlPins, d.stop)
```
