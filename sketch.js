const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,object
var ball,ball1
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world = engine.world;
  var options={isStatic:true}
  object=Bodies.rectangle(400,390,800,50,options)
  var ball_options={restitution:1.0}
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  World.add(world,object)
  console.log(object)
  ball1=Bodies.circle(210,100,20,ball_options)
  World.add(world,ball1)
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,800,50) 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball1.position.x,ball1.position.y,20,20)
}
