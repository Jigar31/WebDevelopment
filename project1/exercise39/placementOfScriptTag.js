/*jslint browser: true devel: true*/
/*global window*/

var pElements = document.getElementsByTagName("p");

for (var i = pElements.length - 1; i >= 0; i--) {
    pElements[i].style.color = "green";
}