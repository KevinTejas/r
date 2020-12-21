var car,wall;
var weight,speed;


function setup() {
  createCanvas(800,400);
  
  speed=random(55.90)
  weight=random(400,1500)

  car=createSprite(30,200,50,50)
  car.shapeColor="blue"
  car.velocityX=20
  car.velocityX=10
  car.velocityX=5
  wall=createSprite(780,200,60,height/2)
  //car.velcityX=speed
  wall.shapeColor="gray"
}

function draw() {
  background("lightBlue");  

  //if(wall.x -car.x (car.width+wall.width)/2){
    //car.velocityX=0;
    //var deformation=0.5 * weight * speed * speed/22509;
    //if(deformation>180){
      //car.shapeColor=color(255,0,0)
    //}
    //if(deformation<180 && deformation>100){
      //car.shapeColor=color(230,230,0)
    //}
    //if(deformation>100){
      //car.shapeColor=color(0,255,0)
    //}
    //}
if(car.isTouching(wall)){

car.velocityX=0
if(car.x>20){
  car.shapeColor="red"
}
if(car.x>5){
  car.shapeColor="green"
}
if(car.x>10){
  car.shapeColor="orange"
}
}
  drawSprites();
}