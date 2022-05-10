var song;
var count = -1;
function preload(){
    song = loadSound("wowww.mp3");
}

function setup(){
    createCanvas(100,30);
    var button = createButton("click me");
    button.mousePressed(setup);
    count ++;
    song.setVolume(0.3);
    song.play();
   
}

function draw(){
    background(255);
    textFont('Georgia');
    textSize(15);
    text("wowww! : "+ count,4,20);
}