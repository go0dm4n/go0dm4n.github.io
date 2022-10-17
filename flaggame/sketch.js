// Interactive p5js project
// Uday Sandhu
// September 19th 2022
//
// Extra for Experts:
// - use of arrays (array.push, indexOf, array.splice)
// - use of random and picking random files
// PURPLE ON QATAR FLAG TOOOOOOOOO

let flag; //images
let bgi;
let logo;
let settings;
let fnames;
let nkey;
let rkey;

let fr = 15; // frame rate

let fname; //flag name
let state = "main"; // game state

let textsize = 50;

let total = 193; // total rounds default
let continent = "All"; // continent 
let score = 0; // score
let progress = 0; // round number

let correct;
<<<<<<< HEAD:flaggame/sketch.js
<<<<<<< HEAD:flaggame/sketch.js
let incorrect;
let c1 = ""; // option 1
let c2 = ""; // option 2
let c3 = ""; // option 3
let c4 = ""; // option 4

let endt = "";

let buttons = [c1,c2,c3,c4];  // lets us pick a random button to be correct
let cdone = []; // list of written options to avoid multiple of same option in a round
=======
=======
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js
let c1 = "";
let c2 = "";
let c3 = "";
let c4 = "";

let endt = "";

let buttons = [c1,c2,c3,c4];  // picks a random button to be correct
let cdone = []; // list of written options to prevent repetition
<<<<<<< HEAD:flaggame/sketch.js
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js
=======
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js

fname = buttons[Math.floor(random(0, 3))]; // first line of options

