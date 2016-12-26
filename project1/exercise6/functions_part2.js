/*jslint browser: true devel: true*/
/*global window*/

function addSomething(num, str) {

    "use strict";
    var add = num + str; //Adding number and string will produce string as a result
    window.alert(add);
}

addSomething(10, " things to do!");