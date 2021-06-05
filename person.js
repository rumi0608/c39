class person {
    constructor(x,y){
      person(x,y,50,50);
      man2 = loadImage("images/man2.png")
       
    }
  
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
} 