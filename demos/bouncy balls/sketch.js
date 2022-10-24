// Bouncy Balls
// Uday Sandhu
// October 24th

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i=0; i< theCircles.length; i++) {
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;

    if (theCircles[i].x + theCircles[i].radius > width || theCircles[i].x - theCircles[i].radius < 0){
      theCircles[i].dx *= -1;
    }
    if (theCircles[i].y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius < 0){
      theCircles[i].dy *= -1;
    }
    
  }
  for (let thisCircle of theCircles) {
    noStroke()
    fill(thisCircle.ccolor);
    circle(thisCircle.x, thisCircle.y, thisCircle.radius * 2);
  }
}

function spawnBall(tempx, tempy) {
  let newBall = {
    x: tempx,
    y:tempy,
    radius: random(25, 100),
    dx: random(-10, 10),
    dy: random(-10, 10),
    ccolor: color(random(255), random(255), random(255), random(255))
  }
  return newBall;
}

function mousePressed(){
  theCircles.push(spawnBall(mouseX, mouseY));
}