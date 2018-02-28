### 1809 RHAV

# Blink ESP32 onboard LED

```javascript
var  on = false;
setInterval(function() {
  on = !on;
  //D2 is onboard LED on ESP32
  D2.write(on);
}, 500);
```
