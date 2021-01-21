class Paper{
    constructor(x,y,radius) {
      var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body=Bodies.circle(x,y,radius/2,options);
      this.radius=radius/2;
      World.add(world,this.body);
      //console.log("paper class");
    //this.image=loadImage("paper.png");
        }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
       //console.log("paper display");
       
      }
    }