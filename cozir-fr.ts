/**
 * makecode lts cozir sensor package
 * Parlons sciences - Espace vivant
 * Author: Simon Monk @ Monk Makes
 * Co-Author: Mylene Gamache-Tremblay @ Parlons sciences
 * Date: 05-2018
 */


/**
 * Parlons sciences! COZIR block
 */
 //% color=#5b99a5 weight=100 icon="\uf135" block="Parlons sciences!"
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
    * Fournit la concentration de CO2 en parties par million (ppm)
    */
    //% blockId=device_co2_toggle block="CO2 (PPM)"
    export function Co2(): number {
        serial.writeString("Z\r\n")
        basic.pause(200)
        return co2
    }

    /**
    * Fournit la température en degrés Celsius
    */
    //% blockId=device_temperature_toggle block="Température (°C)"
    export function temperature(): number {
        serial.writeString("T\r\n")
        basic.pause(200)
        return temp
    }

    /**
    * Fournit l'humidité relative en pourcentage (%)
    */
    //% blockId=device_relativeHumidity_toggle block="Humidité relative (HR)"
    export function relativeHumidity(): number {
        serial.writeString("H\r\n")
        basic.pause(200)
        return rh
    }

    /**
    * Exécutez cette fonction en plein-air et le module s'étalonnera lui-même
    * En considérant un niveau de CO2 de 400ppm
    */
    //% blockId=device_calibrateCo2_toggle block="Calibration CO2"
    //% advanced=true
    export function calibrateCo2(): void {
        serial.writeString("G\r\n")
    }

    /**
    * Compensation pour l'altitude, spécifiez votre altitude en mètres.
    * @param meters altitude en mètres
    */
    //% blockId=device_setAltitude_toggle block="Définir altitude"
    //% advanced=true
    export function setAltitude(metres: number): void {
        let param = 8192 + metres
        let message = "S " + param + "\r\n"
        //basic.showString(message)
        serial.writeString(message)
        basic.pause(300)
    }

    /**
    * Paramétrer le module COZIR - utilisé seulement en usine
    * ceci établit le mode "requête" du COZIR
    */
    //% blockId=device_setupCozir_toggle block="Initialisation COZIR"
    //% advanced=true
    export function setupCozir(): void {
        serial.writeString("K 2\r\n")
        basic.pause(300)
    }

} 
