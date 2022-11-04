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

let state = "main"

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

function mainMenu() {
  if (state === "main"){
    rect 
  }
}

function mouseIn(left, right, top, bottom){ //button parameter function
  return mouseX >= left && mouseX <= right && 
  mouseY >= top && mouseY <= bottom;
}

function makeButton(x, y, width, height, rectcolor, textcolor, textsize, textc){ //draws rectangle with text

  if (mouseIn(x, x + width, y, y + height)){ //darkens rectangle if mouse is in
    rectcolor -= 50;
  }

  if (!mouseIn(x, x + width, y, y + height)){ //lightens rectangle if mouse is out
    rectcolor += 50;
  }

  fill(rectcolor);
  rect(x, y, width, height); //draws rect

  fill(textcolor);
  textSize(textsize);
  text(textc, x, y + textsize - 5); //writes text

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
      rect(x*cellSize + cols*(cellSize*1.5), y*cellSize + height/4, cellSize, cellSize);
    }
  }
}

function checkCross(){
  xPos = Math.floor(mouseX/cellSize + cols*(cellSize*1.5));
  yPos = Math.floor(mouseY/cellSize + height/4);
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
  index = levels.indexOf("note");
  leveln = levels[index];
  level = loadJSON("levels/" + leveln + ".json");
  grid = level;
  for (let i = 0; i < grid.length; i++) {
    newGrid.push(grid[i]);
    for (let k = 0; k < grid[i].length; k++) {
      newGrid.push(grid[i][k]);
    }
  }
}

function keyPressed(){
  if (key === "n"){
    doLevels("note");
  }
  if (key === "q"){
    doLevels("questionmark");
  }
  if (key === "n"){
    doLevels("note");
  }
}