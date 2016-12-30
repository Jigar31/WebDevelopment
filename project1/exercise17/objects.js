/*jslint browser: true devel: true*/
/*global window*/

function breakLine() {
    "use strict";
    document.write("<br />");
}

var orc = {
    hair: "green",
    age: 26,
    stomachFull: true,

    eat: function () {
        "use strict";
        document.write("YUM YUM!!!");
    }
};

document.write(orc.age);
breakLine();

var newAge = orc.age + 2;

document.write(newAge);
breakLine();

orc.eat();

// object are created using curly braces {};
// objects contains name value pair
// variables in an object are called properties
// functions in an object are called methods (and also called as behaviour)
// properties are defined as property_name: value
// methods are defined as method_name: function () {}
// To access properties/methods use "."
// e.g. orc.hair;
// orc.eat();