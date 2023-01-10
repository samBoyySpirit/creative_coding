let rwalkers = [];
let c;
let fr = 3000;

function setup(){
    createCanvas(1500,1300);
    background(0);
    frameRate(fr);
}

function mousePressed(){
    c = color(random(255),random(255), random(255));
    rwalkers.push(new RandomWalker(mouseX, mouseY, c));
}

function draw() {

    if(rwalkers.length !=0){
        for(let i=0;i<rwalkers.length;i++){
            rwalkers[i].show();
            rwalkers[i].walk();
        }
    }
}
