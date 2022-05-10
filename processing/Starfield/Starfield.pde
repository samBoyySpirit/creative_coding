Star[] starWarp = new Star[1000];
float speed;
boolean recording = false;

void setup(){
  size(900,900);
  for(int i=0;i < starWarp.length;i++){
    
    starWarp[i] = new Star();
  }
}

void keyPressed(){
  if (key == 'r' || key == 'R'){
    recording = !recording; 
  }
}

void draw(){
  speed = map(mouseX, 0, width, 0, 100);
  
  background(0);
  
  translate(width/2,height/2);
  if (mousePressed == true){
    for(int i=0;i <starWarp.length;i++){      
      starWarp[i].update();
      starWarp[i].colorWarpSpeed();
      }
  }
  else{
    for(int i=0;i < (starWarp.length/10);i++){      
      starWarp[i].update();
      starWarp[i].show();
    }
  }
  
  if (recording){
    saveFrame("output/warp_speed_############.png");
  }
}
