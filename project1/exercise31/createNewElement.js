/*jslint browser: true devel: true*/
/*global window*/

function createNewParagraph() {
    'use strict';
    var paraElement = document.createElement("p");

    var main = document.getElementById("main");
    main.appendChild(paraElement);

    var text = document.createTextNode("Some text for new paragraph");
    paraElement.appendChild(text);
}