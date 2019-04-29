# pxt-cozir
# COZIR sensor by Let's Talk Science
This library provides category blocks to collect data from the custom MonkMakes GSS COZIR printed circuit board sensor.

This project was made possible through the generosity of our supporters, the government of Canada CanCode initiative and the Canadian Space Agency.

## Calibrate COZIR with Altitude in SetUp
[Download MakeCode File for SetUp Cozir / Calibrate / Altitude](https://makecode.microbit.org/_MKUAYVPpJ9fo)

You will need to download the program from the link above and flash it to your microbit.

You will then need to connect your CozIR sensor to the microbit as shown below:

[logo]: https://www.monkmakes.com/wp-content/uploads/2018/09/CO2_for_m_b_connected-copia-653x1024.jpg "microbit CozIR connections"


### Program Breakdown

On Start
Begins the 

Enter the altitude of your location.
*If you are at or below sea level you can remove this block from your program.*

```blocks
input.onButtonPressed(Button.AB, function () {
    COZIR.Altitude(0)
    COZIR.setupCozir()
    basic.showString("x")
    basic.pause(500)
})
```

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

