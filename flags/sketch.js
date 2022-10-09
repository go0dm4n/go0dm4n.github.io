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
let fnames;

let fname = "Canada";
let state = "main"; // game state
let textsize = 50;
let total = 209;
let score = 0;
let progress = 0;

let correct;
let c1;
let c2;
let c3;
let c4;
let options = [c1,c2,c3,c4]; // picks a random button to be correct
let buttons = [c1,c2,c3,c4];

function preload() {
  bgi = loadImage("allflags.png");
  logo = loadImage("logo.png");
  fnames = loadStrings("flagnames.txt");
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgi, 0, 0, windowWidth, windowHeight); // background image

}

function draw() {
  mainmenu();
  drawStuff();
  randflag();
}

function mainmenu(){
  if (state === "main"){
    image(logo, windowWidth/2 - logo.width/2.6, windowHeight/2 - logo.height/3 - 150, logo.width/1.3, logo.height/1.3); // logo

    fill(255);
    rect(windowWidth/2 - logo.width/2, logo.height, logo.width, 50); // start button rectangle

    fill(0);
    textSize(textsize);
    text("Start Game", windowWidth/2 - logo.width/2, logo.height + textsize); // start text
  }
}

function drawStuff() {
  if (state === "switch"){

    image(bgi, 0, 0, windowWidth, windowHeight); // background image
    fill(255);
    rect(20, 10, textsize * 3, 50); // background rectangle for score

    fill(0);
    textSize(textsize); // score text
    text(score, 20, 0 + textsize); 

    textSize(textsize);
    text("/" + total, 60 , 0 + textsize); // denominator
    
    fill(128, 0, 0)
    rect(windowWidth/ 3, 30, windowWidth/3, windowHeight - 100);

    fill(255);
    rect(windowWidth/2 - logo.width/4, logo.height + 70, logo.width /2, 50); // option 4 rectangle
   
    fill(0);
    textSize(textsize);
    text(c4, windowWidth/2 - logo.width/4, logo.height + 70 + textsize - 5); // option 4 text

    fill(255);
    rect(windowWidth/2 - logo.width/4, logo.height, logo.width /2, 50); // option 3 rectangle
    
    fill(0);
    textSize(textsize);
    text(c2, windowWidth/2 - logo.width/4, logo.height + textsize - 5); // option 3 text
 
    fill(255);
    rect(windowWidth/2 - logo.width/4, logo.height - 70, logo.width /2, 50); // option 2 rectangle
   
    fill(0);
    textSize(textsize);
    text(c3, windowWidth/2 - logo.width/4, logo.height - 70 + textsize - 5); // option 2 text

    fill(255);
    rect(windowWidth/2 - logo.width/4, logo.height - 140, logo.width /2, 50); // option 1 rectangle
    
    fill(0);
    textSize(textsize);
    text(c1, windowWidth/2 - logo.width/4, logo.height - 140 + textsize - 5); // option 1 text
  }  
}

function mouseIn(left, right, top, bottom){
  return mouseX >= left && mouseX <= right && 
  mouseY >= top && mouseY <= bottom;
}

function mousePressed(){
  if (state === "main" && mouseIn(windowWidth/2 - logo.width/2, windowWidth/2 - logo.width/2 + logo.width, logo.height, logo.width + 50)){ // start button
    state = "switch";
  }

  if (state === "game" && mouseIn(windowWidth/2 - logo.width/2, windowWidth/2 - logo.width/2 + logo.width, logo.height, logo.width + 50)) { // option 1
    fill(255);
    state = "switch"
    doflag()
    if (correct === c1) {
      score += 1;
      progress += 1;
    }
    else if (correct !== c1){
      progress += 1;
    }
  }
}

function doflag() {
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
  console.log("ep")
  image(flag, windowWidth/2 - flag.width, windowHeight/2 - flag.height - 200, flag.width * 2, flag.height * 2); // main flag
}

function randflag(){
  if (state === "switch") {
    buttons = [c1, c2, c3, c4]
    correct = buttons[Math.floor(random(0, 4))];
    c1 = fnames[Math.floor(random(0, 194))]; // rand flag for option 1
    c2 = fnames[Math.floor(random(0, 194))]; // rand flag for option 2
    c3 = fnames[Math.floor(random(0, 194))]; // rand flag for option 3
    c4 = fnames[Math.floor(random(0, 194))]; // rand flag for option 4
    fname = correct; // flag thats drawn is based off of what button was chosen to be correct
    console.log(buttons);
    console.log(fname);
    state = "game";
  }
}


