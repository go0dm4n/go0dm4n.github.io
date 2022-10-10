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

let fname = "Canada";
let state = "main"; // game state

let textsize = 50;

let total = 195;
let continent = "world";
let score = 0;
let progress = 0;

let correct;
let c1;
let c2;
let c3;
let c4;

let buttons = [c1,c2,c3,c4];  // picks a random button to be correct

function preload() {
  bgi = loadImage("allflags.png");
  logo = loadImage("logo.png");
  fnames = loadStrings("flagnames.txt");
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
  settings = loadImage("settings.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  mainmenu();
  settingsmenu();
  drawStuff();
  randflag();
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

    makeButton(windowWidth/2 - logo.width/2, logo.height, logo.width, 50, 255, 0, textsize, "Start Game"); // start button

  }
}

function settingsmenu(){
  if (state === "settings") {
    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    image(settings, 10, 10, settings.width/6, settings.height/6); // settings symbol

    fill(128, 128, 128)
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

    makeButton(windowWidth/ 3 + 20, 900, logo.width /2, 50, 255, 0, textsize, "Earth");
  }
}

function drawStuff() {
  if (state === "switch"){

    image(bgi, 0, 0, windowWidth, windowHeight); // background image

    makeButton(20, 10, textsize * 3, 50, 255, 0, textsize, score + "/" + total) // scoreboard
    
    fill(128, 0, 0)
    rect(windowWidth/ 3, 30, windowWidth/3, windowHeight - 100); // rectangle for options and flag

    makeButton(windowWidth/2 - logo.width/4, logo.height - 140, logo.width /2, 50, 255, 0, textsize, c1); // option 1 button

    makeButton(windowWidth/2 - logo.width/4, logo.height - 70, logo.width /2, 50, 255, 0, textsize, c2); // option 2 button

    makeButton(windowWidth/2 - logo.width/4, logo.height, logo.width /2, 50, 255, 0, textsize, c3); // option 3 button

    makeButton(windowWidth/2 - logo.width/4, logo.height + 70, logo.width /2, 50, 255, 0, textsize, c4); // option 4 button

    flag = loadImage("flag-icons-main/flags/4x3/"+ fname + ".svg");
    image(flag, windowWidth/2 - flag.width, windowHeight/2 - flag.height - 200, flag.width * 2, flag.height * 2); // main flag
  }  
}

function mouseIn(left, right, top, bottom){
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
      total = 25;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 350, 400)) { 
      total = 50;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 400, 450)) { 
      total = 100;
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 450, 500)) { 
      total = 195;
    }

    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 600, 650)) { // set region mechanism
      continent = "Africa";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 650, 700)) { 
      continent = "Asia";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 700, 750)) { 
      continent = "Europe";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 750, 800)) { 
      continent = "North America";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 800, 850)) { 
      continent = "South America";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 850, 900)) { 
      continent = "Oceania";
    }
    if (mouseIn(windowWidth/ 3 + 20, windowWidth/ 3 + 20 + logo.width /2, 900, 950)) { 
      continent = "Earth";
    }
  }

  else if (state === "main") { //main menu buttons
    if (mouseIn(windowWidth/2 - logo.width/2, windowWidth/2 - logo.width/2 + logo.width, logo.height, logo.width + 50)){ // start mechanism
      state = "switch";
    }
    if (mouseIn(10, windowWidth/6 + 10, 10, windowHeight/6 + 10)) { // settings button mechanism
      state = "settings";
    }
  }
  else if (state === "game") { // game buttons
    checkOpt(c1, windowWidth/2 - logo.width/4, (windowWidth/2 - logo.width/4) + (logo.width /2), logo.height - 140, logo.height - 90); // option 1 

    checkOpt(c2, windowWidth/2 - logo.width/4, (windowWidth/2 - logo.width/4) + (logo.width /2), logo.height - 70, logo.height  - 20); // option 2

    checkOpt(c3, windowWidth/2 - logo.width/4, (windowWidth/2 - logo.width/4) + (logo.width /2), logo.height, logo.height + 50); // option 3

    checkOpt(c4, windowWidth/2 - logo.width/4, (windowWidth/2 - logo.width/4) + (logo.width /2), logo.height + 70, logo.height  + 120); // option 4
    }
  
}

function doflag() {
  console.log(fname)
}

function randflag(){ //should pick and draw random flags and options
  if (state === "switch" && progress <= total) {

    buttons = [c1, c2, c3, c4]

    c1 = fnames[Math.floor(random(0, 195))]; // rand flag for option 1
    c2 = fnames[Math.floor(random(0, 195))]; // rand flag for option 2
    c3 = fnames[Math.floor(random(0, 195))]; // rand flag for option 3
    c4 = fnames[Math.floor(random(0, 195))]; // rand flag for option 4

    fname = buttons[Math.floor(random(0, 4))]; // flag thats drawn is based off of what button was chosen to be correct

    if (fname === c1){
      correct = "c1"
    }
    if (fname === c2){
      correct = "c2"
    }
    if (fname === c3){
      correct = "c3"
    }
    if (fname === c4){
      correct = "c4"
    }
    console.log(correct)
    state = "game";
  }
}

function checkOpt(c, left, right, top, bottom){ 
  if (state === "game") {
    if (mouseIn(left, right, top, bottom)) { // button parameter check
      state = "switch";
      if (correct === c) {
        score += 1;
        progress += 1;
      }

      else if (correct !== c){
        progress += 1;
      }
    }
}
}
