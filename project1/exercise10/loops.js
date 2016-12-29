/*jslint browser: true devel: true*/
/*global window*/

var i = 1;

while (i <= 5) {
    document.write("Printing this line " + i + " times");
    document.write("<br />");
    i += 1;
}

// use loops within a function is recommended
// using while loop without wrapping it inside any function
// will result in error "Unexpected 'while' at top level."
// usage of ++ and -- is not recommended by jslint
// using it will provide error "Unexpected expression '++' in statement position"