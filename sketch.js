const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
 var ground_options={
   isStatic:true
 }
 var ball_options={
   restitution:1.0
 }
 world=engine.world;
 ground=Bodies.rectangle(200,390,20,20,ground_options);
World.add(world,ground);
ball=Bodies.circle(200,80,20,ball_options);
World.add(world,ball);

}

function draw() {
  background("black");
Engine.update(engine);
ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}