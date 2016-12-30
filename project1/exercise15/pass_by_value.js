/*jslint browser: true devel: true*/
/*global window*/

function batting(player, distance) {
    "use strict";
    var more = player + " hit the ball " + distance + " feet.";
    document.write(more);
}

batting("Steve", 352);

// Here batting() function parameters are passed as "Steve", 352
// These values are not sent directly to the function
// Rather copy of these values are sent to the function to be called
// This protects the original data from any modification
// and yet can gain the result
// This is called pass by value, i.e., values passed are duplicate of original values