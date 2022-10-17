// Interactive p5js project
// Uday Sandhu
// September 19th 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// PURPLE ON QATAR FLAG TOOOOOOOOO

let flag;
let bgi;
let logo;
let settings;
let fnames;
let nkey;
let rkey;
let startb;

let num = 0;

let fr = 15; // frame rate

let fname;
let state = "main"; // game state

let textsize = 50;

let index; // place in array

let total = 193; // total rounds default
let continent = "All";
let score = 0; // score
let progress = 0;

let correct;
let incorrect;
let c1 = "";
let c2 = "";
let c3 = "";
let c4 = "";

let endt = "";

let buttons = [c1,c2,c3,c4];  // picks a random button to be correct
let cdone = []; // list of written options to multiple of same option in a round

fname = buttons[Math.floor(random(0, 4))]; // first line of options

function preload() {
  bgi = loadImage("imgs/allflags.png");
  logo = loadImage("imgs/logo.png");
  fnames = loadStrings("contnames/" + continent + ".txt");
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
  settings = loadImage("imgs/settings.png");
  nkey = loadImage("imgs/nkey.png");
  rkey = loadImage("imgs/rkey.png");
  startb = loadImage("imgs/startb.png");
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
  if (windowWidth < 800 | windowHeight < 600) {
    brostop();
  }
}

function makeButton(x, y, width, height, rectcolor, textcolor, textsize, textc){ //draws rectangle with text

  if (state !== "wait") {
    if (mouseIn(x, x + width, y, y + height)){ //darkens rectangle if mouse is in
      rectcolor -= 50;
    }

    if (!mouseIn(x, x + width, y, y + height)){ //lightens rectangle if mouse is out
      rectcolor += 50;
    }
  }

  fill(rectcolor);
  rect(x, y, width, height); //draws rect

  fill(textcolor);
  textSize(textsize);
  text(textc, x, y + textsize - 5); //writes text

}

function mouseIn(left, right, top, bottom){ //button parameter function
  return mouseX >= left && mouseX <= right && 
  mouseY >= top && mouseY <= bottom;
}

function brostop(){ //if screen is too small it displays message
  fill("red");
  rect(0,0, windowWidth,windowHeight);

  fill("white");
  textSize(100);
  text("screen too small :(", 0, windowHeight/2);
}

function mainmenu(){ //draws main menu
  if (state === "main"){
    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    fill(27,27,28);
    rect(windowWidth/2 - logo.width/2.6 - 5, windowHeight/2 - logo.height/3 - 155, logo.width/1.3 + 10, logo.height/1.3 + 10); // background rectangle

    image(logo, windowWidth/2 - logo.width/2.6, windowHeight/2 - logo.height/3 - 150, logo.width/1.3, logo.height/1.3); // logo

    image(settings, 10, 10, settings.width/4, settings.height/4); // settings symbol

    image(startb, window.width/2 - startb.width/6, logo.height, startb.width/3, startb.height/3); // start button

  }
}

function settingsmenu(){ //draws settings menu
  if (state === "settings") {
    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    image(settings, 10, 10, settings.width/4, settings.height/4); // settings symbol

    fill(128, 128, 128);
    rect(windowWidth/ 3, 30, windowWidth/3, windowHeight - 50); // background rectangle

    fill(0);
    text("SETTINGS", windowWidth/2 - 120, 100); // title of settings menu
    text("ROUNDS", windowWidth/ 3 + 20, 200); // rounds text
    text("REGION", windowWidth/ 3 + 20, 550); // regions text

    makeButton(windowWidth/ 3 + 20, 250, logo.width /2, 50, 255, 0, textsize, "10"); // rounds buttons

    makeButton(windowWidth/ 3 + 20, 300, logo.width /2, 50, 255, 0, textsize, "25");

    makeButton(windowWidth/ 3 + 20, 350, logo.width /2, 50, 255, 0, textsize, "50");

    makeButton(windowWidth/ 3 + 20, 400, logo.width /2, 50, 255, 0, textsize, "100");

    makeButton(windowWidth/ 3 + 20, 450, logo.width /2, 50, 255, 0, textsize, "All");

    makeButton(windowWidth/ 3 + 20, 600, logo.width /2, 50, 255, 0, textsize, "Africa"); // continent buttons

    makeButton(windowWidth/ 3 + 20, 650, logo.width /2, 50, 255, 0, textsize, "Asia");

    makeButton(windowWidth/ 3 + 20, 700, logo.width /2, 50, 255, 0, textsize, "Europe");

    makeButton(windowWidth/ 3 + 20, 750, logo.width /2, 50, 255, 0, textsize, "North America");

    makeButton(windowWidth/ 3 + 20, 800, logo.width /2, 50, 255, 0, textsize, "South America");

    makeButton(windowWidth/ 3 + 20, 850, logo.width /2, 50, 255, 0, textsize, "Oceania");

    makeButton(windowWidth/ 3 + 20, 900, logo.width /2, 50, 255, 0, textsize, "Earth");
  }
}

