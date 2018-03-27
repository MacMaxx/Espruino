// 1812 RHAV
// FAN_SPD -> ESP12.D23
// FAN_GND -> ESP12.GND

let FAN_SPD = D12;
let LED = D2;
let RPM = 0;

pinMode(FAN_SPD, "input_pullup", true);

function onFanSpd(event) {
  digitalWrite(LED, event.state);
}

setWatch(onFanSpd, FAN_SPD, {edge:"both", repeat:true});

function showRPM() {
  console.log(`RPM @ ${getTime()} = ${RPM}`);
}

setInterval(showRPM, 1000);
