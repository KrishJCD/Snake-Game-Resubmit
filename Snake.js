class Snake
{
    constructor(w)
    {
        this.xDir=0;
        this.color=255;
        this.yDir=0;
        this.w=w;
        this.length=0;
        this.stacks=[];
        this.stacks[0]=createVector(floor(windowWidth/2),floor(windowHeight/2));
    }


    show() {
        for (let i = 0; i < this.stacks.length; i++) {
          fill(255);
          noStroke();
          rect(this.stacks[i].x, this.stacks[i].y, 10, 10);
        }
      }

    setDirection(x,y)
    {
         this.xDir=x;
         this.yDir=y;
    }

    update()
    {
        let head = this.stacks[this.stacks.length-1].copy();
        this.stacks.shift();
        head.x+=this.xDir;
        head.y+=this.yDir;
        this.stacks.push(head);
    }

    hasEaten(food){
        var xPos=this.stacks[this.stacks.length-1].x;
        var yPos=this.stacks[this.stacks.length-1].y;
        if (dist(xPos,yPos,food.x,food.y)<=10) {
            this.grow();
            return true;
          }
          return false;
    }
    
    grow() {
        let head = this.stacks[this.stacks.length-1].copy();
        this.length++;
        this.stacks.push(head);
    }


}