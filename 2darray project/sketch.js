
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [];
let newGrid = [];
let numArx = []
let numAry = []

let cols = 10;
let rows = 10;
let cellSize;

let level;
let levels;
let index;
let levelns = [];
let leveln;

let backg;

let butterfly;
let questionmark;
let note;

let fps = 15;
let mouse = "pencil";
let xPos;
let yPos;

let state = "game";

function preload(){
  levelns = loadStrings("levels/levellist.txt");
  backg = loadImage("images/background.png");
  note = loadJSON("levels/note.json ");
  questionmark = loadJSON("levels/questionmark.json ");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(backg, 0, 0, width, height);
  frameRate(fps);
  makeCross();
}

function draw() {
  cellSize = height/cols / 2;
  mainMenu();
  drawCross();
  clicky();
  // checkCross();
  
}

function mainMenu() {
  if (state === "main"){
    image(backg, 0, 0, width, height)
  }
}

function drawStuff(){

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
  if (state === "game") {
    for (let y = 0; y < cols; y++) {
      for (let x = 0; x < rows; x++) {
        if (grid[y][x] === 0) {
          fill("white");
        }
        else if (grid[y][x] === 1 ) {
          fill("black");
        }
        rect(x*cellSize + width/3, y*cellSize + height/4, cellSize, cellSize);
      }
    }
  }
}

// function checkCross(){
//   xPos = Math.floor(mouseX/cellSize + cols*(cellSize*1.5));
//   yPos = Math.floor(mouseY/cellSize + height/4);
//   if (newGrid[yPos][xPos] === 1) {
//     grid[yPos][xPos] = 1;
//   }
//   if (newGrid[yPos][xPos] === 0) {
//     grid[yPos][xPos] = 0;
//   }
//   if (newGrid[yPos][xPos] === 0) {
//     grid[yPos][xPos] = 2;
//   }
// }

function drawNumbers(){
  numArx = [];
  let sum = 0;
  fill("black");
  textSize(30);
  for (let y = 0; y < cols; y++) {
    numArx.push([]);
    for (let x = 0; x < rows; x++) {
      if (newGrid[y][x] === 1) {
        sum += 1;
        if (x === rows - 1){
          numArx[y].push(sum);
          sum = 0;
        }
      }
      if (newGrid[y][x] === 0) {
        if (sum !== 0) {
          numArx[y].push(sum);
        }
        sum = 0;
      }
    }
    text(numArx[y], width/3 - 30 * numArx[y].length, height/4 + (cellSize * y) + 30); //writes text
  }

  numAry = [];
  for (let x = 0; x < rows; x++) {
    numAry.push([]);
    for (let y = 0; y < cols; y++) {
      if (newGrid[y][x] === 1) {
        sum += 1;
        if (y === cols - 1){
          numAry[x].push(sum);
          sum = 0;
        }
      }
      if (newGrid[y][x] === 0) {
        if (sum !== 0) {
          numAry[x].push(sum);
        }
        sum = 0;
      }
    }
    text(numAry[x], width/3 + (cellSize * x), height/4 - 30 * numAry[x].length); //writes text
  }
}

function clicky(){
  xPos = Math.floor((mouseX-width/3) /cellSize);
  yPos = Math.floor((mouseY - height/4)/cellSize);
  if(mouseIsPressed && xPos < 10 && yPos < 10 && xPos > -1 && yPos > -1) {
    console.log("click");
    if (newGrid[yPos][xPos] === 1 && mouse === "pencil") {
      grid[yPos][xPos] = 1;
    }
    if (newGrid[yPos][xPos] === 0 && mouse === "cross") {
      grid[yPos][xPos] = 1;
    }
    
  }
}

function doLevels(name){
  index = levels.indexOf(name);
  leveln = levels[index];
  grid = level;
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      console.log(grid[y][x]);
    }
  }
  console.log(newGrid);
}


function randCross(cols, rows) {
  for (let y = 0; y < cols; y++) {
    newGrid.push(grid[y]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        newGrid[x].push(1);
      }
      else {
        newGrid[x].push(0);
      }
    }
  }
  grid = newGrid; 
}

function keyPressed() {
  if (key === "n"){
    // doLevels("note");
    newGrid = note;  
    // for (let y = 0; y < cols; y++) {
    //   newGrid.push([]);
    //   for (let x = 0; x < rows; x++) {
    //     newGrid[y].push(grid[y][x]);
    //   }
  }
  if (key === "b"){
    drawNumbers();

  }
  if (key === "r"){
    randCross();
  }
  if (key === "q"){
    newGrid = questionmark;
  }
}