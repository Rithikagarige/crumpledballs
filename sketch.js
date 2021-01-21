
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
	//Create the Bodies Here.
	
	ground= new Ground(400,height,800,20);
	box1=createSprite(400,680,200,10);
	box1.shapeColor=color("darkgreen");
	box2=createSprite(500,630,10,100);
	box2.shapeColor=color("darkgreen");
	box3=createSprite(300,630,10,100);
	box3.shapeColor=color("darkgreen");
	paper=new Paper(100,100,40);

	Engine.run(engine);
  
}

function draw() {
  imageMode(CENTER);
  background('lightblue');
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
		Matter.Body.setStatic(paper,true);
	}
}




