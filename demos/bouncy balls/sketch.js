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
    
    for (let k= 0; k < theCircles.length; k++) {
      if (i !== k) {
        if (isColliding(theCircles[i], theCircles[k])) {
          let tempDx = theCircles[i].dx
          let tempDy = theCircles[i].dy
          theCircles[i].dx = theCircles[k].dx;
          theCircles[i].dy = theCircles[k].dy;
          theCircles[k].dx = tempDx;
          theCircles[k].dy = tempDy;
        }
      }
    }
    if (theCircles[i].x + theCircles[i].radius > width || theCircles[i].x - theCircles[i].radius < 0){
      theCircles[i].dx *= -1;
    }
    if (theCircles[i].y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius < 0){
      theCircles[i].dy *= -1;
    }
    
  }
  for (let thisCircle of theCircles) {
    noStroke();
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
    ccolor: color(random(255), random(255), random(255))
  }
  return newBall;
}

function mousePressed(){
  theCircles.push(spawnBall(mouseX, mouseY));
}

function isColliding(ball1, ball2){
  let distance = dist(ball1.x, ball1.y, ball2.x, ball2.y);
  let radiSum = ball1.radius + ball2.radius;
  return distance < radiSum;
}