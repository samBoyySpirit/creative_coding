var x1;
var y1;
var x2;
var y2;
var x3;
var y3;

function setup(){
  createCanvas(900,700);
  background(0);
  x1=10;
  y1=45;
  x2=68;
  y2=224;
  x3=669;
  y3=564;
}

function draw() {
  stroke(255, 87, 51);
  noFill();
  strokeWeight(1);
  triangle(random(0, width),random(0, height),random(0, width),random(0, height),random(0, width),random(0, height));
}