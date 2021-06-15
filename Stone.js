class Stone {
    constructor(x, y) {
      var options = {
        'density':10,
        'friction': 1.0,
        'restitution':0.2
      };
      this.body = Bodies.rectangle(x, y, 70, 50, options);
      this.width = 70;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(7);
      stroke('grey')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  