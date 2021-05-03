const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1, chain2;
var trainSound 
var crashSound;
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

boogie1 = new boogie(100,100,100, 100);
boogie2 = new boogie(300,100, 100,100);
boogie3 = new boogie(500,100,100, 100);

chain1 = new Chain(boogie1.body,boogie2.body)


chain2 = new Chain(boogie2.body,boogie3.body)

rock1 = new Rock(1100,100,100,100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  boogie1. show();
  boogie2. show();
  boogie3. show();

  chain1.show();
  chain2.show();
  rock1.show();

  var collision = Matter.SAT.collides(boogie3.body,rock1.body);
  if(collision.collided)
  {
    flag=1;
    
    
  }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }
  }
 
  }


  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boogie3.body,{x:boogie3.body.position.x,y:boogie3.body.position.y},
        {x:0.5,y:0});
        trainSound.play();
    }


  }

