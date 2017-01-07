/*jslint browser: true devel: true*/
/*global window*/

function changeColor() {
    'use strict';
    var parent = document.getElementById("main");

    var child = parent.childNodes[3];
    child.style.color = "red";

    child = parent.firstElementChild;
    child.style.color = "blue";

    child = parent.lastElementChild;
    child.style.color = "green";
}