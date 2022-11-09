// Terrain Generation
// Uday Sandhu
// September 21st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theHeights = [];
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  theHeights = genHeights(2000);
  background(random(255), random(255), random(255));
  for (let i = start; i< start + width; i++) {
    dispRect(i-start, theHeights[i], 1);
  }

  if(keyIsPressed) {
    start++;
  }
}

function dispRect(x, recth, rectw) {
  let y = height - recth;
  fill(random(255), random(255), random(255));
  rect(x,y,rectw,recth);
}

function genHeights(n) {
  let tempAr = [];
  let time = random(10000);
  for(let i = 0; i < n; i++){
    tempAr.push(noise(time) * height/2);
    time+= 0.01;
  }
  return tempAr;
}

let ive = {
  been: "in",
  the: "hills",
  fucking: "dudes",
}