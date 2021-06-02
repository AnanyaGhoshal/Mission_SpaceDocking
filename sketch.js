var iss, spaceCraft;
var issImg, spImg, bgImg, spSmokel_moving, spr, spd, spu;
var hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  bgImg = loadImage("spacebg.jpg");
  spImg = loadAnimation("spacecraft2.png" );
  spSmokel_moving = loadAnimation("spacecraft3.png");
  spr = loadAnimation("spacecraft4.png"); 
  spu = loadAnimation("spacecraft1.png");
  spd = loadAnimation("spacecraft2.png")
                        
}


function setup() {
  createCanvas(800,400);
  iss =createSprite(410, 130, 10, 10);
  iss.addImage(issImg);
  iss.scale = 0.5;
  //iss.debug = true;
  iss.setCollider("rectangle",-20,0,10,0);
  spaceCraft = createSprite(390,250,10,10);
  spaceCraft.addAnimation("docking",spu);
  spaceCraft.scale = 0.15;

}

function draw() {
  background(bgImg);
  if(!hasDocked){
    spaceCraft.x = Math.round(random(388,392));
    if(keyDown(LEFT_ARROW)){
      spaceCraft.x = spaceCraft.x-1;
      spaceCraft.addAnimation("docking",spSmokel_moving);
     
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.x = spaceCraft.x+1;
      spaceCraft.addAnimation("docking",spr);
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addAnimation("docking",spImg);
    }
    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y-1;
      spaceCraft.addAnimation("docking",spu);
    }
  }  
  if(spaceCraft.isTouching(iss)){
    hasDocked=true;
    textSize(20);
    fill(255);
    text("Docking Successfull!",300,350);
  }
  drawSprites();
}