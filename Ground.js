class Ground {
    constructor(x,y,width,height) {
      var opt = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,opt);
      this.width = width;
      this.height = height;
      World.add(world, this.body); 
    }
    display(){
      strokeWeight(2)
      var pos = this.body.position;
      rectMode(CENTER);
      stroke(20,20,20);
      strokeWeight(1)
      rect(pos.x, pos.y, this.width, this.height);
    }
  };