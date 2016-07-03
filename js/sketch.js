function setup(){
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent("canvasContainer");
	// colorMode(HSB);
	noStroke();	
}

function draw(){
	push();
	fill(80,20,200,30);
	rect(0,0,width,height);
	pop();

	push();
	fill(0,20,10);
	ellipse(mouseX,mouseY,20,20);
	pop();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}


