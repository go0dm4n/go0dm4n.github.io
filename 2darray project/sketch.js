
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
let textsize = 30;

let index;
let levelns = [];
let leveln;
let level;
 
let mistakes = 0;
let progress = 0;

let backg;

let butterfly;
let questionmark;
let note;

let fps = 10;
let mouse = "pencil";
let xPos;
let yPos;

let state = "main";

function preload(){
  levelns = loadStrings("levels/levellist.txt");
  backg = loadImage("images/background.png");
  startb = loadImage("images/startbp.png");
  pencil = loadImage("images/pencil.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(backg, 0, 0, width, height);
  frameRate(fps);
  makeCross();
}

function draw() {
  cellSize = (height/cols) / 2;
  checkCross()
  drawCross();
  mainMenu();
  drawStuff()
}

function mainMenu() {
  if (state === "main"){
    image(startb, windowWidth/2 - startb.width/4, windowHeight /1.5, startb.width/2, startb.height/2);
  }
}

function drawStuff(){
  if (state === "game") {
    makeButton(width/3, height/4 + cellSize * rows, textsize * 6, textsize, 255, 0, textsize, "Mistakes: " + mistakes);
    makeButton(width/3 + textsize * 3, height/11, textsize * 11, textsize * 3, 255, 0, textsize * 3, "Level " + (progress + 1));

    if (mouse === "pencil") {
      fill(65, 89, 221)
    }
    fill(60, 149, 221)
    rect(width/3 + cellSize * cols - 220, height/4 + cellSize * rows + 10, 100, 100)
    image(pencil, width/3 + cellSize * cols - 210, height/4 + cellSize * rows + 10, 100, 100)

    if (mouse === "cross") {
      fill(65, 89, 221)
    }
    fill(133, 38, 36)
    rect(width/3 + cellSize * cols - 100, height/4 + cellSize * rows + 10, 100, 100)
  }
  else if (state === "change") {
    makeCross()
    doLevels()
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
  text(textc, x + textsize/4, y + textsize - 5); //writes text

}

function mousePressed() {
  if (state === "main" && mouseIn(windowWidth/2 - startb.width/4, windowWidth/2 - startb.width/4 + startb.width/2, windowHeight /1.5, windowHeight /1.5 + startb.height/2)) {
    state = "game";
    image(backg, 0, 0, width, height);
    doLevels()
  }
  if (state === "game" && mouseIn(width/3 + cellSize * cols - 220, width/3 + cellSize * cols - 120,  height/4 + cellSize * rows + 10,  height/4 + cellSize * rows + 110)) {
    mouse = "pencil"
    image(backg, 0, 0, width, height);
  }
  else if (state === "game" && mouseIn(width/3 + cellSize * cols - 100, width/3 + cellSize * cols, height/4 + cellSize * rows + 10, height/4 + cellSize * rows + 110)) {
    mouse = "cross"
    image(backg, 0, 0, width, height);
  }
}

function makeCross(){
  for (let y = 0; y < cols; y++) {
    grid.push([]);
    for (let x = 0; x < rows; x++) {
      grid[y].push(0);
    }
  }
}

function drawCross(){
  if (state === "game") {
    for (let y = 0; y < cols; y++) {
      for (let x = 0; x < rows; x++) {
        if (grid[y][x] === 0) {
          fill("white");
          strokeWeight(1)
        }
        if (grid[y][x] === 1 ) {
          fill("black");
          strokeWeight(1)
        }
        if (grid[y][x] === 2 ) {
          fill("red")
        }
        if (grid[y][x] === 3 ) {
          line(x*cellSize + width/3, y*cellSize + height/4, x*cellSize + width/3 + cellSize, y*cellSize + height/4 + cellSize)
          line(x*cellSize + width/3, y*cellSize + height/4 + cellSize, x*cellSize + width/3 + cellSize, y*cellSize + height/4)
        }
        rect(x*cellSize + width/3, y*cellSize + height/4, cellSize, cellSize);
      }
    }

    strokeWeight(3)
    noFill()
    rect(width/3, height/4, cellSize * cols, cellSize * rows)
    line(width/3 + cols * cellSize/2, height/4, width/3 + cols * cellSize/2, height/4 + cellSize * rows)
    line(width/3, height/4 + cols * cellSize/2, width/3 + cellSize * cols, height/4 + cols * cellSize/2)

  }
}

function drawNumbers(){
  numArx = [];
  let sum = 0;
  fill("black");
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
    text(numAry[x][y], width/3 + (cellSize * x), height/4 - 30 * y); //writes text
  }
}

function checkCross(){
  xPos = Math.floor((mouseX - width/3) /cellSize);
  yPos = Math.floor((mouseY - height/4)/cellSize);
  if (state === "game") {
    if(mouseIsPressed && xPos < 10 && yPos < 10 && xPos > -1 && yPos > -1) {

      if (newGrid[yPos][xPos] === 1 && mouse === "pencil") {
        grid[yPos][xPos] = 1;
      }

      else if (newGrid[yPos][xPos] === 0 && mouse === "pencil") {
        grid[yPos][xPos] = 2;
        mistakes += 1
      }

      else if (newGrid[yPos][xPos] === 0 && mouse === "cross") {
        grid[yPos][xPos] = 3;
      }

      else if (newGrid[yPos][xPos] === 1 && mouse === "cross") {
        grid[yPos][xPos] = 2;
        mistakes += 1
      }
      
    }
    if (grid === newGrid) {
      progress += 1
      state = "change"
    }
    if (mistakes === 3) {
      gameOver()
    }
  }
}

function doLevels(){
  leveln = levelns[progress];
  level = loadJSON("levels/" + leveln + ".json");
  newGrid = level;
  drawNumbers()
}

function gameOver(){

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
}

function keyPressed() {
  if (key === "r"){
    console.log(newGrid)
    console.log(grid)
  }
  if (key === "q"){
    progress = 1
    doLevels()
  }
}