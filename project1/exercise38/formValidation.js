/*jslint browser: true devel: true*/
/*global window*/

function validateTextbox() {
    'use strict';
    var nameBox = document.getElementById("name");
    var addressBox = document.getElementById("address");

    if (nameBox.value === "" || addressBox.value === "") {
        alert("This field cannot be left blank");
        nameBox.focus();
        nameBox.style.border = "solid 3px red";
        return false;
    } else if (nameBox.value === " " || addressBox.value === " ") {
        alert("Spaces are not allowed at start");
        return false;
    } else if (nameBox.value.length < 8 || addressBox.value.length < 8) {
        alert("Please enter atleast 8 characters");
        return false;
    }
}