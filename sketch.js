const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var goptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,20,goptions)
  World.add(world,ground)
  var boptions = {
    restitution:1
  }
  ball = Bodies.circle(100,50,30,boptions)
  World.add(world,ball)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}