var  man,man2;
var ground,bgIMG;
function setup() {
  createCanvas(1200,600);
  

bgIMG = loadImage("images/Forest-4.png")

 man = new person(100,500,10,60);
 person(man2);
  ground = createSprite(1200,600,4200,10)
}

function draw() {
  background(bgIMG);  


  person.velocityX=0;
  person.velocityY=0;

  if(keyDown("UP")){
    person.velocityX = 0;
    person.velocityY =  -4;
    }
    
    if(keyDown("DOWN")){
    person.velocityX = 0;
    person.velocityY = 4;
    }
    
    if(keyDown("LEFT")){
    person.velocityX = -4;
    person.velocityY = 0;
    }
    
    if(keyDown("RIGHT")){
      person.velocityX = 4;
      person.velocityY = 0;
    }
  
       
  
  drawSprites();
}