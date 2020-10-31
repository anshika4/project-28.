class Mango {
    constructor(x, y) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.circle(x, y,20,options);
    this.radius=20;
      World.add(world, this.body);
      this.image = loadImage("image/mango.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    imageMode(CENTER);
  
      
      image(this.image,0, 0,this.radius*2,this.radius*2);
      pop();
    }
  }