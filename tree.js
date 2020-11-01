class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,50,60,options);
      this.width = 450;
      this.height = 600;
      World.add(world, this.body);
      this.image = loadImage("image/tree.png");
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
      image(this.image, pos.x,pos.y, this.width, this.height);
      
    }
  }
