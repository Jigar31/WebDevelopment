/*jslint browser: true devel:true*/
/*global window*/

var number1 = 7;
var number2 = 4;

var number3 = number1 + number2;

document.writeln(number1 + " + " + number2 + " = " + number3);
document.write("<br />");

document.write("number1 += number2 gives: ");
console.log(document.write("number1 += number2 gives: "));

number1 += number2;

document.writeln(number1);
console.log(document.writeln(number1 + "\n"));
document.write("<br />");

// Arithmetic Operators: + - * /
// Assignment Operator: =
// Precedence: / and * has precedence over + and -

var a = 4 + 5 * 3;

document.writeln("4 + 5 * 3 = " + a);
console.log(document.writeln("4 + 5 * 3 = " + a));

//use document.writeln() or document.write("\n") for new line in console.log
//use document.write("<br />"); for new line to output in html