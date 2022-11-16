// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.w = 10;
    this.h = 5;
    this.color = "blue";
  }

  move() {
    this.x += this.dx;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

  isDead() {
    return this.x > width;
  }
}

let theBullets = [];
let gun;

function preload() {
  gun = loadImage("watergun.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(gun, width/2 - gun.width, height/2 - gun.height/3)
  for (let i = 0; i < theBullets.length; i++) {
    if (theBullets[i].isDead()) {
      theBullets.splice(i, 1);
    }
    theBullets[i].move();
    theBullets[i].display();
  }
}

function mousePressed () {
  let someBullet = new Bullet(width/2, height/2);
  theBullets.push(someBullet);
}