function preload() {
  bgi = loadImage("imgs/allflags.png");
  logo = loadImage("imgs/logo.png");
  fnames = loadStrings("contnames/" + continent + ".txt");
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
  settings = loadImage("imgs/settings.png");
  nkey = loadImage("imgs/nkey.png");
  rkey = loadImage("imgs/rkey.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
}

function draw() {
  mainmenu();
  settingsmenu();
  endsc();
  randflag();
  drawGame();
<<<<<<< HEAD:flaggame/sketch.js
<<<<<<< HEAD:flaggame/sketch.js
  if (windowWidth < 1000 | windowHeight < 800) { // if below screensize limit
    brostop()
  }
=======
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js
=======
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js
}

function makeButton(x, y, width, height, rectcolor, textcolor, textsize, textc){
  fill(rectcolor);
  rect(x, y, width, height); //draws rect

  fill(textcolor);
  textSize(textsize);
  text(textc, x, y + textsize - 5); //writes text
}

function mainmenu(){
  if (state === "main"){
    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    image(logo, windowWidth/2 - logo.width/2.6, windowHeight/2 - logo.height/3 - 150, logo.width/1.3, logo.height/1.3); // logo

    image(settings, 10, 10, settings.width/6, settings.height/6); // settings symbol

    makeButton(windowWidth/2 - logo.width/4, logo.height, logo.width/2, 50, (27,27,28), 250, textsize, "Start Game"); // start button

  }
}

function settingsmenu(){
  if (state === "settings") {
    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    image(settings, 10, 10, settings.width/6, settings.height/6); // settings symbol

    fill(128, 128, 128);
    rect(windowWidth/ 3, 30, windowWidth/3, windowHeight - 50); // background rectangle

    fill(0);
    text("SETTINGS", windowWidth/2 - 120, 100); // title of settings menu
    text("ROUNDS", windowWidth/ 3 + 20, 200); // rounds text
    text("REGION", windowWidth/ 3 + 20, 550); // regions text

    makeButton(windowWidth/ 3 + 20, 250, logo.width /2, 50, 255, 0, textsize, "10");

    makeButton(windowWidth/ 3 + 20, 300, logo.width /2, 50, 255, 0, textsize, "25");

    makeButton(windowWidth/ 3 + 20, 350, logo.width /2, 50, 255, 0, textsize, "50");

    makeButton(windowWidth/ 3 + 20, 400, logo.width /2, 50, 255, 0, textsize, "100");

    makeButton(windowWidth/ 3 + 20, 450, logo.width /2, 50, 255, 0, textsize, "All");

    makeButton(windowWidth/ 3 + 20, 600, logo.width /2, 50, 255, 0, textsize, "Africa");

    makeButton(windowWidth/ 3 + 20, 650, logo.width /2, 50, 255, 0, textsize, "Asia");

    makeButton(windowWidth/ 3 + 20, 700, logo.width /2, 50, 255, 0, textsize, "Europe");

    makeButton(windowWidth/ 3 + 20, 750, logo.width /2, 50, 255, 0, textsize, "North America");

    makeButton(windowWidth/ 3 + 20, 800, logo.width /2, 50, 255, 0, textsize, "South America");

    makeButton(windowWidth/ 3 + 20, 850, logo.width /2, 50, 255, 0, textsize, "Oceania");

    makeButton(windowWidth/ 3 + 20, 900, logo.width /2, 50, 255, 0, textsize, "Earf");
  }
}

function endsc() {
  if (state === "end") {
    image(bgi, 0, 0, windowWidth, windowHeight); // background image
    fill(27,27,28);
    rect(windowWidth/2 - windowWidth/4, flag.height/2, windowWidth/2, windowHeight - 300); //end rectangle
    if (score === total) {
      endt = "cool";
    }
    else if (score >= total * 0.9) {
      endt = "almost there!";
    }
    else if (score >= total / 2) {
      endt = "you did okay..";
    }
    else if (score <= total / 2 && score > 0) {
      endt = "you're bad at this";
    }
    else if (score === total * 0) {
      endt = "how";
    }
    console.log(total)
    fill(250);
    textSize(100);
    text(endt, windowWidth/1.7 - windowWidth/3.4, 400); //writes text
    text("score:" + score, windowWidth/1.7 - windowWidth/3.4, 500);

  }
}

function randflag(){ //should pick and draw random flags and options
  if (state === "switch" && progress <= total) {

    c1 = fnames[Math.floor(random(0, fnames.length))]; // rand flag for option 1
    cdone.push(c1);

    c2 = fnames[Math.floor(random(0, fnames.length))]; // rand flag for option 2

    while (cdone.includes(c2)) { // if option is in list
      c2 = fnames[Math.floor(random(0, fnames.length))]; // reroll
    }
    cdone.push(c2); //adds to list

    c3 = fnames[Math.floor(random(0, fnames.length))]; // rand flag for option 3

    while (cdone.includes(c3)) {
      c3 = fnames[Math.floor(random(0, fnames.length))]; // reroll
    }
    cdone.push(c3);

    c4 = fnames[Math.floor(random(0, fnames.length))]; // rand flag for option 4

    while (cdone.includes(c4)) {
      c4 = fnames[Math.floor(random(0, fnames.length))]; // reroll
    }
    
    cdone.push(c4);
    buttons = [c1, c2, c3, c4]; // picks random option

<<<<<<< HEAD:flaggame/sketch.js
<<<<<<< HEAD:flaggame/sketch.js
    fname = buttons[Math.floor(random(0, 4))]; // flag thats drawn is based off of what button was chosen to be correct

    index = fnames.indexOf(fname); // finds place in list
    fnames.splice(index, 1); // removes from list to prevent repeat

    flag = loadImage("flags/flag-icons-main/flags/4x3/" + fname + ".svg"); // redefines flag
=======
=======
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js
    fname = buttons[Math.floor(random(0, 3))]; // flag thats drawn is based off of what button was chosen to be correct
    flag = loadImage("/flags/flag-icons-main/flags/4x3/" + fname + ".svg"); // redefines flag
>>>>>>> parent of ee41034 (COMPLETED):flags/sketch.js

    cdone  =[]
    state = "game"; 
  }
}

function drawGame() {
  if (state === "game"){
    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    makeButton(20, 10, textsize * 3, 50, 255, 0, textsize, score + "/" + total); // scoreboard
    makeButton(20, 60, textsize * continent.length / 2, 50, 255, 0, textsize, continent); // tells you which region youre playing
    makeButton(20, 110, textsize * 6, 50, 255, 0, textsize, "     to restart"); // tells you which region youre playing

    image(rkey, 20, 110, 50, 50); // R key image
    
    fill(173,216,230);
    rect(windowWidth/ 3, 30, windowWidth/3, windowHeight - 100); // rectangle for options and flag


    makeButton(windowWidth/2 - textsize * c1.length / 4, logo.height - 210, textsize * c1.length / 2 + 30, 50, 255, 0, textsize, c1); // option 1 button

    makeButton(windowWidth/2 - textsize * c2.length / 4, logo.height - 140, textsize * c2.length / 2 + 30, 50, 255, 0, textsize, c2); // option 2 button

    makeButton(windowWidth/2 - textsize * c3.length / 4, logo.height - 70, textsize * c3.length / 2 + 30, 50, 255, 0, textsize, c3); // option 3 button

    makeButton(windowWidth/2 - textsize * c4.length / 4, logo.height, textsize * c4.length / 2 + 30, 50, 255, 0, textsize, c4); // option 4 button
    
    image(flag, windowWidth/2 - flag.width, windowHeight/2 - flag.height - 200, flag.width * 2, flag.height * 2); // main flag

  }

  if (state === "wait"){ // after option is clicked
    makeButton(windowWidth/ 3 + 10, logo.height + 50, 100, 50, 255, 0, textsize, "    ->"); // next button box
    image(nkey, windowWidth/ 3 + 10, logo.height + 50, 50, 50); // N key image

    if (fname === c1) { // if this option is correct it will color it green
      makeButton(windowWidth/2 - textsize * c1.length / 4, logo.height - 210, textsize * c1.length / 2 + 30, 50, "green", 0, textsize, c1); // option 1 button
    }
    if (fname === c2) {
      makeButton(windowWidth/2 - textsize * c2.length / 4, logo.height - 140, textsize * c2.length / 2 + 30, 50, "green", 0, textsize, c2); // option 2 button
    }
    if (fname === c3) {
      makeButton(windowWidth/2 - textsize * c3.length / 4, logo.height - 70, textsize * c3.length / 2 + 30, 50, "green", 0, textsize, c3); // option 3 button
    }
    if (fname === c4) {
      makeButton(windowWidth/2 - textsize * c4.length / 4, logo.height, textsize * c4.length / 2 + 30, 50, "green", 0, textsize, c4); // option 4 button
    }

  }  
  if (state === "game" && progress === total) { // ends the game if round limit is reached
    state = "end";
  }
}

function mouseIn(left, right, top, bottom){ //button parameter function
  return mouseX >= left && mouseX <= right && 
  mouseY >= top && mouseY <= bottom;
}

function mousePressed(){
  if (state === "settings") { // settings buttons

    if (mouseIn(10, windowWidth/6 + 10, 10, windowHeight/6 + 10)) { // exit settings mechanism
      state = "main";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 250, 300)) { // set total flag rounds mechanism 
      total = 10;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 300, 350)) { 
      if (continent !== "North America" && continent !== "South America" && continent !== "Oceania") { // these regions dont have enough countries
        total = 25;
      }
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 350, 400)) { 
      if (continent === "All" | continent === "Asia" | continent === "Africa") {
        total = 50;
      }
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 400, 450)) { 
      continent = "All";
      total = 100;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 450, 500)) { 
      total = 195;
    }

    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 600, 650)) { // set region mechanism
      continent = "Africa";
      total = 55;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 650, 700)) { 
      continent = "Asia";
      total = 51;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 700, 750)) { 
      continent = "Europe";
      total = 43;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 750, 800)) { 
      continent = "North America";
      total = 23;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 800, 850)) { 
      continent = "South America";
      total = 13;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 850, 900)) { 
      continent = "Oceania";
      total = 17;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 900, 950)) { 
      continent = "All";
      total = 193;
    }
    fnames = loadStrings("contnames/" + continent + ".txt"); // changes which text file it grabs names from 
  }

  else if (state === "game") { // game buttons
    checkOpt(c1, windowWidth/2 - textsize * c1.length / 4, (windowWidth/2 - textsize * c1.length / 4) + (textsize * c1.length / 2 + 30), logo.height - 210, logo.height - 160); // option 1 

    checkOpt(c2, windowWidth/2 - textsize * c2.length / 4, (windowWidth/2 - textsize * c2.length / 4) + (textsize * c2.length / 2 + 30), logo.height - 140, logo.height  - 90); // option 2

    checkOpt(c3, windowWidth/2 - textsize * c3.length / 4, (windowWidth/2 - textsize * c3.length / 4) + (textsize * c3.length / 2 + 30), logo.height - 70, logo.height - 20); // option 3

    checkOpt(c4, windowWidth/2 - textsize * c4.length / 4, (windowWidth/2 - textsize * c4.length / 4) + (textsize * c4.length / 2 + 30), logo.height, logo.height  + 50); // option 4
  }

  else if (state === "main") { //main menu buttons
    if (mouseIn(windowWidth/2 - logo.width/2, windowWidth/2 - logo.width/2 + logo.width, logo.height, logo.width + 50)){ // start mechanism
      state = "switch";
    }
    if (mouseIn(10, windowWidth/6 + 10, 10, windowHeight/6 + 10)) { // settings button mechanism
      state = "settings";
    }
  }

}

function keyPressed() {
  if (keyCode === 82) { // resets game when R is pressed
    preload();
    state = "main";
    progress = 0;
    score = 0;
    continent = "All";
    total = 193;
    c1 = "";
    c2 = "";
    c3 = "";
    c4 = "";
    buttons = [c1,c2,c3,c4];  
  }

  if (state === "wait") { // moves to next flag when N is pressed
    if (keyCode === 78) {
      state = "switch";
    }
  }
}

function checkOpt(c, left, right, top, bottom){ 
  if (state === "game") {
    if (mouseIn(left, right, top, bottom)) { // button parameter check
      if (c === fname) { // checks if correct is equal to button being pressed
        score += 1;
        progress += 1;
      }

      else if (c !== fname){ // just moves along if incorrect
        progress += 1;
      }
      state = "wait"; 
    }
  }
}
