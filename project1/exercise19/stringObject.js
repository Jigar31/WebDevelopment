/*jslint browser: true devel: true*/
/*global window*/

function print(a) {
    "use strict";
    document.write(a);
    document.write("<br />");
}

var hello = "Hello! How are you doing?";
print(hello);

var upHello = hello.toUpperCase();
print(upHello);

var lowHello = hello.toLowerCase();
print(lowHello);

var lengthHello = hello.length;
print(lengthHello);

var charHello = hello.charAt(9);
print(charHello);

var replaceDoing = hello.replace('doing', 'today');
print(replaceDoing);

var boldHello = hello.bold();
print(boldHello);

var italicsHello = hello.italics();
print(italicsHello);

