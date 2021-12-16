let bg, bgImg;
let ironMan, ironImg;
let ground;


function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironImg = loadImage("./images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg);

  ironMan = createSprite(150,350,40,60);
  ironMan.addImage(ironImg);
  ironMan.scale = 0.4;

  ground =createSprite(200,585,1500,5);
  ground.visible =false;
}

function draw() {
  background("black")
  if(keyDown("up")){
    ironMan.velocityY=-16;
  } 
  if(keyDown("left")){
    ironMan.x=ironMan.x-10;
  } 
  if(keyDown("right")){
    ironMan.x=ironMan.x+10;
  } 
  ironMan.velocityY = ironMan.velocityY +0.5;
  ironMan.collide(ground);
    
  drawSprites();
   
}

