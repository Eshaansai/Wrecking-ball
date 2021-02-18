class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 280
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);

    }

    display(){

        strokeWeight(4);
        stroke("hotpink");
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}




















    
