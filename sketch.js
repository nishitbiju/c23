
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	rope1=new rope(bob1.body,roof.body,-80)
   
	rope2=new rope(bob2.body,roof.body,-40)
	rope3=new rope(bob3.body,roof.body,0)
	rope4=new rope(bob4.body,roof.body,40)
	rope5=new rope(bob5.body,roof.body,80)


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();
}


//CHOOSE THE CORRECT OPTION TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED

function drawline (Constraint) {
	bobBodyPosition = Constraint.bodyA.position;
	roofBodyPosition = Constraint.bodyB.position;
	roofBodyOffset =  Constraint.pointB;
    roofBodyX = roofBodyPosition.x + roofBodyOffset.x;
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y;
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX, roofBodyY)
}


// function key Pressed() {
// 	if (keyCode === DOWN_ARROW) {
// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,{x:-50,y:-45});
// 	}
// }

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

