
// 2D Arrays Project
// Uday Sandhu
// November 14th 2022
//

let grid = [];
let newGrid = [];
let numArx = [];
let numAry = [];

let cols = 10; // numbers
let rows = 10;
let cellSize;
let textsize = 30;

let levelns = []; //list of level names
let leveln; // level name
let level;
 
let mistakes = 0; //more numbers
let progress = 0;
let correct = 0;
let correctn = 0;

let backg; //images
let butterfly;
let startb;
let pencil;
let cross;
let logo;

let fps = 10;
let mouse = "pencil";
let xPos;
let yPos;

let state = "main"; //game state

function preload(){
  levelns = loadStrings("levels/levellist.txt");
  backg = loadImage("images/background.png");
  startb = loadImage("images/startbp.png");
  pencil = loadImage("images/pencil.png");
  cross = loadImage("images/cross.png");
  logo = loadImage("images/logo.png");
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
  checkCross();
  drawCross();
  drawStuff();
}

function mainMenu() { // draws main menu
  if (state === "main"){
    image(startb, windowWidth/2 - startb.width/4, windowHeight /1.5, startb.width/2, startb.height/2);
    image(logo, windowWidth/2 - logo.width/2, windowHeight/2 - logo.height/2 - 100, logo.width, logo.height);
  }
}

function makeCross(){ // makes empty grid for display
  grid = [];
  for (let y = 0; y < cols; y++) {
    grid.push([]);
    for (let x = 0; x < rows; x++) {
      grid[y].push(0);
    }
  }
}

function checkCross(){
  xPos = Math.floor((mouseX - width/3) /cellSize); //xPosition
  yPos = Math.floor((mouseY - height/4)/cellSize); //yPosition
  if (state === "game") {
    drawNumbers(); // draw corresponding numbers
    if(mouseIsPressed && xPos < 10 && yPos < 10 && xPos > -1 && yPos > -1) { //added parameters

      if (newGrid[yPos][xPos] === 1 && grid[yPos][xPos] === 0 && mouse === "pencil") { // if space that's supposed to be black is clicked with pencil color it black
        grid[yPos][xPos] = 1;
        correct ++;
      }

      else if (newGrid[yPos][xPos] === 0 && grid[yPos][xPos] === 0 && mouse === "pencil") { // if space that's supposed to be white is clicked with pencil color it red and add mistake
        grid[yPos][xPos] = 2;
        mistakes += 1;
      }

      else if (newGrid[yPos][xPos] === 0 && mouse === "cross") { // if space that's supposed to be white is clicked with cross make an X
        grid[yPos][xPos] = 3;
        newGrid[yPos][xPos] = 3;
      }

      else if (newGrid[yPos][xPos] === 1 && grid[yPos][xPos] === 0 && mouse === "cross") { // if space that's supposed to be black is clicked with cross color it red and add mistake
        grid[yPos][xPos] = 2;
        mistakes += 1;
      }
    }
    if (correct === correctn) { // if your grid is the same as the answer go to next level
      if (progress === 4) {
        win();
      }
      progress ++;
      makeCross();
      doLevels();
      mistakes = 0;
      correct = 0;
    }
    if (mistakes === 3) { //if you make 3 mistakes retry
      state = "end";
      gameOver();
    }
  }
}

function doLevels(){
  leveln = levelns[progress]; // progress determines which level in the list it chooses
  level = loadJSON("levels/" + leveln + ".json"); // load grid
  newGrid = level; // make answer = grid
}

function drawCross(){
  if (state === "game") {
    for (let y = 0; y < cols; y++) {
      for (let x = 0; x < rows; x++) {
        if (grid[y][x] === 0) { // white space
          fill("white");
          strokeWeight(1);
          rect(x*cellSize + width/3, y*cellSize + height/4, cellSize, cellSize);
        }
        else if (grid[y][x] === 1 ) { // black space
          fill("black");
          strokeWeight(1);
          rect(x*cellSize + width/3, y*cellSize + height/4, cellSize, cellSize);
        }
        else if (grid[y][x] === 2 ) { // red space
          fill("red");
          rect(x*cellSize + width/3, y*cellSize + height/4, cellSize, cellSize);
        }
        else if (grid[y][x] === 3 ) { // X space
          fill("white");
          strokeWeight(1);
          rect(x*cellSize + width/3, y*cellSize + height/4, cellSize, cellSize);
          line(x*cellSize + width/3, y*cellSize + height/4, x*cellSize + width/3 + cellSize, y*cellSize + height/4 + cellSize);
          line(x*cellSize + width/3, y*cellSize + height/4 + cellSize, x*cellSize + width/3 + cellSize, y*cellSize + height/4);
        }
      }
    }

    strokeWeight(3); //bolded edges around and through the middle of grid
    noFill();
    rect(width/3, height/4, cellSize * cols, cellSize * rows);
    line(width/3 + cols * cellSize/2, height/4, width/3 + cols * cellSize/2, height/4 + cellSize * rows);
    line(width/3, height/4 + cols * cellSize/2, width/3 + cellSize * cols, height/4 + cols * cellSize/2);

  }
}

