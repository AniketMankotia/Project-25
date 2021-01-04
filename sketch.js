
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var Db,DbImage;

function preload(){
	DbImage = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	
	Db = createSprite(900,470,50,50);
	Db.addImage(DbImage);
	Db.scale = 0.5;

	paper = new Paper(200,200,40);
	ground = new Ground(600,550,width,15);
	dustbin1 = new Dustbin(850,475,20,130);
	dustbin2 = new Dustbin(900,530,100,20);
	dustbin3 = new Dustbin(950,475,20,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(214, 219, 223);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:72,y:-72});
	}
}
