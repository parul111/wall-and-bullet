var wall, bullet;
var speed,weight,thickness;

function setup() {
  speed=random(223,321);
  weight=random(30,50);
  thickness=random(22,83);
  createCanvas(800,400);
  wall=createSprite(600, 200, thickness, 100);
  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed
  bullet.shapeColor="black";
  wall.shapeColor="brown";
}


function draw() {
  background("pink");  

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){

    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    
    if(deformation>10){
      wall.shapeColor="red";
    }
    
    if(deformation<10){
      wall.shapeColor="green";
  
    }
  
    
  }
  drawSprites();
}