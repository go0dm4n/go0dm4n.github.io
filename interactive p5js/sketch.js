// Interactive p5js project
// Uday Sandhu
// September 19th 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let flag;
let bgi;
function preload(flagname) {
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
  bgi = loadImage("flag-icons-main/background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(bgi, (0, 0, windowWidth, windowHeight));
  image(flag, windowWidth/2 - flag.width/2, windowHeight/2 - flag.height/2);
}

function flagname() { // selects 4 random flag names
  
}