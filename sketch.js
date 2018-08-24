var bird;
var score;
var pipes = [];
var endGame;
var count;
var highscore;
var step;
var plays;

function setup() {
  createCanvas(500, 700);
  bird = new Bird();
  pipes.push(new Pipe());
  score = new Score();
  endGame = 1;
  count = 0;
  highscore = 0;
  step = 0;
  plays = 0;
}

function draw() {
  background(240, 248, 255);
if (endGame == 0) {
    bird.show();
    bird.update();
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].remove()) {
      pipes.splice(i, 1);
    }
    if (pipes[i].checkGameOver(bird)) {
      endGame = 1;
    }
  }

  if(pipes.length != 0) {
    if (pipes[pipes.length - 1].x == 350) {
      score.update(count);
      count = 1;
      step++;
    }
  }
  if(step < 3) {
    score.instructions();
  }
  // if(pipes.length != 0 && step % 8 == 0) {
  //   pipes[pipes.length - 1].changeSpeed();
  // }
  if (frameCount % 150 == 0) {
    pipes.push(new Pipe());
  }
  score.show();
  score.highScore(highscore);
}
else{
  for(var i = pipes.length - 1; i >= 0; i --) {
    pipes[i].show();
  }
  if (score.number > highscore) {
    highscore = score.number;
  }
    score.start(count, highscore ,score.number);
    plays = 1;
}
}


function keyPressed() {
  if (key == ' ' && endGame == 0) {
    bird.up();
  }
  if (key == '0' && endGame != 0) {
    score.refresh();
    bird.y = height/2;
    bird.velocity = -5;
    pipes = [];
    endGame = 0;
    count = 0;
  }
}
