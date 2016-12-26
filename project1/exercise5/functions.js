/*jslint browser: true devel: true*/
/*global window*/ // To remove window related error
//First line of code is used to remove alert or document related error when used in function


function saySomething() {
    "use strict";
    alert("This is a function");
}

saySomething();