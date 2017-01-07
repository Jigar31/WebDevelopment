/*jslint browser: true devel: true*/
/*global window*/

function changeTextColor(id) {
    'use strict';
    var element = document.getElementById(id);

    var nextSibling = element.nextElementSibling;
    nextSibling.style.color = "green";

    var previousSibling = element.previousElementSibling;
    previousSibling.style.color = "blue";
}

function backToNormal(id) {
    'use strict';
    var element = document.getElementById(id);
    var nextSibling = element.nextElementSibling;
    var previousSibling = element.previousElementSibling;

    nextSibling.style.color = "";
    previousSibling.style.color = "";
}