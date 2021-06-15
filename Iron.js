class Iron {
    constructor(x, y) {
      var options = {
        'density':25,
        'friction': 3.0,
        'restitution':0.5,
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('brown')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  