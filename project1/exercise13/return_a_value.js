/*jslint browser: true devel: true*/
/*global window*/

function multiply(num1, num2) {
    "use strict";
    var result = num1 * num2;
    return result;
}

var theResult = multiply(6, 5);
document.write(theResult);