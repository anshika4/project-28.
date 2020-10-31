
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,boyImage,boy;
function preload()
{
	boyImage = loadImage("image/boy.png");

}

function setup() {
	createCanvas(3000, 3000);


	engine = Engine.create();
  world = engine.world;



  //Ground(600,height,1200,20);
   mango1 = new Mango(810,350,25); 
  mango2 = new Mango(870,400,25);
   mango3 = new Mango(890,300,25);
    mango4 = new Mango(780,450,25); 
    mango5 = new Mango(720,420,25); 
    mango6 = new Mango(800,420,23); 
    mango7 = new Mango(930,430,26); 
    mango8 = new Mango(960,260,26); 
    mango9 = new Mango(950,350,24);
     mango10 = new Mango(1030,350,25); 
     mango11 = new Mango(1100,400,25); 
     mango12 = new Mango(1050,320,25); 
     tree = new Tree(920,465,0,0) ;
     stone = new Stone(435,590,20);
      rope1 = new Launcher(stone.body,{x:340,y:605})



     
     //mango=new mangoes(-90,-90)
     //mango.scale=2;
     //mango1=new mangoes(-5,-90)
     //mango1.scale=3;
     //mango2=new mangoes(90,-90)
     //mango2.scale=1;
     //mango3=new mangoes(200,-90)
     //mango3.scale=1;
     //mango4=new mangoes(-160,-90)
     //mango4.scale=2;
     //mango5=new mangoes(-110,-150)
     //mango5.scale=2;
     //mango6=new mangoes(-40,-150)
    // mango6.scale=2;
    // mango7=new mangoes(50,-150)
    // mango7.scale=2;
    // mango8=new mangoes(150,-150)
    // mango8.scale=2;
    // mango9=new mangoes(100,-210)
    // mango9.scale=2;
     //mango10=new mangoes(10,-210)
    // mango10.scale=2;
    // mango11=new mangoes(-70,-210)
    // mango11.scale=2;

     
     ground=new Ground(600,height,1200,20);
     
     
    

     
	    Engine.run(engine);
  
}


function draw() {
  background("Aqua");
  Engine.update(engine);
  rectMode(CENTER);
  
  tree.display();
  ground.display();
  mango12.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  rope1.display();
 stone.display();
 
  
 image(boyImage,400,645,200,200);


 detectCollision(stone,mango12)
 detectCollision(stone,mango1)
 detectCollision(stone,mango2)
 detectCollision(stone,mango3)
 detectCollision(stone,mango4)
 detectCollision(stone,mango5)
 detectCollision(stone,mango6)
 detectCollision(stone,mango7)
 detectCollision(stone,mango8)
 detectCollision(stone,mango9)
 detectCollision(stone,mango10)
 detectCollision(stone,mango11)
 
textSize(15);
stroke("yellow")
text("PRESS SPACE TO GET SECOND CHANCE TO PLAY ",-500,-300);




  drawSprites();
}





function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  rope1.fly();
}



function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:340,y:605})
		rope1.attach(stone.body);
	}
}


function detectCollision(lstone,lmango){
  mangoPosi=lmango.body.position
  stonePosi=lstone.body.position
 
  var distance=dist(stonePosi.x,stonePosi.y,mangoPosi.x,mangoPosi.y)
    if(distance<=lmango.radius+lstone.radius){
      Matter.Body.setStatic(lmango.body,false);
    }
 }






 