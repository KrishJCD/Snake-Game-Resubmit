var snake;

var food;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);


  snake=new Snake(20);

  //snake.elongateAfterEating({x:200,y:150})

  foodLocation();
}

function foodLocation() {
  let x = floor(random(800));
  let y = floor(random(400));
  food = createVector(x, y);
}


function draw() {
  background(0);  
  if(snake.hasEaten(food))
  {
    foodLocation();
  }


  snake.update();
  snake.show();
  frameRate(30);

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 10, 10);
  drawSprites();
}

function keyPressed()
{
  if (keyCode === LEFT_ARROW) {
    snake.setDirection(-3, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDirection(3, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDirection(0, 3);
  } else if (keyCode === UP_ARROW) {
    snake.setDirection(0, -3);
  } else if (key == ' ') {
    snake.grow();
  }
}