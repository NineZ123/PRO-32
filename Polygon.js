class Polygon{
    constructor(x,y){
        var options = {
            'restitution' : 1.0,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.circle(x,y,50,options);
       this.radius=50;
       this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
       image(this.image, pos.x, pos.y, 40, 40);
        pop();
    }
   
}