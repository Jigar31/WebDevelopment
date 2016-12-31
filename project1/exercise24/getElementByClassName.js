/*jslint browser: true devel: true*/
/*global window*/

function changeColor() {
    'use strict';
    var i;
    var para = document.getElementsByClassName('para');

    for (i = 0; i < para.length; i += 1) {
        para[i].style.color = "red";
    }
}