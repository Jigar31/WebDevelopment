/*jslint browser: true devel: true*/
/*global window*/

function changeText() {
    'use strict';

    var para = document.getElementsByClassName('para');

    para[0].innerHTML = " New Text 1";
    para[1].innerHTML = " New Text 2";
}