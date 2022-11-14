// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y, color) {
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

let ben;
let uday;
let lila;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  ben = new Walker(300, 600, "red");
  uday = new Walker(200, 300, "blue");
  lila = new Walker(1200, 600, "green");
}

function draw() {
  ben.display();
  uday.display()
  lila.display()

  ben.move();
  uday.move()
  lila.move()
}