function endsc() { //ending screen
  if (state === "end") {
    image(bgi, 0, 0, windowWidth, windowHeight); // background image
    fill(27,27,28);
    rect(windowWidth/2 - windowWidth/4, flag.height/2, windowWidth/2, windowHeight - 300); // end rectangle

    if (score === total) { // changes cool message depending on score
      endt = "cool";
    }
    if (score >= total * 0.9) {
      endt = "almost there!";
    }
    else if (score >= total / 2) {
      endt = "you did okay..";
    }
    else if (score <= total / 2 && score > 0) {
      endt = "you're kinda bad";
    }
    else if (score === total * 0) {
      endt = "how";
    }

    fill(250);
    textSize(100);
    text(endt, windowWidth/1.7 - windowWidth/3.4, 400); // writes cool message
    text("score:" + score, windowWidth/1.7 - windowWidth/3.4, 500);

  }
}

function randflag(){ //should pick and draw random flags and options
  if (state === "switch" && progress <= total) {

    c1 = fnames[Math.floor(random(0, fnames.length))]; // rand flag for option 1
    cdone.push(c1);

    c2 = fnames[Math.floor(random(0, fnames.length))]; // option 2

    while (cdone.includes(c2)) { // whiile option is in list
      c2 = fnames[Math.floor(random(0, fnames.length))]; // reroll
    }
    cdone.push(c2); //adds to list

    c3 = fnames[Math.floor(random(0, fnames.length))]; // option 3

    while (cdone.includes(c3)) {
      c3 = fnames[Math.floor(random(0, fnames.length))]; 
    }
    cdone.push(c3);

    c4 = fnames[Math.floor(random(0, fnames.length))]; //  option 4

    while (cdone.includes(c4)) {
      c4 = fnames[Math.floor(random(0, fnames.length))];
    }
    cdone.push(c4);

    buttons = [c1, c2, c3, c4]; // picks random option

    fname = buttons[Math.floor(random(0, 4))]; // flag thats drawn is based off of what button was chosen to be correct

    index = fnames.indexOf(fname); // finds place in list
    fnames.splice(index, 1); // removes from list to prevent repeat

    flag = loadImage("flag-icons-main/flags/4x3/" + fname + ".svg"); // redefines flag

    cdone = [];
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
    
    fill(27,27,28);
    rect(windowWidth/ 3, 30, windowWidth/3, windowHeight - 100); // rectangle for options and flag


    makeButton(windowWidth/2 - textsize * c1.length / 4, flag.height * 3, textsize * c1.length / 2 + 30, 50, 255, 0, textsize, c1); // option 1 button

    makeButton(windowWidth/2 - textsize * c2.length / 4, flag.height * 3 + 70, textsize * c2.length / 2 + 30, 50, 255, 0, textsize, c2); // option 2 button

    makeButton(windowWidth/2 - textsize * c3.length / 4, flag.height * 3 + 140, textsize * c3.length / 2 + 30, 50, 255, 0, textsize, c3); // option 3 button

    makeButton(windowWidth/2 - textsize * c4.length / 4, flag.height * 3 + 210, textsize * c4.length / 2 + 30, 50, 255, 0, textsize, c4); // option 4 button
    
    fill(255);
    rect(windowWidth/2 - flag.width - 5, windowHeight/2 - flag.height - 235, flag.width * 2 + 10, flag.height * 2 + 10); //flag background
    image(flag, windowWidth/2 - flag.width, windowHeight/2 - flag.height - 230, flag.width * 2, flag.height * 2); // main flag

  }

  if (state === "wait"){ // after option is clicked
    makeButton(windowWidth/ 3 + 10, flag.height * 3 + 260, 100, 50, 255, 0, textsize, "    ->"); // next button box
    image(nkey, windowWidth/ 3 + 10, flag.height * 3 + 260, 50, 50); // N key image

    if (fname === c1) { // if this option is correct it will color it green
      makeButton(windowWidth/2 - textsize * c1.length / 4, flag.height * 3, textsize * c1.length / 2 + 30, 50, "green", 0, textsize, c1); // option 1 button
    }
    if (fname === c2) {
      makeButton(windowWidth/2 - textsize * c2.length / 4, flag.height * 3 + 70, textsize * c2.length / 2 + 30, 50, "green", 0, textsize, c2); // option 2 button
    }
    if (fname === c3) {
      makeButton(windowWidth/2 - textsize * c3.length / 4, flag.height * 3 + 140, textsize * c3.length / 2 + 30, 50, "green", 0, textsize, c3); // option 3 button
    }
    if (fname === c4) {
      makeButton(windowWidth/2 - textsize * c4.length / 4, flag.height * 3 + 210, textsize * c4.length / 2 + 30, 50, "green", 0, textsize, c4); // option 4 button
    }

    if (incorrect === c1) { // if this option was picked incorrectly it will color it red
      makeButton(windowWidth/2 - textsize * c1.length / 4, flag.height * 3, textsize * c1.length / 2 + 30, 50, "red", 0, textsize, c1); // option 1 button
    }

    if (incorrect === c2) { 
      makeButton(windowWidth/2 - textsize * c2.length / 4, flag.height * 3 + 70, textsize * c2.length / 2 + 30, 50, "red", 0, textsize, c2); // option 1 button
    }

    if (incorrect === c3) { 
      makeButton(windowWidth/2 - textsize * c3.length / 4, flag.height * 3 + 140, textsize * c3.length / 2 + 30, 50, "red", 0, textsize, c3); // option 1 button
    }

    if (incorrect === c4) { 
      makeButton(windowWidth/2 - textsize * c4.length / 4, flag.height * 3 + 210, textsize * c4.length / 2 + 30, 50, "red", 0, textsize, c4); // option 1 button
    }

  }  

  if (state === "game" && progress === total) { // ends the game if round limit is reached
    state = "end";
  }
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
      if (continent !== "North America" && continent !== "South America" && continent !== "Oceania") { // these regions dont have enough countries for 25 rounds
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
      total = 50;
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
      total = 16;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 900, 950)) { 
      continent = "All";
      total = 193;
    }
    fnames = loadStrings("contnames/" + continent + ".txt"); // changes which text file it grabs names from based on continent
  }

  else if (state === "game") { // game buttons
    checkOpt(c1, windowWidth/2 - textsize * c1.length / 4, (windowWidth/2 - textsize * c1.length / 4) + (textsize * c1.length / 2 + 30), flag.height * 3, flag.height * 3 + 50); // checks option 1 when clicked

    checkOpt(c2, windowWidth/2 - textsize * c2.length / 4, (windowWidth/2 - textsize * c2.length / 4) + (textsize * c2.length / 2 + 30), flag.height * 3 + 70, flag.height * 3  + 120); // option 2

    checkOpt(c3, windowWidth/2 - textsize * c3.length / 4, (windowWidth/2 - textsize * c3.length / 4) + (textsize * c3.length / 2 + 30), flag.height * 3 + 140, flag.height * 3 + 190); // option 3

    checkOpt(c4, windowWidth/2 - textsize * c4.length / 4, (windowWidth/2 - textsize * c4.length / 4) + (textsize * c4.length / 2 + 30), flag.height * 3 + 210, flag.height * 3 + 260); // option 4
  }

  else if (state === "main") { //main menu buttons
    if (mouseIn(window.width/2 - startb.width/6, (window.width/2 - startb.width/6) + startb.width/3, logo.height, logo.height + startb.height/3)){ // start mechanism
      state = "switch";
    }

    if (mouseIn(10, settings.width/4 + 10, 10, settings.height/4 + 10)) { // settings button mechanism
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
        incorrect = c;
      }
      state = "wait"; 
    }
  }
}
