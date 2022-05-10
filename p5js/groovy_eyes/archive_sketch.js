var s;
var textX;
var textY;
var x;
var y;
var c,d;
function setup(){
    createCanvas(800,1013);
    background(0);
    noLoop();
    
}

function draw(){
    var colors = [color('#33238e'), color('#2042a4'), color('#e77a27'), color('#2c4b21'), color('#cc4e73')];

    textSize(20);
    fill(255);
    s = 70;
    textX = 150;
    textY = 300;
    text('Look who\'s here!!', textX, textY);

    for( let i = 0;i <30; i++ ){
        x = random(s, width-s);
        y = random(s, height-s);

        if(x < textX-(s*1.3) || x > textX+350 || y < textY-(s*1.3) || y > textY+130)
        {
            push();
            fill(255);
            beginShape();
            translate(x,y)
            vertex(-50,0);
            bezierVertex(-10,-30,20,-40,50,0);
            bezierVertex(10,30,-20,40,-50,0);
            endShape();
            pop();
            
            push();
            c = colors[floor(random(colors.length))];
            fill(c);
            ellipse(x, y, 30,30);
            pop();
            
            // push();
            // d = colors[floor(random(colors.length))];
            // fill(d);
            // ellipse(x,y,20,20);
            // pop();
        }
    }

}