// Interactive p5js project
// Uday Sandhu
// September 19th 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let flag;
function preload() {
  flag = loadImage("flag-icons-main/flags/4x3/France.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(flag, windowWidth/2, windowHeight/2);
}

function draw() {
}
