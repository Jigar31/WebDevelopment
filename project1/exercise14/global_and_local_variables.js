/*jslint browser: true devel: true*/
/*global window*/

var name = "Jigar"; // global variable
function printName() {
    name3 = "Sejal"; // not using var will make name3 a global variable even if it is defined inside the function
    var name4 = "Divya"; // local variable
    document.write(name4 + "<br />");
    var name2 = "Mitesh"; // local variable
}

document.write(name + "<br />");

printName();
document.write(name3 + "<br />");
document.write(name2 + "<br />"); // using local variable outside the function

// usage of var keyword is recommended
// here we didn't use "use strict"; which must be used inside the function
// global variable can also be declared using window.variable_name
// if any statement gives error than no statement after that will be executed.