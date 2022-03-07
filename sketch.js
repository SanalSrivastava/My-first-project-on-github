
var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png");
ground_running = loadImage("ground1.png");
}

function setup(){
createCanvas(600,200)
trex = createSprite(20,100,20,20);
trex.shapeColor = "lightgreen"
//create a trex sprite
 trex.addAnimation("dinosaur",trex_running);
 trex.scale=0.25;
 ground = createSprite(20,125,600,20);
 ground.addImage("ground",ground_running);
}

function draw(){
  background("black")
  
drawSprites();
}
