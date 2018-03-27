// 1812 RHAV
// FAN_SENSE (yellow) -> ESP12.D12
// FAN_GND -> ESP12.GND
// ESP32.D13 -> FAN_CTL (blue) 

let FAN_SENSE = D12;
let FAN_CTRL = D13;
let LED = D2; // Onboard LED
let Revs = 0;
let lastRev = 0;

pinMode(FAN_SENSE, "input_pullup", true);

function onChange(event) {
  digitalPulse(LED, true, 2 /*ms*/);
  Revs++;
}

setWatch(onChange, FAN_SENSE, {edge:"rising", repeat:true});

function onSecond() {
  console.log(`Revs @ ${getTime()} = ${Revs * 60}.`);
  Revs = 0;
}

setInterval(onSecond, 1000);
analogWrite(FAN_CTRL, 0.4);
