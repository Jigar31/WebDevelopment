/*jslint browser: true devel: true*/
/*global window*/

function Car(type, color, miles) {
    'use strict';
    this.type = type;
    this.color = color;
    this.miles = miles;
}

var car = [];
car[0] = new Car("Compact", "blue", 3412);
car[1] = new Car("Truck", "red", 7392);
car[2] = new Car("SUV", "green", 3280);

function changeText() {
    'use strict';
    var i;
    var pElement = document.getElementsByTagName("p");
    for (i = 0; i < car.length; i += 1) {
        pElement[0].innerHTML = pElement[0].innerHTML + "Car Type: " + car[i].type + "<br /> Car Color: " + car[i].color + "<br /> Car Miles: " + car[i].miles + "<br /> <br />";
    }
}

// function Car(type, color, miles) {}
// is actually a class
// car is an array of Car objects
// new Car() is constructor