
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var berry, berryIMG, berry_options;
var bird, birdIMG;
var score = 0;

function preload(){
bg = loadImage('background.jpg');
birdIMG = loadImage('BirdImage.png');
berryIMG  = loadImage('berry.png');
}
function setup() {
  createCanvas(900,550);
  engine = Engine.create();
  world = engine.world;
 // Engine.update(engine);

/*
  bird = createSprite(200,450);
  bird.scale = 0.6;
  bird.addImage(birdIMG);

 */

  options={isStatic: true}
bird = Bodies.circle(450,225,20, options);
}


function draw() 
{
  Engine.update(engine);
image(birdIMG, bird.position.x, bird.position.y);
/* 
 if(keyDown(37)){
  bird.x=bird.x-4;
 }

 if(keyDown(39)){
  bird.x= bird.x+4;
 }

 if (keyDown(38)){
  bird.y = bird.y-4;
 }

 if(keyDown(40)){
  bird.y = bird.y+4;
 }

*/

 //console.log(bird.x, bird.y);
 
 image(bg,0,0,width, height);    

  spawnBerries();
  drawSprites();
  image(birdIMG, bird.position.x, bird.position.y);
 

}
 
function spawnBerries(){

if(frameCount % 100 === 0){
  berry = createSprite(Math.round(random(900)), (Math.round(random(400))));
  berry.addImage(berryIMG);
  berry.scale=0.4;
  berry.velocityY = 3;
  
}
  

}