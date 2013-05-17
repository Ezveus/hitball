$(function() {
    var clr = "#FF0000";
    var altclr = "#00FF00";
    var xcoord = 42;
    var ycoord = 42;
    var ballradius = 15;
    var dx = 1;
    var dy = 1;
    var zwidth = parseInt($('#zone').attr("width"));
    var zheight = parseInt($('#zone').attr("height"));
    var points = parseInt($('#points').text());

    $("#title").mouseover(function() {
	this.style.color = altclr;
    });
    $("#title").mouseout(function() {
	this.style.color = clr;
    });

    function draw() {
	$("#zone").clearCanvas();
	$("#zone").drawRect({
	    layer: true,
	    strokeStyle: "black",
	    strokeWidth: 2,
	    x: 0,
	    y: 0,
	    width: zwidth,
	    height: zheight,
	    fromCenter: false
	});
	// Si on sort de la zone inverser le x ou le y
	$("#zone").drawArc({
	    layer: true,
	    fillStyle: "#FF0000",
	    x: xcoord,
	    y: ycoord,
	    radius: ballradius,
	    click: function(layer) {
		points += 1;
		$('#points').text(points.toString());
	    }
	});
	xcoord += dx;
	ycoord += dy;
    }

    $("#zone").drawRect({
	layer: true,
	strokeStyle: "black",
	strokeWidth: 2,
	x: 0,
	y: 0,
	width: zwidth,
	height: zheight,
	fromCenter: false,
	click: function(layer) {
	    window.setInterval(draw, 60);
	    $('#points').text(points.toString());
	}
    }).drawArc({
	layer: true,
	fillStyle: "#FF0000",
	x: xcoord,
	y: ycoord,
	radius: ballradius,
	click: function(layer) {
	    window.setInterval(draw, 60);
	    $('#points').text(points.toString());
	}
    });
});
