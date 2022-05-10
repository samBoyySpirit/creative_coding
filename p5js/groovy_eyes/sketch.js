let eyes = [];
var s = 70;
var textX = 150;
var textY = 300;
var c;


function setup() {
    createCanvas(800, 1013);
    var colors = [color('#33238e'), color('#2042a4'), color('#e77a27'), color('#2c4b21'), color('#cc4e73'), color('#a569bd'), color('#5d6d7e'), color('#0e6251')];
    // noLoop();
    for (let i = 0; i<40;i++){
        c = colors[floor(random(colors.length))]; 
        eyes[i] = new Eye(random(s,width-s), random(s,height-s), c);
    }
}

function mousePressed(){
    var colors = [color('#33238e'), color('#2042a4'), color('#e77a27'), color('#2c4b21'), color('#cc4e73'), color('#a569bd'), color('#5d6d7e'), color('#0e6251')];
    c1 = colors[floor(random(colors.length))];
    eyes.push(new Eye(mouseX,mouseY, c1))
}

function draw() {
    background(0);
    textFont('Helvetica');
    textSize(20);
    fill(255);
    text('Look who\'s here!!', textX, textY);

    for(let j = 0; j < eyes.length; j++){
    eyes[j].update(mouseX, mouseY);
    eyes[j].display();
    }
}

function Eye(trackingx, trackingy, clr) {
    this.x = trackingx;
    this.y = trackingy;
    this.angle = 0;
    this.clr = clr;

    this.update = function(tracking_x, tracking_y) {
    this.angle = atan2(tracking_y - this.y, tracking_x - this.x);
    };

    this.display = function() {
        
        var s = 70;
        var textX = 150;
        var textY = 300;
        if(this.x < textX-(s*1.3) || this.x > textX+350 || this.y < textY-(s*1.3) || this.y > textY+130){
            push();
            fill(255);
            beginShape();
            translate(this.x, this.y);
            vertex(-50,0);
            bezierVertex(-10,-30,20,-40,50,0);
            bezierVertex(10,30,-20,40,-50,0);
            // ellipse(0,0, 50, 50)
            endShape();
            
            rotate(this.angle);
            noStroke();
            fill(clr);
            ellipse(10,0, 40,40);
            pop();
        
        }
    };
}