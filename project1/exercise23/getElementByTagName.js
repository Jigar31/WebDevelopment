/*jslint browser: true devel: true*/
/*global window*/

function changeStyle() {

    'use strict';

    var i;
    var para = document.getElementsByTagName("p");

    para[0].style.fontStyle = "italic";

    for (i = 1; i < para.length; i += 1) {
        para[i].style.fontStyle = "italic";
    }
}