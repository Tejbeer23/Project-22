var wall , bullet , speed , weight , thickness , damage;

function setup(){
    createCanvas(1600,400);

    speed = random(223,321);
    weight = random(30,52);
 
    bullet = createSprite(50,200,10,10);
    bullet.velocityX = speed;

thickness = random(22,83);
    
    wall = createSprite(1500,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);

}

function draw(){

background(255,255,255);


if (hasCollided(bullet,wall)) 
{

  damage = 0.5*weight*speed*speed / thickness*thickness*thickness;

  bullet.velocityX = 0;   

  if(damage<10){
    wall.shapeColor = color(0,255,0);
}

if(damage>10){
   wall.shapeColor = color(255,0,0);
}

}

drawSprites();
}

function hasCollided(lbullet,lwall){
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if (bulletRightEdge >= wallLeftEdge){
     return true
   }
   return false;

}
 