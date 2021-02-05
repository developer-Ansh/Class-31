class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];//-->> [[200,50],[250,100],[300,150]]
    //TRAJECTORY
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    //console.log(this.body.speed);
if(this.body.velocity.x>10 && this.body.position.x>200){
  var position=[this.body.position.x, this.body.position.y];
  this.trajectory.push(position);
}
   
  // this.trajectory.push([250,100])

  // image(this.smokeImg,this.trajectory[0][0],this.trajectory[0][1]);
  // image(this.smokeImg,this.trajectory[1][0],this.trajectory[1][1]);
  // image(this.smokeImg,this.trajectory[2][0],this.trajectory[2][1]);
//common pattern or repeating thing


  for(var i=0; i< this.trajectory.length; i++)
  {
    image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
  }

  }
}
