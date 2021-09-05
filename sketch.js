const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
 computer=new Computer(width-280,150,50,180)
player=new Player(280,150,50,180)
 computerBase=new ComputerBase(width-330,300,180,150)
 playerBase=new PlayerBase(250,300,180,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer
 computer.display()
 player.display()
 computerBase.display()
 playerBase.display()
}
