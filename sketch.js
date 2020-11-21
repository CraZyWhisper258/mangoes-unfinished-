
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone;
var boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	stone = new Stone(200,50);

	boy=createSprite(300, 610, 10,10);
	boy.addImage(boyImage);
	boy.scale = 0.1

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  stone.display();
  boy.display();
  drawSprites();
 
}





