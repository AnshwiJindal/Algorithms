var fixedRect
var movingRect
var bouncyRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 50, 50, 50);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(300,200,50,50)
  movingRect.shapeColor="red"

  bouncyRect=createSprite(200,350,50,50)
  bouncyRect.shapeColor="black"

  fixedRect.velocityY=3
  bouncyRect.velocityY=-3
}

function draw() {
  background("yellow"); 
   movingRect.x=World.mouseX;
   movingRect.y=World.mouseY;
   console.log(movingRect.x-fixedRect.x)
   if(movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2 &&  
    fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y-fixedRect.y<=fixedRect.height/2 + movingRect.height/2 &&  
    fixedRect.y-movingRect.y<=fixedRect.height/2 + movingRect.height/2 ){
      
    movingRect.shapeColor="orange"
    fixedRect.shapeColor="purple"
   }
   else{
    fixedRect.shapeColor="blue"
    movingRect.shapeColor="red"
   }



if(bouncyRect.x-fixedRect.x<fixedRect.width/2 + bouncyRect.width/2 &&  
  fixedRect.x-bouncyRect.x<fixedRect.width/2 + bouncyRect.width/2  ){
bouncyRect.velocityX=bouncyRect.velocityX * (-1)
fixedRect.velocityX=fixedRect.velocityX * (-1)
    
}

if(bouncyRect.y-fixedRect.y<fixedRect.height/2 + bouncyRect.height/2 &&  
  fixedRect.y-bouncyRect.y<fixedRect.height/2 + bouncyRect.height/2  ){
bouncyRect.velocityY=bouncyRect.velocityY * (-1)
fixedRect.velocityY=fixedRect.velocityY * (-1)
  }
  drawSprites();
}