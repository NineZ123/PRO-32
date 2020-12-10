const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rope;
var engine, world;
var stand;
var a;
var block1,block2,block3,block4,block5;
var block6,block7,block8;
var block9, block10;
var polygon, polygon_img;
var ground;

var score=0;

function preload(){

polygon_img=loadImage("polygon.png")

}
function setup() {
  var canvas = createCanvas(1200,600);
  
  stroke(10);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,580,1200,40)
  stand  = new Ground(600,300,405,10);
  block1 = new Block(680,260,40,40);
  block2 = new Block(640,260,40,40);
  block3 = new Block(600,260,40,40);
  block4 = new Block(560,260,40,40);
  block5 = new Block(520,260,40,40);
  block6 = new Block(575,220,40,40);
  block7 = new Block(535,220,40,40);
  block8 = new Block(615,220,40,40);
  block10= new Block(575,190,40,40);
  

  polygon = Bodies.circle(60,200,20);
  World.add(world,polygon);
  rope= new SlingShot(this.polygon,{x:155,y:160});

}

function draw() {
  Engine.update(engine);
background(200);  

textSize(35)
text("Score:" + score,30,50);

ground.display();

block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();

block8.display();
block8.score();

block10.display();
block10.score();
 stand.display();
imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,50,50);

 rope.display();

drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
rope.fly();

}


function keyPressed(){

    if(keyCode===32){
    rope.attach(this.polygon);
    }

}