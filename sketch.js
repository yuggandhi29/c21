
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,radius=50;
var ground,leftside,rightside;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:1.2,
		density:1.2
		}
		ball =Bodies.circle(200,200,50,ball_options)
		World.add(world,ball)
        ground = new Ground(width/2,670,width,20);
		leftside = new Ground(1100,600,20,120)
		rightside = new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();
  ground.display()
  leftside.display()
  rightside.display()
}
function keyPreesed(){
if(keyCode ===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}


}



