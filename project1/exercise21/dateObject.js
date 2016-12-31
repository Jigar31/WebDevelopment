/*jslint browser: true devel: true*/
/*global window*/

function print(str) {
    'use strict';
    document.write(str);
    document.write("<br />");
}

var todayDate = new Date();

print(todayDate);

var useDate = todayDate.toDateString(); // To shorten the date string

print(useDate);

useDate = todayDate.getFullYear();  // To get only Year

print(useDate);

todayDate.setFullYear(2107);    // To set year

print(todayDate);

// To know the functions of date use "Date."
// and a list will open that consists of Date functions