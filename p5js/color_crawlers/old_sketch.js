var x ;
var y ;

var x1 ;
var y1 ;

function setup(){
  createCanvas(800,500);
  background(0);
  x = width/2;
  y = height/2;
  x1 = width/2;
  y1 = height/2;
}

function draw(){
  stroke(255);
  strokeWeight(2);
  point(x,y);
  stroke(255,0,0);
  strokeWeight(2);
  point(x1,y1)

  var pos = floor(random(4));
  if(pos == 0){
    x=x+1;
    x1=x1-1;
  }
  else if(pos == 1){
    y=y+1;
    y1=y1+1;
  }
  else if(pos == 2){
    x=x-1;
    x1=x1+1;
  }
  else {
    y=y-1;
    y1=y1-1;
  }
}