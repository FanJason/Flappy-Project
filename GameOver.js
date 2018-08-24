function GameOver() {
  this.x = 25;
  this.y = height/2;

  this.show = function() {
    fill(90, 170, 20);
    ellipse(this.x, this.y, 20, 50);
  }
}
