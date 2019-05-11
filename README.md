###top
# pxt-cozir
 * Author: Simon Monk @ https://www.monkmakes.com
 * Co-Author: Jennifer Ferguson @ http://letstalkscience.ca
 * Translation: Mylene Gamache-Tremblay @ http://parlonssciences.ca
 * Date: 05-2018
 * Product info: https://www.monkmakes.com/mb_co2/

#### [voir en français](#french)
 
# COZIR sensor by Let's Talk Science | Parlons sciences
This library provides category blocks to collect data from the custom [MonkMakes GSS COZIR printed circuit board sensor](https://www.monkmakes.com/mb_co2/). This board, designed for use with the Lets Talk Science Living Space Project, provides a CO2, temperature and Relative Humidity measurements to a BBC micro:bit.

This project was made possible through the generosity of our supporters, the government of Canada CanCode initiative and the Canadian Space Agency.  

For more information about this project, visit our website:
 * English: [Let's Talk Science Living Space](http://explorecuriocity.org/LivingSpace.aspx)
 * French: [Parlons sciences Espace vivant](http://explorecuriocite.org/Espacevivant)
 
 
## Getting Started
You will need to connect your COZIR sensor to the microbit as shown below.

![image-1](https://raw.githubusercontent.com/letstalkscience/pxt-cozir/master/images/CO2_for_m_b_connected.png "micro:bit COZIR connections")


Then flash the following program onto your micro:bit.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(COZIR.Co2()))
    basic.showString(" PPM")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(COZIR.temperature()))
    basic.showString(" C")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.round(COZIR.relativeHumidity()))
    basic.showString(" %RH")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(500)
```
Once the program is uploaded, pressing **button A** will display the CO2 level in parts per million of CO2. Pressing **button B** will display the temperature in degrees C and **both A+B buttons** together will show the relative humidity.

If you are wondering about the big **serial redirect to** block in the **on start** block, well this block starts serial transfer of data between the micro:bit and the CO2 sensor.

## CO2 Concentrations
What do these readings mean?

Fresh outdoor air should give a reading of around 400 PPM. In a smallish room with a few people in it, this will rapidly rise above 1000 PPM, as people breathe out CO2. If it gets above 3000 PPM then your air is getting dangerously unhealthy.

## Calibration
Your sensor is a sensitive scientific instrument and the readings it gives will gradually get less accurate. If you leave the sensor powered-up in a well ventilated room for 24 hours, then it will calibrate itself automatically.

You can also force calibration using the Calibrate CO2 block in the Let's Talk Science!/Parlons sciences! blocks category. This will set the sensor’s readings back to 400 PPM. So you should run this block only after the sensor has been in fresh air for 30 mins or so.

### Sample Calibration Program
Wire-up the board to your micro:bit as shown previously. Then flash the following program onto your micro:bit.

```blocks
let modes: string[] = []
let mode = 0
input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode == 3) {
        mode = 0
    }
    basic.showString(modes[mode])
})
input.onButtonPressed(Button.AB, function () {
    COZIR.calibrateCo2()
    basic.showString("+")
    basic.pause(500)
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
mode = 0
modes = [" PPM", " C", " %RH"]
basic.pause(500)
basic.forever(function () {
    basic.showString(modes[mode])
    if (mode == 0) {
        basic.showNumber(Math.round(COZIR.Co2()))
    }
    if (mode == 1) {
        basic.showNumber(Math.round(COZIR.temperature()))
    }
    if (mode == 2) {
        basic.showNumber(Math.round(COZIR.relativeHumidity()))
    }
})
```

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

###### [back to top](#top)




### <a id="french">...</a> ###
# Dispositif de capteurs COZIR par Parlons sciences | Let's talk Science
Cette bibliothèque fournit des blocs de catégorie pour collecter les données du  dispositif de capteurs personnalisé [MonkMakes GSS COZIR printed circuit board sensor](https://www.monkmakes.com/mb_co2/). Cette carte conçue pour l'utilisation lors du projet d'action Espace vivant de Parlons sciences transmet les mesures de dioxyde de carbone, température et humidité relative à un micro:bit BBC.

Ce projet a été rendu grâce à la générosité de bienfaiteurs tels l'agence spatiale Canadienne et l'initiative CodeCan du gouvernement du Canada.  

Pour plus d'information sur ce projet, visitez notre site web :
 * Anglais: [Let's Talk Science Living Space](http://explorecuriocity.org/LivingSpace.aspx)
 * Français: [Parlons sciences Espace vivant](http://explorecuriocite.org/Espacevivant)

## Où débuter
Vous devrez connecter votre dispositif COZIR au microbit comme illustré ci-dessous.

![image-1](https://raw.githubusercontent.com/letstalkscience/pxt-cozir/master/images/CO2_for_m_b_connected.png "Connexions micro:bit COZIR")

Ensuite, transférez le programme suivant sur votre micro:bit.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(COZIR.Co2()))
    basic.showString(" PPM")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(COZIR.temperature()))
    basic.showString(" C")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.round(COZIR.relativeHumidity()))
    basic.showString(" %RH")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(500)
```

Une fois que le programme est téléchargé, appuyer sur le ** bouton A ** affichera le niveau de CO2 en parties par million de CO2. Appuyer sur le ** bouton B ** affichera la température en degrés Celsius et appuryer simultanément sur ** les deux boutons A + B ** affichera l’humidité relative.

Si vous vous questionnez sur le grand bloc ** serial redirect to** dans le bloc ** on start **, Eh bien ce bloc active le transfert de données en série entre le micro :bit et le dispositif de capteurs.

## Concentrations de CO2
Que signifient ces lectures ?

L’air frais extérieur devrait donner une lecture autour de 400 PPM. Dans une pièce assez petite avec quelques personnes à l’intérieur, cette donnée peut augmenter rapidement au-dessus de 1000 PPM, puisque les gens expirent du CO2. Si elle excède 3000 PPM, alors votre air devient malsain. 

## Étalonnage 
Votre dispositif de capteurs est un instrument scientifique sensible et les lectures qu'il donne deviendront progressivement moins précises. Si vous laissez le dispositif de capteurs activé dans une pièce bien aérée pendant 24 heures, il s’étalonne lui-même automatiquement. 

Vous pouvez également forcer l’étalonnage à l’aide du bloc Calibration CO2 dans la catégorie de blocs Let’s Talk Science ! / Parlons sciences ! Celui-ci redéfinira les lectures du dispositif de capteurs à 400 PPM. Vous devriez donc exécuter ce bloc que lorsque le dispositif de capteurs a été à l’air frais pendant 30 minutes ou plus.

###  Exemple de programme d'étalonnage 
Connectez le dispositif de capteurs à votre micro:bit, comme illustré précédemment. Transférez ensuite le programme suivant sur votre micro:bit.

```blocks
let modes: string[] = []
let mode = 0
input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode == 3) {
        mode = 0
    }
    basic.showString(modes[mode])
})
input.onButtonPressed(Button.AB, function () {
    COZIR.calibrateCo2()
    basic.showString("+")
    basic.pause(500)
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
mode = 0
modes = [" PPM", " C", " %RH"]
basic.pause(500)
basic.forever(function () {
    basic.showString(modes[mode])
    if (mode == 0) {
        basic.showNumber(Math.round(COZIR.Co2()))
    }
    if (mode == 1) {
        basic.showNumber(Math.round(COZIR.temperature()))
    }
    if (mode == 2) {
        basic.showNumber(Math.round(COZIR.relativeHumidity()))
    }
})
```

## Compensation d'altitude
Si vous habitez un endroit assez élevé en altitude, vous devrez alors l’indiquer au dispositif de capteurs en mettant un bloc * altitude * dans votre bloc *on start* et ensuite changer le nombre y apparaissant pour votre altitude au-dessus du niveau de la mer en mètres. 

```blocks
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
COZIR.Altitude(0)
basic.pause(500)
```

## Alimentation des piles
Une fois que votre code fonctionne, vous pouvez déconnecter l’alimentation USB et alimenter plutôt la combinaison micro:bit et dispositif de capteurs grâce au câble le connectant à une pile 9V ou un adaptateur CC. Peu importe la méthode, la tension d’alimentation doit être entre 5V et 9V. 

Lorsqu’il est alimenté de cette façon, le dispositif de capteurs fournit l’alimentation au micro:bit. Mais assurez-vous de brancher les câbles de connexion aux bons endroits ou vous pourriez endommagé le micro:bit.

## Supported targets
* for PXT/microbit

## Licence
Licence MIT
Droits d'auteur© 2018 Parlons sciences
L'autorisation est accordée, gracieusement, à toute personne acquérant une copie de cette bibliothèque et des fichiers de documentation associés (la "Bibliothèque"), de commercialiser la Bibliothèque sans restriction, notamment les droits d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et / ou de vendre des copies de la Bibliothèque, ainsi que d'autoriser les personnes auxquelles la Bibliothèque est fournie à le faire, sous réserve des conditions suivantes :

La déclaration de copyright ci-dessus et la présente autorisation doivent être incluses dans toutes copies ou parties substantielles de la Bibliothèque.

LA BIBLIOTHÈQUE EST FOURNIE "TELLE QUELLE", SANS GARANTIE D'AUCUNE SORTE, EXPLICITE OU IMPLICITE, NOTAMMENT SANS GARANTIE DE QUALITÉ MARCHANDE, D’ADÉQUATION À UN USAGE PARTICULIER ET D'ABSENCE DE CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU TITULAIRES DU DROIT D'AUTEUR NE SERONT RESPONSABLES DE TOUT DOMMAGE, RÉCLAMATION OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS LE CADRE D'UN CONTRAT, D'UN DÉLIT OU AUTRE, EN PROVENANCE DE, CONSÉCUTIF À OU EN RELATION AVEC LA BIBLIOTHÈQUE OU SON UTILISATION, OU AVEC D'AUTRES ÉLÉMENTS DE LA BIBLIOTHÈQUE.

## Code de conduite
Ce projet a adopté le Code de conduite de Microsoft (anglais)[Code de conduite de Microsoft (anglais)] (https://opensource.microsoft.com/codeofconduct/). Pour plus d'informations, voir les ) [FAQ du Code de conduite (anglais](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) avec vos questions ou commentaires.

###### [haut de la page](#top)
