define(["./prototype", "./jquery"], function(prototype, $) {
    return Class.create({
	initialize: function() {
	    this.canvas = $('#zone')[0];
	    this.canvas.onclick = function(mev) {
		alert("mev : " + mev);
	    };
	    this.ctx = this.canvas.getContext('2d');
	    this.ctx.strokeStyle = "#000000";
	    this.ctx.strokeRect(0, 0, 400, 300);
	    this.ball = $('#ball')[0];
	    this.ball.onclick = function(mev) {
		alert("mev ball : " + mev);
	    };
	    this.bctx = this.ball.getContext('2d');
	    this.bctx.fillStyle = "#FF0000";
	    this.bctx.beginPath();
	    this.bctx.arc(15, 15, 15, 0, 2 * Math.PI);
	    this.bctx.closePath();
	    this.bctx.fill();
	    this.x = 0;
	    this.y = 0;
	    this.r = 15;
	},

	draw: function(x, y) {
	    console.log("center : c(" + x + ", " + y + ")");
	    // this.ctx.fillStyle = "#FF0000";
	    // this.ctx.beginPath();
	    // this.ctx.arc(x, y, this.r, 0, 2 * Math.PI);
	    // this.ctx.closePath();
	    // this.ctx.fill();
	    this.x = x;
	    this.y = y;
	    this.ctx.drawImage(this.ball, x, y);
	},

	width: function() {
	    return this.canvas.width;
	},

	height: function() {
	    return this.canvas.height;
	},

	clear: function() {
	    this.ctx.fillStyle = "#FFFFFF";
	    this.ctx.strokeStyle = "#000000";
	    this.ctx.fillRect(0, 0, 400, 300);
	    this.ctx.strokeRect(0, 0, 400, 300);
	},

	outOfZone: function(id, delta) {
	    var str = "canvas (" + this.canvas.width.toString() + ", "+ this.canvas.height.toString() + ")";
	    if (id == 'width') {
		var res = this.x + delta;
		if (delta < 0) {
		    res -= this.r;
		} else {
		    res += this.r;
		}
		console.log(str + "\nres (for width) : " + res.toString());
		if (res > this.canvas.width || res < 0) {
		    return true;
		}
	    } else if (id == 'heigth') {
		var res = this.y + delta;
		if (delta < 0) {
		    res -= this.r;
		} else {
		    res += this.r;
		}
		console.log(str + "\nres (for heigth) : " + res.toString());
		if (res > this.canvas.height || res < 0) {
		    return true;
		}
	    }
	    return false;
	}
    });
});
