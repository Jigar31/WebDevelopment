/*jslint browser: true devel: true*/
/*global window*/

var roads = ["stone", "dirt", "cement", "tar"];

var roadTravelled = roads[1];

document.write(roadTravelled);
document.write("<br />");

roads[1] = "cobblestone";

roadTravelled = roads[1];

document.write(roadTravelled);

// Arrays start with index 0
// Arrays can also be created using :
/* var roads = [];
   roads[0] = "stone";
   roads[1] = "dirt";
   roads[2] = "cement";
   roads[3] = "tar";
*/