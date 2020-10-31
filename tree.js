class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,450,600,options);
      this.width = 450;
      this.height = 600;
      World.add(world, this.body);
      this.image = loadImage("image/tree.png");
    }
    display(){
      var pos =this.body.position;
      translate(pos.x,pos.y)
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
    }
  }