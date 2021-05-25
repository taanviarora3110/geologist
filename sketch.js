const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ironObject,stoneObject,rubberObject;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stoneObject = new Stone(200,200,50,100);
   rubberObject=new Rubber(400,550,40);
  ironObject=new Iron(450,500,100,100);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   
  

    plane.display();
    hammer.display();
stoneObject.display();
    rubberObject.display();
 ironObject.display();
}