class Snow{
    constructor(x,y,) {
        var options = {
            restitution:0.4
        }
       
        this.image=loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,15,options);
         this.r = 50;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}
