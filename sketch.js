
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof1,roof2;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(550,350,50);
	bob2 = new Bob(600,350,50);
	bob3 = new Bob(650,350,50);
	bob4 = new Bob(700,350,50);
	bob5 = new Bob(750,350,50);
	roof1 = new Roof(650,650,1000,20);
	roof2 = new Roof(650,250,400,20);
	rope1 = new Rope(bob1.body,roof2.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  roof2.display();
  rope1.display();
}



