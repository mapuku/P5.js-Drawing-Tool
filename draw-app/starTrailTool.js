function StarTrailTool() {

	this.name = "starTrailTool";
	this.icon = "assets/starTrail.jpg";

	var points = 1;
	var spread = 80;

	var canvas = select('canvas');

	this.draw = function () {
		var r1, r2, n;
		this.mousePressOnCanvas;
		if (this.mousePressOnCanvas() && mouseIsPressed) {

			for (var i = 0; i < points; i++) {
				r1 = random(1, 4);
				r2 = random(5, 6);
				n = random(6, 8);
				var x = random(mouseX - spread, mouseX + spread);
				var y = random(mouseY - spread, mouseY + spread);
				star(x, y, r1, r2, n);
				if (spread > 0) {
					spread -= spread * 0.01;
				}
			}

		} else {
			spread = 80;
			points = 15;
		}
	};

	this.mousePressOnCanvas = function() {
		if (mouseX > 0 &&
			mouseX < canvas.width &&
			mouseY > 0 &&
			mouseY < canvas.height
		) {
			return true;
		}
		return false;
	}

	function star(x, y, radius1, radius2, npoints) {
		let angle = TWO_PI / npoints;
		let halfAngle = angle / 2.0;
		beginShape();
		for (let a = 0; a < TWO_PI; a += angle) {
			let sx = x + cos(a) * radius2;
			let sy = y + sin(a) * radius2;
			vertex(sx, sy);
			sx = x + cos(a + halfAngle) * radius1;
			sy = y + sin(a + halfAngle) * radius1;
			vertex(sx, sy);
		}
		endShape(CLOSE);
	}

}
