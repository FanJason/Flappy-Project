function Pipe() {
  this.top = random(height/2) + 20;
  this.tall = this.top;
  this.x = width;
  this.w = 50;
  this.speed = 2;
  this.count = 0;

this.show = function() {
  fill(50, 205, 50);
  if (this.top < 100) {
    this.count = 100;
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.top + this.count, this.w, height - this.top);

    rect(this.x - 5, this.top - 20, this.w + 10, 20);
    rect(this.x - 5, this.top + this.count, this.w + 10, 20);
  }
  else {
    if (this.top < 200) {
      this.count = 175;
      rect(this.x, 0, this.w, this.top);
      rect(this.x, this.top + this.count, this.w, height - this.top);

      rect(this.x - 5, this.top - 20, this.w + 10, 20);
      rect(this.x - 5, this.top + this.count, this.w + 10, 20);
    }
      else {
        this.count = 250;
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.top + this.count, this.w, height - this.top);

        rect(this.x - 5, this.top - 20, this.w + 10, 20);
        rect(this.x - 5, this.top + this.count, this.w + 10, 20);
      }
    }
  }

this.update = function() {
 this.x -= this.speed;
}

this.remove = function() {
  if (this.x < -width) {
    return true;
  }
  return false;
}

this.checkGameOver = function(bird) {
  if (bird.x + bird.hitbox > this.x - 5 && bird.x - bird.hitbox < this.x + this.w + 10) {
    if (bird.y - bird.hitbox < this.top && bird.y - bird.hitbox > this.top - 20) {
      return true;
    }
    else {
      if (bird.y + bird.hitbox > this.top + this.count && bird.y + bird.hitbox < this.top + this.count + 20) {
      return true;
    }
  }
}
  if (bird.x + bird.hitbox > this.x && bird.x - bird.hitbox < this.x + this.w) {
    if (bird.y - bird.hitbox < this.top  || bird.y + bird.hitbox > this.top + this.count) {
      return true;
    }
  }

  return false;
}

this.changeSpeed = function() {
  this.speed += 0.2;
}
}
