"use strict"

let choose = prompt("Choose shape console you want = R. Rectangle C. Circle T. Triangle U. Cube S. Tube");
switch (choose) {
    case 'R':
        let rectangleWidth = parseInt(prompt("Input Rectangle Width"));
        let rectangleHeigth = prompt("Input Rectangle Heigth");
        const rectangleArea = parseInt(rectangleWidth) * parseInt(rectangleWidth);
        alert("Rectangle Area = " + rectangleWidth + " x " + rectangleHeigth + " = " + rectangleArea);
        console.log("Rectangle Area = " + rectangleWidth + " x " + rectangleHeigth + " = " + rectangleArea);
        break;
    case 'C':
        let circleRadius = parseInt(prompt("Input the Radius"));
        const circleArea = 3.14 * (circleRadius * circleRadius);
        alert("Circle Area = π x " + circleRadius + "² = " + circleArea);
        console.log("Circle Area = π x " + circleRadius + "² = " + circleArea);
        break;
    case 'T':
        let triangleBase = parseInt(prompt("Input Triangle Base"));
        let triangleHeigth = parseInt(prompt("Input Triangle Heigth"));
        const triangleArea = 0.5 * triangleBase * triangleHeigth;
        alert("Triangle Area = 1/2 x " + triangleBase + " x " + triangleHeigth + " = " + triangleArea);
        console.log("Triangle Area = 1/2 x " + triangleBase + " x " + triangleHeigth + " = " + triangleArea);
        break;
    case 'U':
        let cubeWidth = parseInt(prompt("Input Cube Width"));
        let cubeHeigth = parseInt(prompt("Input Cube Heigth"));
        let cubeLength = parseInt(prompt("Input Cube Length"));
        const cubeVolume = parseInt(cubeWidth) * parseInt(cubeWidth) * parseInt(cubeLength);
        alert("Cube Volume = " + cubeWidth + " x " + cubeHeigth + " x " + cubeLength + " = " + cubeVolume);
        console.log("Cube Volume = " + cubeWidth + " x " + cubeHeigth + " x " + cubeLength + " = " + cubeVolume);
        break;
    case 'S':
        let tubeRadius = parseInt(prompt("Input the Radius"));
        let tubeHeight = parseInt(prompt("Input Tube Height"));
        const tubeVolume = 3.14 * (tubeRadius * ctubeRadius) * parseInt(tubeHeight);
        alert("Tube Volume = π x " + tubeRadius + "²" + tubeHeight + " = " + tubeVolume) ;
        console.log("Tube Volume = π x " + tubeRadius + "²" + tubeHeight + " = " + tubeVolume);
        break;  

    default:
        console.log("There is no option for that");
        break;
}