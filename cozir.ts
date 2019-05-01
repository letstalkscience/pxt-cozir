/**
 * makecode lts cozir sensor package
 * Let's Talk Science - Living Space Action Project
 * Author: Simon Monk @ https://www.monkmakes.com
 * Co-Author: Jennifer Ferguson @ http://letstalkscience.ca
 * Translation: Mylene Gamache-Tremblay @ http://parlonssciences.ca
 * Date: 05-2018
 */


/**
 * Let's Talk Science! COZIR block
 */
//% color=190 weight=100 icon="\uf135" block="Let's Talk Science!"
namespace COZIR {

    let value_str = ""
    let co2 = 0
    let temp = 0
    let rh = 0
    let response = ""
    let altitude = 0

    serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
        response = serial.readUntil(serial.delimiters(Delimiters.NewLine))
        //basic.showString(response)
        value_str = response.substr(3, 5)
        let value = parseInt(value_str)
        // basic.showString(response.charAt(1))
        if (response.charAt(1) == 'Z') {
            let co2_uncompensated = value
            co2 = co2_uncompensated + (altitude * 556) / 10000
        }
        if (response.charAt(1) == 'T') {
            temp = (value - 1000) / 10
        }
        if (response.charAt(1) == 'H') {
            rh = value / 10
        }
    })

    /**
    * Return the CO2 concentration in parts per million (PPM).
    */
    //% blockId=device_co2_toggle block="CO2 (PPM)"
    export function Co2(): number {
        serial.writeString("Z\r\n")
        basic.pause(200)
        return co2
    }

    /**
    * Return the temperature in degrees Celsius.
    */
    //% blockId=device_temperature_toggle block="temperature (°C)"
    export function temperature(): number {
        serial.writeString("T\r\n")
        basic.pause(200)
        return temp
    }

    /**
    * Return the relative humidty as a percentage.
    */
    //% blockId=device_relativeHumidity_toggle block="relative humidity (RH)"
    export function relativeHumidity(): number {
        serial.writeString("H\r\n")
        basic.pause(200)
        return rh
    }

    /**
    * Run this block when in fresh air and the module will re-calibrate it
    * assuming that the CO2 level is 400PPM.
    */
    //% blockId=device_calibrateCo2_toggle block="calibrate CO2"
    //% advanced=true
    export function calibrateCo2(): void {
        serial.writeString("G\r\n")
    }

    /**
    * Compensate for altitude. Specify altitude in metres
    * @param metres altitude in metres.
    */
    //% block
    //% advanced=true
    export function Altitude(metres: number): void {
        let param = 8192 + metres
        let message = "S " + param + "\r\n"
        //basic.showString(message)
        serial.writeString(message)
        basic.pause(300)
    }

    /**
    * Setup the COZIR module -only used during manufacturing
    * this sets the mode of the COZIR to 'request'.
    */
    //% blockId=device_setupCozir_toggle block="set up COZIR"
    //% advanced=true
    export function setupCozir(): void {
        serial.writeString("K 2\r\n")
        basic.pause(300)
    }

} 
