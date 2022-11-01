// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [];
let cols = 10;
let rows = 10;
let cellSize;
let leveln;
let level;
let butterfly;
let fps = 15;
let mouse = "pencil";

function preload(){
  // leveln = loadJSON("levels/butterfly.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps)
  makeCross();
}

function draw() {
  background(220);
  cellSize = (height/cols) / 2;
  drawCross();
  clicky()
}

function makeCross(){
  level = loadImage("flag-icons-main/flags/4x3/" + leveln + ".svg");
  for (let y = 0; y < cols; y++) {
    grid.push([]);
    for (let x = 0; x < rows; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}

function drawCross(){
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1 ) {
        fill("black");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function checkCross(){
  let newGrid = [...grid];

}

function mousePressed(){
}

function clicky(){
  let xPos = Math.floor(mouseX/cellSize);
  let yPos = Math.floor(mouseY/cellSize);
  if(mouseIsPressed && mouse === "pencil") {
    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] = 0;
    }
    
  }
}