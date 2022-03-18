var c = "black";

function setup() {
  createCanvas(600, 400);
	background(205);
}

function draw() {
    
  if (mouseIsPressed) {
		stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

	noStroke();
  //draw the first button
  fill("red");
  rect(0, 0, 40, 40);

  //draw the second button
  fill("blue");
  rect(40, 0, 40, 40);
}

//this will run whenever the mouse is pressed
function mousePressed() {
  if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "red";
  }
  if (mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "blue";
  }
}


