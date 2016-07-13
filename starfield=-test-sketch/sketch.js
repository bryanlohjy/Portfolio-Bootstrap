var stars = []

var distFromCentre;

var speed;

function setup() {
  createCanvas(1440, 950);
  for (var i = 0; i < 80; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  distFromCentre = dist(mouseX, mouseY,width/2, height/2);
  speed = map(distFromCentre, 0, width, 0, 20);
  background(255, 20);
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
      fill(20, 200, 20);
    } else if (this.col == 1) {
      fill(200, 200, 20);
    } else if (this.col == 2) {
      fill(20, 20, 200);
    }


    noStroke();

    var r = map(this.z, 0, width, width / 40, width / 200);
    
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
    Star.col+=1;
    println(stars[0].col);
}


