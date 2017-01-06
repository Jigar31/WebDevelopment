/*jslint browser: true devel: true*/
/*global window*/

var i = 1;

function createNewElements() {
    'use strict';
    // create H2 element
    var elementH2 = document.createElement("h2");

    // to add the created element we need to append it to the element which will act as its parent
    var main = document.getElementById("main");

    // append H2 element to div element, whose id is main, as a child element
    main.appendChild(elementH2);

    // create textNode to provide some text to the created element
    // **textNode is the last node of a branch since it does not have any children
    var textH2 = document.createTextNode("New Paragraph");

    // append textNode to the H2 element
    elementH2.appendChild(textH2);

    // create p element
    var elementP = document.createElement("p");

    // append p element to the div element as a child
    main.appendChild(elementP);

    // create textNode which will contain text information of newly created paragraph
    var textP = document.createTextNode(" Some text for new paragraph");

    // append textP to the p element
    elementP.appendChild(textP);

    i = i + 1;
}

function removeElement() {
    //This function will remove newly added elements
    'use strict';

    if (i < 0) {
        alert("Nothing to remove");
    } else if (i === 1) {
        alert("Cannot remove default elements");
    } else {
        var elementH = document.getElementsByTagName("h2")[i];
        var parent = elementH.parentNode;
        parent.removeChild(elementH);

        var elementP = document.getElementsByTagName("p")[i];
        parent.removeChild(elementP);

        i = i - 1;
    }
}