/*jslint browser: true devel: true white: true*/
/*global window*/

function batting (player, distance) {
	"use strict";

	if ( (distance <= 350) && (distance > 0) ) {
		document.write (player + " had a hit");
	}
	else if (distance <= 0) {
		document.write (player + " had STRUCK OUT");
	}
	else {
		document.write (player + " hit a HOME RUN");
	}
}

batting("Jigar", 355);