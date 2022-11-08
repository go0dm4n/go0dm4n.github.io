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
  frameRate(fps);
  makeCross();
}

function draw() {
  background(220);
  cellSize = height/cols / 2;
  mainMenu();
  drawCross();
  clicky();
  checkCross();
  
}

function mainMenu() {
  if (state === "main"){
    image(backg, 0, 0, width, height)
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
  if (state === "game") {
    image(backg, 0, 0, width, height);
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
  xPos = Math.floor((mouseX-width/3) /cellSize);
  yPos = Math.floor((mouseY - height/4)/cellSize);
  if(mouseIsPressed && mouse === "pencil") {
    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] = 0;
    }
    
  }
}

// function doLevels(name){
//   index = levels.indexOf(name);
//   leveln = levels[index];
//   grid = level;
//   for (let y = 0; y < cols; y++) {
//     for (let x = 0; x < rows; x++) {
//       console.log(grid[y][x]);
//     }
//   }
//   console.log(newGrid);
// }


// function randCross(cols, rows) {
//   for (let y = 0; y < cols; y++) {
//     newGrid.push(grid[y]);
//     for (let x = 0; x < rows; x++) {
//       if (random(100) < 50) {
//         newGrid[x].push(1);
//       }
//       else {
//         newGrid[x].push(0);
//       }
//     }
//   }
//   return newGrid;
// }

function keyPressed() {
  if (key === "n"){
    // doLevels("note");
    grid = note;  
    for (let y = 0; y < cols; y++) {
      newGrid.push(grid[y]);
      for (let x = 0; x < rows; x++) {
        newGrid[y].push(grid[y][x]);
      }
    }
    console.log(newGrid);
  }
  if (key === "b"){
    grid = newGrid;

  }
}