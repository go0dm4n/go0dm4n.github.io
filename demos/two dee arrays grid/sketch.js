// grid
// Ben destroyer
let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid) {
  let cWidth = width / grid[0].length;
  let cHeight = height / grid.length;
  for (let y = 0; y < grid.length; y++){
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x * cWidth, y * cHeight, cWidth, cHeight);
    }
  }
}

function mousePressed(){
  let cWidth = width / grid[0].length;
  let cHeight = height / grid.length;
  
  for (let y = 0; y < grid.length; y++){
    for (let x = 0; x < grid[y].length; x++) {
      if (mouseX > x * cWidth && mouseX < x * cWidth + cWidth && 
        mouseY > y * cHeight && mouseY <  y* cHeight + cHeight){
        if (grid[y][x] === 0){
          grid[y][x] = 1;
        }
        else if (grid[y][x] === 1){
          grid[y][x] = 0;
        }
      }
    }
  }
}