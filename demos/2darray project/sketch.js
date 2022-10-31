// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [];
let gridSize = 5;
let cellSize;
let leveln;
let butterfly;

function preload(){
  leveln = loadJSON("levels/butterfly.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeCross()
}

function draw() {
  background(220);
  cellSize = height/gridSize;
  drawCross();
}

function makeCross(){
  level = loadImage("flag-icons-main/flags/4x3/" + leveln + ".svg");
  for (let c = 0; c < gridSize; c++) {
    grid.push([]);
    for (let r = 0; r < gridSize; c++) {
      grid[c].push(0);
    }
  }
}

function drawCross(){
  for (let c = 0; c < gridSize; c++) {
    for (let r = 0; r < gridSize; c++) {
      if (grid[c][r] === 0) {
        fill("white");
      }
      else if (grid[c][r] === 1 ) {
        fill("black");
      }
      rect(c*cellSize + width/4, r*cellSize, cellSize, cellSize);
    }
  }
}

function checkCross(){
  let newGrid = [...grid];

}