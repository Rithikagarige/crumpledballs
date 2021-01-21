class Baseclass {
    constructor(x, y,width,height) {
      var options = {
         isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png");
      this.image1=loadImage("dustbingreen.png");
    console.log("baseclass");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
      //strokeWeight(4);
      //stroke("pink");
      //fill("red");
      console.log("baseclass display");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  