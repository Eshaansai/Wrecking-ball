const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block12,block13,block13,block14,block15,block17,block18,block19,block20,block12
function preload(){

  polygon = loadImage("polygon.png");

}

function setup() {
  
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(490,350,250,10);
  
  block1 = new Box(400,275,30,40);
  block2 = new Box(430,275,30,40);
  block3 = new Box(460,275,30,40);
  block4 = new Box(490,275,30,40);
  block5 = new Box(520,275,30,40);
  block6 = new Box(550,275,30,40);
  block7 = new Box(580,275,30,40);

  block17= new Box(400,235,30,40);
  block8 = new Box (430,235,30,40);
  block9 = new Box(460,235,30,40);
  block10 = new Box(490,235,30,40);
  block11 = new Box(520,235,30,40);
  block12 = new Box(550,235,30,40);
  block18= new Box(580,235,30,40);

  block19= new Box(400,195,30,40);
  block20= new Box(430,190,30,40);
  block13 = new Box(460,195,30,40);
  block14 = new Box(490,195,30,40);
  block15 = new Box(520,195,30,40);
  block16 = new Box(550,195,30,40);
  block21=new Box(580,195,30,40)

  ball=new Ball(200,200,80,80);

  rope = new Rope(ball.body,{x:210, y:50})


}

function draw() {
  background(0);  
  textSize(20);
  fill("red");
  text("Try to fall all in just one hit !! and press space to get a chance",100,30);

  ground.display();

  stand1.display();


  rope.display();
  ball.display();
  strokeWeight(0);
  stroke(0);
  fill("magenta");
  block1.display();
  fill("pink");
  block2.display();
  fill("magenta");
  block3.display();
  fill("pink");
  block4.display();
  fill("magenta");
  block5.display();
  fill("pink");
  block6.display();
  fill("magenta");
  block7.display();
  // stage 2
  fill("yellow");
  block8.display();
  fill("purple");
  block17.display();
  block18.display();
  block9.display();
  fill("yellow");
  block10.display();
  fill("purple");
  block11.display();
  fill("yellow");
  block12.display();
  // stage 3
  fill("blue");
  block13.display();
  block19.display();
  block21.display();
  fill("red");
  block20.display();
  block14.display();
  fill("blue");
  block15.display();
  // stage 4
  fill("red");
  block16.display();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}