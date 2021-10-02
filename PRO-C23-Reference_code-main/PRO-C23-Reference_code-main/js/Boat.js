class Boat{
    constructor(x,y,width,height,boatPos){
        var options={
            restitution: 0.1,
            friction: 1.0,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/boat.png");

        this.boatPosition = boatPos;
        World.add(world, this.body);


    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(0,this.boatPosition,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height);
        pop();

    }

    remove(index){
        setTimeout(() => {
            Matter.World.remove(world, boats[index].body);
            delete boats[index];
          }, 2000);
    }
}