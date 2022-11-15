// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.radius = 4;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else if (choice < 100) {
      this.x += this.speed;
    }
  }
}

let walkerAr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  spawnWalker()
}

function draw() {
  for (let i = 0; i < walkerAr.length; i++) {
    walkerAr[i].move();
    walkerAr[i].display();
  }
}

function spawnWalker() {
  let ben = new Walker(width/2, height/2);
  let someColor = color(random(255), random(255), random(255), 150);
  ben.color = someColor;
  walkerAr.push(ben);
}

function keyPressed() {
  spawnWalker()
}