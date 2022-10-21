// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let allBalls = []



function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50,100),
    time: random(5000),
  };
  allBalls.push[theBall];
}

function drawBalls(){
  for (let i = 0; i <= allBalls.length; i++) {
    allBalls[i].x= noise(allBalls[i].time) * width;
    allBalls[i].y= noise(allBalls[i].time) * width;
    circle(allBalls[i].x, allBalls[i].y, allBalls[i].radius);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black");

}
