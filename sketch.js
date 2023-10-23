
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var floor, wallL, wallR

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;
	

	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	//Create the Bodies Here.

	ball = Bodies.circle(200, 100, 20, ball_options);
  	World.add(world, ball);

	floor = new Ground(750,680,1500,50, color(40, 200, 40));
	wallL = new Ground(950, 600, 20, 120, color(140, 70, 20));
	wallR = new Ground(1200, 600, 20, 120, color(140, 70, 20));
	
	rectMode(CENTER);
  	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  fill(255);
  textSize(32);
  text("Hello! SPACE to throw, UP/LEFT/RIGHT/DOWN KEYS to move", 100, 100); 
  
  ellipse(ball.position.x, ball.position.y, 20);

  floor.show();
  wallL.show();
  wallR.show();

  throwForce();

	  rForce();
	  lForce();
	  uForce();
	  dForce();

  Engine.update(engine);
}


function throwForce(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:2,y:1.5});
	}
}


function rForce(){
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.9, y:0});
	}
}
  
function uForce(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.9});
	}
}

function lForce(){
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:-0.9, y:0});
	}
}
  
function dForce(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:0.9});
	}
}



