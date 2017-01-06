/*jslint browser: true devel: true*/
/*global window*/

var i = 0;

function changeImage() {
    'use strict';
    var str;

    // When button is clicked once show ice cream sundae
    // When button is clicked twice show normal ice cream
    // Then alternate click will decide which ice cream image to display
    // Alternate click will check whether click is divisible by 2 or not
    // if it is then show icream sundae
    // else show normal ice cream
    if ((i % 2) === 0) {
        str = "ice-cream-sundae.jpg";
    } else {
        str = "Ice-cream2.jpg";
    }

    var img = document.getElementById("image");

    img.src = str;
    img.style.paddingLeft = "50px";

    var button = document.getElementById('btn');
    button.style.marginLeft = "50px";

    i += 1;

}

// To pad an element like button use margin attribute
// padding only affects text inside the button.