var wall,thicness;
var bullet,speed,weight;
var bullet2,wall2;





function setup() {
   
  createCanvas(1400,800);
  thicness=random(22,83);
  speed=random(223,321);
  weight=random(30,321);

  bullet=createSprite(200,200,20,10);
  wall=createSprite(1200,200,thicness,150);

  bullet2=createSprite(200,400,20,10);
  wall2=createSprite(1200,400,thicness,150);
  
  if(hasCollided(bullet,wall)){
    
    var damage=0.5 * 32 * 223 * 223/(70 * 70 * 70);

  if(damage>10){
    wall.shapeColor=color(255,0,0);  
  }
  
  if(damage<10){
    wall.shapeColor=color(0,225,0);
  }
 
  }


if(hasCollided(bullet2,wall2)){
    
    var damage=0.5 * 32 * 223 * 223/(40 * 40 * 40);

  if(damage>10){
    wall2.shapeColor=color(255,0,0);  
  }
  
  if(damage<10){
    wall2.shapeColor=color(0,225,0);
  }
 
  }


  
  
}

function draw() {
  background("black");
  
  bullet.velocityX=90;
  bullet2.velocityX=90;

  hasCollided(bullet,wall);
 
  drawSprites(); 


}
    
function  hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}
function  hasCollided(bullet2,wall2){
    wall2LeftEdge=wall2.x;
    bullet2RightEdge=bullet2.x+bullet2.width;
    if(bullet2RightEdge>=wall2LeftEdge){
      return true;
    }
      return false;
  }















