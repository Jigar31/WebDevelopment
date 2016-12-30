/*jslint browser: true devel: true*/
/*global window*/

function breakLine() {
    "use strict";
    document.write("<br />");
}

var orc = {
    hair: "green",
    age: 26,
    stomachFull: false
};

orc.hair = "purple";    // changing value of an object property
document.write(orc.hair);
breakLine();

orc.hair = 1;   // changing value as well as datatype of an object property
document.write(orc.hair);
breakLine();

orc.hair2 = "blue"; // adding and initializing an object property even after defining it
document.write(orc.hair2);
breakLine();

delete orc.hair2;   // deleting an object property
document.write(orc.hair2);
breakLine();

orc.hair2;  // declaring an object property without initializing
document.write(orc.hair2);