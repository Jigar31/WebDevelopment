/*jslint browser: true devel: true*/
/*global window*/

function changeText() {
    'use strict';

    var confirmation = confirm("This change is final. Do you want to continue?");

    if (confirmation === true) {
        var para = document.getElementsByClassName('para');

        var firstStr = para[0].innerHTML;
        var secondStr = para[1].innerHTML;
        para[2].innerHTML = firstStr + secondStr;

        para[0].innerHTML = " ";
        para[1].innerHTML = " ";

        document.getElementById("btn").style.visibility = "hidden";
    }
}