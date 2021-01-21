class Box{
    constructor(x, y,height) {
      var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body=Bodies.rectangle(x,y,options);
      World.add(world,this.body);
     //super(x,y,width,height);
      }
     display(){
      var pos=this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y);
       //super.display();
     }
    }