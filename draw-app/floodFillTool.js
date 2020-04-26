function FloodFillTool() {

	this.name = "floodFillTool";
	this.icon = "assets/floodFill.png";

	var previousMouseX = -1;
	var previousMouseY = -1;

	var oldColor;

	this.draw = function () {
		//push();
		this.mousePressOnCanvas;
		//if the mouse is pressed
		if (this.mousePressOnCanvas() && mouseIsPressed) {
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else {

				oldColor = get(mouseX, mouseY);

				boundaryFill(mouseX, mouseY);

				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else {
			previousMouseX = -1;
			previousMouseY = -1;
		}
		//pop();
	};

	this.mousePressOnCanvas = function () {
		if (mouseX > 0 &&
			mouseX < canvas.width &&
			mouseY > 0 &&
			mouseY < canvas.height
		) {
			return true;
		}
		return false;
	}

	function fillPixel(x, y) {

		let d = pixelDensity();
		let i = 4 * ((x * d) + (y * width * d));
		pixels[i] = red(selectedColour);
		pixels[i + 1] = green(selectedColour);
		pixels[i + 2] = blue(selectedColour);
		pixels[i + 3] = alpha(selectedColour);

	}

	function getPixel(x, y) {

		var c = [];

		let d = pixelDensity();
		let i = 4 * ((x * d) + (y * width * d));
		c[0] = pixels[i];
		c[1] = pixels[i + 1];
		c[2] = pixels[i + 2];
		c[3] = pixels[i + 3];

		return c;
	}

	function boundaryFill(x, y) {

		loadPixels();

		stack = [];

		let start = { x: x, y: y }

		stack.push(start);

		while (stack.length > 0) {

			var pop = stack.pop();

			fillPixel(pop.x, pop.y);

			var right = { x: pop.x + 1, y: pop.y }

			let c = getPixel(right.x, right.y);

			if (c[0] == oldColor[0] && c[1] == oldColor[1] && c[2] == oldColor[2]) {
				stack.push(right);
			}

			var down = { x: pop.x, y: pop.y + 1 }

			c = getPixel(down.x, down.y);

			if (c[0] == oldColor[0] && c[1] == oldColor[1] && c[2] == oldColor[2]) {
				stack.push(down);
			}

			var left = { x: pop.x - 1, y: pop.y }

			c = getPixel(left.x, left.y);

			if (c[0] == oldColor[0] && c[1] == oldColor[1] && c[2] == oldColor[2]) {
				stack.push(left);
			}

			var up = { x: pop.x, y: pop.y - 1 }

			c = getPixel(up.x, up.y);

			if (c[0] == oldColor[0] && c[1] == oldColor[1] && c[2] == oldColor[2]) {
				stack.push(up);
			}

		}

		updatePixels();

	}

}

