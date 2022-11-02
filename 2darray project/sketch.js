// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [];
let newGrid = [];

let cols = 10;
let rows = 10;
let cellSize;

let level;
let leveln;
let levels = [];
let index;

let fps = 15;
let mouse = "pencil";
let xPos;
let yPos;

function preload(){
  levels = loadStrings("levels/levellist.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  makeCross();
}

function draw() {
  background(220);
  cellSize = height/cols / 2;
  drawCross();
  clicky();
  checkCross();
  
}

function makeCross(){
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
  xPos = Math.floor(mouseX/cellSize);
  yPos = Math.floor(mouseY/cellSize);
  // if (grid[yPos][xPos] === 0 && newGrid[yPos][xPos] === 0) {
  //   console.log("baba");
  // }
}

function mousePressed(){
}

function clicky(){
  xPos = Math.floor(mouseX/cellSize);
  yPos = Math.floor(mouseY/cellSize);
  if(mouseIsPressed && mouse === "pencil") {
    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] = 0;
    }
    
  }
}
function doLevels(name){
  index = levels.indexOf(name);
  leveln = levels[index];
  level = loadJSON("levels/" + leveln + ".json");
  grid = level;
  // for (let i = 0; )
}

function keyPressed(){
  if (key === "n"){
    doLevels("note");
  }
}