function drawStuff(){
  if (state === "game") {
    makeButton(width/3, height/4 + cellSize * rows, textsize * 6, textsize, 255, 0, textsize, "Mistakes: " + mistakes); // mistake counter
    makeButton(width/3 + textsize * 3, height/15, textsize * 11, textsize * 3, 255, 0, textsize * 3, "Level " + (progress + 1)); // shows level

    if (mouse === "pencil") { // if selected change color
      fill(65, 89, 221);
    }

    fill(60, 149, 221);
    rect(width/3 + cellSize * cols - 220, height/4 + cellSize * rows + 10, 100, 100); //pencil rectangle
    image(pencil, width/3 + cellSize * cols - 210, height/4 + cellSize * rows + 10, 100, 100); //pencil image

    if (mouse === "cross") {
      fill(65, 89, 221);
    }

    fill(133, 38, 36);
    rect(width/3 + cellSize * cols - 100, height/4 + cellSize * rows + 10, 100, 100); // cross rectangle
    image(cross, width/3 + cellSize * cols - 100, height/4 + cellSize * rows + 10, 100, 100); // cross image
  }

}

function drawNumbers(){
  if (state === "game") {

    correctn = 0;
    image(backg, 0, 0, width, height); // background

    textSize(20);

    numArx = []; //list of numbers vertically

    let sum = 0;
    fill("black");
    for (let y = 0; y < cols; y++) {
      numArx.push([]);
      for (let x = 0; x < rows; x++) {
        if (newGrid[y][x] === 1) {
          sum += 1; // adds up consecutive black spaces in the answer
          correctn ++;
          if (x === rows - 1){
            numArx[y].push(sum); // if at end of row push current sum
            sum = 0; // reset sum
          }
        }
        if (newGrid[y][x] === 0) {
          if (sum !== 0) {
            numArx[y].push(sum); // if white space is hit add the sum to element in array and start counting again
          }
          sum = 0; //reset sum
        }
      }
      text(numArx[y], width/3 - 30 * numArx[y].length, height/4 + cellSize * y + 30); //writes numbers on side
    }

    numAry = []; //list of numbers horizontally
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
        text(numAry[x], width/3 + cellSize * x, height/4 - 30); //writes text SORRY I DIDNT GET TO MAKE IT CLEARER
      }
    }
  }
}

function gameOver(){
  state = "lose"; //state change

  fill("white");
  rect(width/3, height/3, cellSize * cols, cellSize * rows/2); //game over rect

  fill("red");
  text("You Suck!", width/3 + 10, height/3 + textsize*3); // mean text

  makeButton(width/3 + 10, height/3 + textsize*4, cellSize * cols /2, textsize * 2, "white", "black", textsize * 2, "Retry?" ); // retry button
}

function win() {
  fill("white");
  rect(width/3, height/3, cellSize * cols, cellSize * rows/2); //game over but in a good way rect

  fill("yellow");
  text("you dont suck", width/3 + 10, height/3 + textsize*3); // nice text
}

function keyPressed() {
  if (key === "q"){
    progress ++;
    doLevels();
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
  if (state === "main" && mouseIn(windowWidth/2 - startb.width/4, windowWidth/2 - startb.width/4 + startb.width/2, windowHeight /1.5, windowHeight /1.5 + startb.height/2)) { //start button
    state = "game";
    image(backg, 0, 0, width, height);
    doLevels();
  }
  else if (state === "game" && mouseIn(width/3 + cellSize * cols - 220, width/3 + cellSize * cols - 120,  height/4 + cellSize * rows + 10,  height/4 + cellSize * rows + 110)) { //pencil button
    mouse = "pencil";
    image(backg, 0, 0, width, height);
  }
  else if (state === "game" && mouseIn(width/3 + cellSize * cols - 100, width/3 + cellSize * cols, height/4 + cellSize * rows + 10, height/4 + cellSize * rows + 110)) { // cross button
    mouse = "cross";
    image(backg, 0, 0, width, height);
  }
  else if (state === "lose" && mouseIn(width/3 + 10, width/3 + 10 + cellSize * cols /2, height/3 + textsize*4, height/3 + textsize*4 + textsize * 2 )) { // retry button
    makeCross();
    mistakes = 0;
    state = "game";
  }
}