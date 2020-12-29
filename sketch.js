//NAMESPACING or NICKNAMING
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//for the angry bird game
var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(600,600);

  //created engine for abg
  engine = Engine.create();
  //my world is also my engine's world
  world = engine.world;

  groundOptions ={
    isStatic:true
  }


  ground = Bodies.rectangle(300,550,600,50,groundOptions);
  World.add(world,ground);

 ballOptions ={
   restitution:1
 }

  //creating  the ball
  ball = Bodies.circle(300, 100, 50, ballOptions);
  World.add(world,ball);
  
  console.log(ground);
}

function draw() { 
  background("red"); 

  //to update the engine
  Engine.update(engine); 

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,50,50);
  
}