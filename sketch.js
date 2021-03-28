var ballBody,dustbin,groundBody;
var binBottom,binLeft,binRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);

	//Create the Bodies Here.
	
	// groundSprite=createSprite(width/2, height-35, width,10);
	// groundSprite.shapeColor=color(255)

	// binBottom=createSprite(650,650,200,20);
	// binBottom.shapeColor=("RED")

	// binLeft=createSprite(550,600,20,100);
	// binLeft.shapeColor=("RED")

	// binRight=createSprite(750,600,20,100);
	// binRight.shapeColor=("RED");

	// ball=createSprite(150,600,20,20);
	
	engine = Engine.create();
	world = engine.world;

	groundBody = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundBody);

	 var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	} 
	ballBody = Bodies.circle(20,120,20,options);
	
	World.add(world,ballBody)
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
	rect (groundBody.x,groundBody.y,800,10);
	ellipseMode(RADIUS);
	ellipse(ballBody.x,ballBody.y,20,20);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ballBody.body,ballBody.body.position,{x:85,x:-85});
	}

}
