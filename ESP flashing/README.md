### 1808 RHAV
# References
* [Espruino firmware](http://www.espruino.com/Download)
* [Espruino ESP32](http://www.espruino.com/ESP32)
* [Espruino ESP-12](https://www.espruino.com/EspruinoESP8266)
* [SiLABS USB driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
* [esp flashing tool](https://github.com/espressif/esptool)
* [Espruino Web IDE](https://www.espruino.com/Web+IDE)

# How-to
1. Install esptool.py for flashing Espressif NodeMCU's
* requires python
2. Install USB driver for NodeMCU ESP32 USB CP2102 chip
* not having driver installed crashes iMac
* https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers
3. Download Espruino firmware
* unzip
* firmware is in board specific folder
4. Open terminal app
* navigate to board specific folder
* flash board (ESP32)
```
> esptool.py --chip esp32 --port </dev/ttyUSB0> --baud 921600 --after hard_reset write_flash -z \
             --flash_mode dio --flash_freq 40m --flash_size detect 0x1000 bootloader.bin 0x8000 \
             partitions_espruino.bin 0x10000 espruino_esp32.bin
```
* flash board (ESP-12)
```
esptool.py --port </dev/ttyUSB0> --baud 115200 write_flash --flash_freq 80m --flash_mode qio \
           --flash_size 32m 0x0000 "boot_v1.6.bin" 0x1000 espruino_esp8266_user1.bin 0x3FC000 \
           esp_init_data_default.bin 0x3FE000 blank.bin
```

Should look something like:
```
> esptool.py v2.0-beta1
Connecting........................
Uploading stub...
Running stub...
Stub running...
Changing baud rate to 921600
Changed.
Attaching SPI flash...
Configuring flash size...
Auto-detected Flash size: 4MB
Compressed 894288 bytes to 517230...
Wrote 894288 bytes (517230 compressed) at 0x00010000 in 8.4 seconds (effective 848.5 kbit/s)...
Hash of data verified.

Leaving...
Hard resetting...
```
5. Connect via Espruino Web IDE
```
> reset()
=undefined
 ____                 _
|  __|___ ___ ___ _ _|_|___ ___
|  __|_ -| . |  _| | | |   | . |
|____|___|  _|_| |___|_|_|_|___|
         |_| espruino.com
 1v96 (c) 2017 G.Williams
Espruino is Open Source. Our work is supported
only by sales of official boards and donations:
http://espruino.com/Donate
```
