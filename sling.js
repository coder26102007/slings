class SLING{

constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffeness: 0.04,
        length:10
    }
    this.pointB=pointB;   
    this.shot = Constraint.create(options)
    World.add(world,this.shot)



}

fly(){

    this.shot.body=null;
    
}





display(){

   
if(this.shot.bodyA){

    var shot1=this.shot.bodyA.position;
    var shot2=this.pointB;
    strokeWeight(3);
    line(shot1.x,shot1.y,shot2.x,shot2.y);

}
}



}