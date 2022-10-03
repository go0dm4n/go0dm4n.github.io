// Interactive p5js project
// Uday Sandhu
// September 19th 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let flag;
let bgi;
let logo;

let fname = "Canada";
let textsize = 50;
let total = 209
let gameon = false; // game state
let score = "0";
let progress = 0;
let c1;
let c2;
let c3;
let c4;

function preload() {
  bgi = loadImage("allflags.png")
  logo = loadImage("logo.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  doflag();

  image(bgi, 0, 0, windowWidth, windowHeight); // background image

  image(flag, (windowWidth/2 - flag.width/2), (windowHeight/2 - flag.height/2)); // main flag

}

function draw() {
  mainmenu();
  drawScore();
}

function doflag() {
  flag = loadImage("flag-icons-main/flags/4x3/" + fname + ".svg");
}

function drawScore() {
  if (gameon === true){
    fill(255);
    rect(20, 10, textsize * 3, 50); // background rectangle for score

    fill(0)
    textSize(textsize);
    text(score, 20, 0 + textsize); // score text

    textSize(textsize);
    text("/" + total, 60 , 0 + textsize); // denominator
  }
}

function mainmenu(){
  if (gameon === false){
    image(logo, (windowWidth/2 - logo.width/2), (windowHeight/2 - logo.height/2 - 150)); // logo

    fill(255);
    rect(windowWidth/2 - logo.width/2, windowHeight - 300, logo.width, 50); // start button rectangle

    fill(255, 0, 255)
    textSize(textsize);
    text("Start Game", windowWidth/2 - logo.width/2 + 500, windowheight - 300); // start text
  }
}

function mousePressed(){
  if (gameon === False && mouseX > (windowWidth/2 - logo.width/2) && mouseX < (windowWidth/2 + logo.width/2) && mouseY > (windowheight - 300) && mouseY < (windowHeight - 350)){
    gameon = true

  if (gameon === True && correct === c1 && "INSERT PARAMETERS FOR C1"){}

  if (gameon === True && correct === c1 && "INSERT PARAMETERS FOR C2"){}

  if (gameon === True && correct === c1 && "INSERT PARAMETERS FOR C3"){}

  if (gameon === True && correct === c1 && "INSERT PARAMETERS FOR C4"){}
  }
}

function randflag(){
  if (gameon === True) {
    let options = [c1, c2, c3, c4] 
    correct = ("random from options") // picks a random button to be correct
    c1 = "randomflag" // rand flag for option 1
    c2 = "randomflag" // rand flag for option 2
    c3 = "randomflag" // rand flag for option 3
    c4 = "randomflag" // rand flag for option 4
    flagname = correct // flag thats drawn is based off of what button was chosen to be correct
  }
}

