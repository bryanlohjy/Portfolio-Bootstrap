var stars = [];

var fill1 = [20,200,180];
var fill2 = [255,255,0];
var fill3 = [100,100,100];

var colArray =[fill1,fill2,fill3];

var distFromCentre;

var speed;

function setup() {


	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent("canvasContainer");

	for (var i = 0; i < 100; i++) {
	  stars[i] = new Star();
	println(colArray);
  }
}

function draw() {
  distFromCentre = dist(mouseX, mouseY,width/2, height/2);
  speed = map(distFromCentre, 0, width, 2, 20);
  background(255, 50);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

}

// Daniel Shiffman
// Code for: https://youtu.be/17WoOqgXsRM

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
  this.col = int(random(0, 3));

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    if (this.col == 0) {
      fill(colArray[0][0], colArray[0][1], colArray[0][2]);
    } else if (this.col == 1) {
      fill(colArray[1][0], colArray[1][1], colArray[1][2]);
    } else if (this.col == 2) {
      fill(colArray[2][0], colArray[2][1], colArray[2][2]);
    }


    noStroke();

    var r = map(this.z, 0, width, width / 10, width / 200);
    
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);


    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    // stroke(255);
    // line(px, py, sx, sy);

  }
}

function mousePressed() {
  // loop through colors
  for (var i = 0; i < stars.length; i++) {
    if (stars[i].col==colArray.length-1){
      stars[i].col=0;
    }else{
      stars[i].col+=1;
    }
  }

}



function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
