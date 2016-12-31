/*jslint browser: true devel: true*/
/*global window*/

function changeText() {
    'use strict';
    var para = document.getElementsByClassName('para');

    var firstStr = para[0].innerHTML;
    var secondStr = para[1].innerHTML;
    para[2].innerHTML = firstStr + secondStr;

    para[0].innerHTML = " ";
    para[1].innerHTML = " ";
}