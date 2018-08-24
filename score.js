var font = 'fantasy';
function Score() {
  this.x = width/2;
  this.y = 75;
  this.number = 0;
  this.num = "0";

  this.show = function() {
    fill(0);
    textSize(60);
    textFont(font);
    text(this.num, this.x - 20, this.y);
  }

  this.highScore = function(highscore) {
    if (highscore < 100) {
    fill(0);
    textSize(20);
    textFont(font);
    text('HighScore: ' + highscore.toString(), width - 125, 25);
  }
  else {
    if (highscore < 1000) {
    fill(0);
    textSize(20);
    textFont(font);
    text('HighScore: ' + highscore.toString(), width - 135, 25);
  }
  else {
    fill(0);
    textSize(20);
    textFont(font);
    text('HighScore: ' + highscore.toString(), width - 155, 25);
  }
  }
  }

  this.update = function(count) {
    if(count == 1) {
      this.number++;
      this.num = this.number.toString();
    }
  }

  this.refresh = function() {
    this.number = 0;
    this.num = this.number.toString();
  }

  this.start = function(count, highscore, score) {
    if (count == 0) {
    fill(0);
    textSize(30);
    textFont(font);
    text('Press 0 to Start!', width/2 - 110, height/2);
  }
  else {
    if (highscore >= score + 1 || plays == 0 || score == 0) {
      fill(0);
      textSize(30);
      textFont('fantasy');
      text('Your Score: ' + this.num, width/2 - 85, height/2 - 30);
      text('HighScore: ' + highscore, width/2 - 80, height/2 + 20);
      text('Press 0 to Try Again', width/2 - 120, height/2 + 70);
    }
    else {
      fill(0);
      textSize(30);
      textFont(font);
      text('New Record!', width/2 - 73, height/2 - 20);
      text('Your Score: ' + this.num, width/2 - 73, height/2 + 20);
      text('Press 0 to Try Again', width/2 - 120, height/2 + 60);
    }
  }
  }

  this.instructions = function() {
    fill(0);
    textSize(30);
    textFont(font);
    text('Press Space to Jump!', width/2 - 135, height/2);
  }

  // this.printHighScore = function() {
  //     fill(140);
  //     textSize(40);
  //     textFont('fantasy');
  //     text('NEW RECORD!', width/2, height/2);
  //     text('Your Score: ' + this.num, width/2 - 120, height/2);
  // }
}
