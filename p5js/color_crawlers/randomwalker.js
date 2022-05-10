class RandomWalker{
    constructor(x,y,clr){
        this.x = x;
        this.y = y;
        this.clr = clr;
    }

    walk(){
        this.x += random(-1,1);
        this.y += random(-1,1);

        if(this.x < 0){
            this.x = width;
        }
        if(this.x > width){
            this.x = 0;
        }
        if(this.y < 0){
            this.y = height;
        }
        if(this.y > height){
            this.y = 0;
        }
    }

    show(){
        // noStroke();
        stroke(this.clr);
        strokeWeight(2);
        point(this.x, this.y);
    }
}