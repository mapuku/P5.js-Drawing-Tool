function EraserTool() {

    this.name = "EraserTool";
    this.icon = "assets/eraser.png";

    var size = 20;

    var previousColor;
    
    this.draw = function () {
        // keep saving the current settings and do what ever we need
        push();
        if (mouseIsPressed) {
            noStroke();
            fill(255, 255, 255);
            ellipse(mouseX, mouseY, 3 * size, 2 * size);
        }
        // finally pop the current settings and reset
        pop();
    };
}