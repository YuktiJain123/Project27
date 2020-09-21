
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(400,300);
	bob2=new Bob(450,300);
	bob3=new Bob(500,300);
	bob4=new Bob(550,300);
	bob5=new Bob(600,300);
	platForm=new Ground(500,100,200,30); 
	rope1=new Rope(bob1.body,platForm.body,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
platForm.display(); 
}



