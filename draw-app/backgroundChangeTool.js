function BackgroundChangeTool() {

    this.name = "backgroundChangeTool";
    this.icon = "assets/backgroundChange.png";

    var previousColor = "white";

    this.draw = function () {

        if (this.mousePressOnCanvas() && mouseIsPressed) {
            loadPixels();
            let d = pixelDensity();
            let length = 4 * (width * d) * (height * d);
            for (let i = 0; i < length; i += 4) {

                if (pixels[i] == red(previousColor) && pixels[i + 1] == green(previousColor)
                    && pixels[i + 2] == blue(previousColor)) {
                    pixels[i] = red(selectedColour);
                    pixels[i + 1] = green(selectedColour);
                    pixels[i + 2] = blue(selectedColour);
                    pixels[i + 3] = alpha(selectedColour);
                }

            }
            updatePixels();
            previousColor = selectedColour;
        }

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
}