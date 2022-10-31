// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond
const ROWS = 10;
const COLS = 30;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2Drandarray(COLS,ROWS)
}

function draw() {
  background(220);
  drawArrays(grid);
}

function create2darray(COLS,ROWS) {
  let emptyAr = [];
  for (let i = 0; i < COLS; i++) {
    emptyAr.push([]);
    for (let k = 0; k < ROWS; k++) {
      emptyAr[i].push(0);
    }
  }
  return emptyAr;
}

function create2Drandarray(COLS,ROWS) {
  let emptyAr = [];
  for (let i = 0; i < COLS; i++) {
    emptyAr.push([]);
    for (let k = 0; k < ROWS; k++) {
      if (random(100) < 50) {
        emptyAr[i].push(1);
      }
      else {
        emptyAr[i].push(0);
      }
    }
  }
  return emptyAr;
}

function drawArrays(grid){
  let cellWidth = width / COLS;
  let cellHeight = height / ROWS;
  for (let i = 0; i < COLS; i++) {
    for (let k = 0; k < ROWS; k++) {
      if (grid[i][k] === 0) {
        fill("white");
      }
      if (grid[i][k] === 1) {
        fill("black");
      }   
      rect(i * cellWidth, k * cellHeight, cellWidth, cellHeight); 
    }
  }
}

function mousePressed(){
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);
    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] === 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] === 0;
    }   
}
    