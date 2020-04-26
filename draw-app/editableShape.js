function EditableShape() {
    this.icon = "assets/editableShape.jpg";
    this.name = "editable Shape";



    this.canvas2 = select('canvas');
    /*
     1. plot a shape as a series of vertices
        *add a button for swtitching between creating new vertices and editing vertices
        *click the canvas to add a vertex
        *dont draw right away add vertex to an array then draw but dont save to canvas
     2. edit the vertices using a mouse drag
        * if editing is on
        * highlight the location of vetices
        *when mousePressed is near vertex (using the dist function) update the vertex x and y with mousx and mousey
      
     3. confirm the final shape
    */


    var editButton;
    var finishButton;

    var editMode = false;

    var currentShape = [];

    //	canvas = createCanvas(800, 800);
    //	background(200);
    //    noFill();
    //    loadPixels();
    //    editButton = createButton('Edit Shape');
    //    editButton.mousePressed(function(){
    //        if(editMode){
    //            editMode = false;
    //            editButton.html("Edit Shape");
    //        }
    //        else{
    //            editMode = true;
    //            editButton.html("Add Vetices");
    //        }
    //    })
    //    finishButton = createButton('Finish Shape');
    //    
    //    
    //    finishButton.mousePressed(function(){
    //        editMode = false;
    //        draw();
    //        loadPixels();
    //        currentShape = [];
    //    })
    //    
    this.populateOptions = function () {
        select(".options").html(
            "<button class='button' style='width:100px; margin-right:5px' id='editButton'>Edit Shape</button><button class='button' style='width:100px' id= 'finishButton'> Finish Shape</button>");
        //click handler
        select("#editButton").mouseClicked(function () {
            if (editMode) {
                editMode = false;
                select("#editButton").html("Edit Shape");
            }
            else {
                editMode = true;
                select("#editButton").html("Add Vertices");//changes form edit shape to add vertices
            }
        });

        select("#finishButton").mouseClicked(function () {
            editMode = false;
            select("#editButton").html("Edit Shape");
            draw();
            loadPixels();
            currentShape = [];
        });

    }

    this.mousePressOnCanvas = function (canvas) {
        if (mouseX > 0 &&
            mouseX < canvas.width &&
            mouseY > 0 &&
            mouseY < canvas.height
        ) {
            return true;
        }
        return false;
    }

    this.draw = function () {
        push();
        updatePixels();
        noFill();
        this.mousePressOnCanvas;
        if (this.mousePressOnCanvas(this.canvas2) && mouseIsPressed) {
            if (!editMode) {

                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });

            }

            else {
                for (var i = 0; i < currentShape.length; i++) {
                    if (dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15) {
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }

        }
        beginShape();
        for (var i = 0; i < currentShape.length; i++) {

            vertex(currentShape[i].x, currentShape[i].y);
            if (editMode) {
                fill('red');
                ellipse(currentShape[i].x, currentShape[i].y, 10);
                noFill();
            }
        }

        endShape();
        pop();
    }

    //when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};

}
