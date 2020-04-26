
function ScissorTool() {

	this.icon = "assets/scissor.png";
	this.name = "Scissor";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the selected area to the screen 
	this.draw = function() {

        push();
        noFill();
        stroke('black');
        strokeWeight(1);
		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new selection
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}
			else{
				//update the screen with the saved pixels to hide any previous
				//rectangle(selected area to cut) between mouse pressed and released
				updatePixels();
				//draw the line
				rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent selected area and reset the
			//drawing bool and start locations
			loadPixels();
            drawing = false;
            fill('white');
            stroke('white');
            strokeWeight(2);
            rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
            startMouseX = -1;
            startMouseY = -1;
        }
        
        pop();
	};


}
