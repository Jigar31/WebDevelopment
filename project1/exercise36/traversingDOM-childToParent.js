/*jslint browser: true devel: true*/
/*global window*/

function changeTextColor() {
    'use strict';
    var child = document.getElementById("para1");
    var parent = child.parentElement;

    parent.style.color = "green";

    // To get parent element use child's property parentNode or parentElement
}