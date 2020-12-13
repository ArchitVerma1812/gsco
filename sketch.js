var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(car.x-wall.x=car.width/2+wall.width/2)
  {
    deformation=(0.5 * weight * speed * speed)/22500;
  }
  if(deformation<100)
  {
    car.shapeColor="green";
  }
  else if(deformation>=100 && deformation<=180)
  {
    car.shapeColor="yellow";
  }
  else{
    car.shapeColor="red";
  }
  drawSprites();
}