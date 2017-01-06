/*jslint browser: true devel: true*/
/*global window*/

var i = 2;
// alert(i);

function changeStyle(id) {
    'use strict';
    var elementId = document.getElementById(id);
    elementId.style.color = "red";
}

function createNewElements() {
    'use strict';
    i = i + 1;
    var h2Element = document.createElement("h2");

    var parent = document.getElementById("main");
    parent.appendChild(h2Element);

    var h2Text = document.createTextNode("New Heading");
    h2Element.appendChild(h2Text);

    // create attribute id
    var h2Id = document.createAttribute("id");
    // set value of id
    var hStr = "heading" + i;
    // alert(hStr);
    h2Id.value = hStr;
    // alert(h2Id.value);
    // set created attribute to h2Element
    h2Element.setAttributeNode(h2Id);
    // alert("attribute set");

    var h2OnClick = document.createAttribute("onclick");
    h2OnClick.value = "changeStyle(id)";
    // alert("onclick attribute added");
    h2Element.setAttributeNode(h2OnClick);

    var pElement = document.createElement("p");
    parent.appendChild(pElement);

    var pText = document.createTextNode(" Some text for new paragraph");
    pElement.appendChild(pText);

    var pId = document.createAttribute("id");
    var pStr = "para" + i;
    pId.value = pStr;
    // alert("id attribute added");
    pElement.setAttributeNode(pId);

    var pOnClick = document.createAttribute("onclick");
    pOnClick.value = "changeStyle(id)";
    // alert("onclick attribute added");
    pElement.setAttributeNode(pOnClick);
}

function removeElement() {
    'use strict';
    i = i - 1;
    var h2Element = document.getElementsByTagName("h2")[i];
    var parent = h2Element.parentNode;
    parent.removeChild(h2Element);

    var pElement = document.getElementsByTagName("p")[i];
    parent.removeChild(pElement);

    if (i === 0) {
        document.getElementById('btn').style.display = "none";
        document.getElementById('rmbtn').style.visibility = "hidden";

        var closeBtn = document.createElement("button");
        document.getElementById('main').appendChild(closeBtn);

        var bOnClick = document.createAttribute("onclick");
        bOnClick.value = "window.close()"; // window.close() closes active window
        closeBtn.setAttributeNode(bOnClick);
        // alert("on click set");

        var bId = document.createAttribute("id");
        bId.value = "close";
        closeBtn.setAttributeNode(bId);
        // alert("Id set");

        document.getElementById("close").innerHTML = "Close";
    }

}

