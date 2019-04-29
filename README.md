# pxt-cozir
# COZIR sensor by Let's Talk Science
This library provides category blocks to collect data from the custom MonkMakes GSS COZIR printed circuit board sensor. This board, designed for use with the Lets Talk Science Living Space Project, provides a CO2, temperature and Relative Humidity measurements to a BBC micro:bit.

This project was made possible through the generosity of our supporters, the government of Canada CanCode initiative and the Canadian Space Agency.

## Getting Started
You will then need to connect your CozIR sensor to the microbit as shown below

![image-1](https://github.com/letstalkscience/pxt-cozir/images/CO2_for_m_b_connected-copia-653x1024.jpg "microbit CozIR connections")

![image-2](https://www.monkmakes.com/wp-content/uploads/2018/09/CO2_for_m_b_connected-copia-653x1024.jpg "microbit CozIR connections 2")

Then flash the following program onto your micro:bit by [clicking this link](https://makecode.microbit.org/_2v5HM0fmjEJE) to open the blocks editor and then click on Download (bottom of the web page) and copy the hex file onto your micro:bit.

Once the program is uploaded, pressing Button A will display the CO2 level in parts per million of CO2. Pressing button B will display the temperature in degrees C and both buttons together will show the relative humidity.

Inside the *on start* block, the big *serial redirect to* block starts serial transfer of data between the micro:bit and the CO2 sensor.

## CO2 Concentrations
What do these readings mean?

Fresh outdoor air should give a reading of around 400. In a smallish room with a few people in it, this will rapidly rise above 1000, as people breathe out CO2. If it gets above 2000 then your air is getting dangerously unhealthy.

## Calibration
Your sensor is a sensitive scientific instrument and the readings it gives will gradually get less accurate. If you leave the sensor powered-up in a well ventilated room for 24 hours, then it will calibrate itself automatically.

You can also force calibration using the Calibrate CO2 block in the Let's Talk Science!/Parlons sciences! blocks category. This will set the sensor’s readings back to 400. So you should run this block only after the sensor has been in fresh air for 30 mins or so.

### Sample Calibration Program
You can flash the sample calibration program onto your micro:bit by [clicking this link](https://makecode.microbit.org/_isqDH4RjmgJg) to open the blocks editor and then click on Download (bottom of the web page) and copy the hex file onto your micro:bit.

## Altitude Compensation
If you live somewhere high up, then you need to tell the sensor about this by putting an *altitude* block into your *on start* block and then changing its number to your altitude above sea-level in meters.

```blocks
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
COZIR.Altitude(0)
basic.pause(500)
```

## Battery Power
Once you have the code all working, you can disconnect the USB power and instead power the CO2 Sensor Board through the DC barrel jack using either a battery pack or a DC adapter. In both cases the power supply should be of between 5 and 9V.

When powered by batteries in this way, the CO2 sensor will provide power back to the micro:bit. But make sure you have the power leads connected right between the CO2 sensor board and the micro:bit or your micro:bit could be damaged.

## Supported targets
* for PXT/microbit

## License
MIT License
Copyright 2018 Let's Talk Science
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

