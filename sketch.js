var speedX = 5;
var speedY= 5;
var x;
var y;
let img
let img2
let img3

function preload(){
  img = loadImage('resources/rat1.png')
  img2 = loadImage('resources/rat2.png')
  img3 = loadImage('resources/rat3.png')
}

function setup() {
  createCanvas(540, 810);
  x = width/2;
  y = height/2;
}


function draw() {
  background(225);
  x = x + random(-speedX, speedX);
  y = y + random(-speedY, speedY);
  for (i = 0; i < 100; i++){
  push();
  rotate(TWO_PI * i / 15)
  image(img, x, y, 50, 80);
  pop();
  }
}