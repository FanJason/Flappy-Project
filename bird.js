function Bird() {
  this.y = height/2;
  this.x = width/2 - 160;
  this.thick = 32;
  this.hitbox =  this.thick/2;

  this.gravity = 0.3;
  this.lift = -10;
  this.velocity = -5;
  this.acceleration = 1.1;

  this.show = function() {
    // var sourceOfPicture = "daWae.png";
    // var img = document.getElementById('daWae')
    // img.src = sourceOfPicture.replace('90x90', '225x225');
    // img.style.display = "block";
    fill(90, 170, 20);
    ellipse(this.x, this.y, this.thick, this.thick);
  }

  this.up = function() {
    this.velocity += this.lift;
    this.y += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity*this.acceleration;
    this.y += this.velocity;
    if(this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if(this.y < 0) {
      this.y = 0;
      this.velocity += this.gravity*10;
    }
  }
}
