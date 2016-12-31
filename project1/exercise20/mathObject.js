/*jslint browser: true devel: true*/
/*global window*/

function print(num) {
    "use strict";
    document.write(num);
    document.write("<br />");
}

var number = 4.7;

var newNum1 = Math.round(number);
print(newNum1);

var newNum2 = Math.floor(number);
print(newNum2);

var newNum3 = Math.ceil(number);
print(newNum3);

var newNum4 = Math.sqrt(number);
print(newNum4);