class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visiblity = 255;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
  }
  display(){
    stroke("yellow");
    fill("blue");
    
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,30,38);
   
      
}
score(){
  if( this.body.position.y > 300){
    score+5;
  }
  
  }
}