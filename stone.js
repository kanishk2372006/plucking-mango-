class stone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }

    display(){
        if(this.stone.bodyA){
        var pointA = this.stone.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    fly(){
   this.stone.bodyA=null;


    }
}