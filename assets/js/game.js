requirejs.config({
    shim: {
	'prototype': {},
	'jquery': {
	    export: '$'
	},
	// 'jcanvas': {
	//     deps: 'jquery',
	//     export: '$'
	// }
    }
});

require(["jquery", // "jcanvas",
	 "prototype", "hitballgame"], function(j, // j2,
					       p, h) {
    if (typeof j !== 'undefined' &&
	// typeof j2 !== 'undefined' &&
	typeof h !== 'undefined') {
	console.log("jquery (" + j + "), jcanvas (" + // j2 +
		    "), prototype and hitballgame (" + h + ") modules are loaded.");
    }
});

define(["jquery", "hitballgame"], function($, HitBallGame) {
    var clr = "#FF0000";
    var altclr = "#00FF00";

    $("#title").mouseover(function() {
	this.style.color = altclr;
    });
    $("#title").mouseout(function() {
	this.style.color = clr;
    });

    if (typeof HitBallGame !== 'undefined') {
	var game = new HitBallGame();
	var x = 42;
	var y = 42;
	var dx = 10;
	var dy = 10;

	window.setInterval(function() {
	    game.clear();
	    if (game.outOfZone('width', dx) == true) {
		dx = -1 * dx;
	    }
	    if (game.outOfZone('heigth', dy) == true) {
		dy = -1 * dy;
	    }
	    game.draw(x, y);
	    x += dx;
	    y += dy;
	}, 60);
    } else {
	console.log("Error : HitBallGame object isn't defined.");
    }
});
