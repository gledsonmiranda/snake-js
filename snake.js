document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById('board');
  let context = canvas.getContext('2d');

  const snake = {
    defaultTailSize: 3,
    tailSize: this.defaultTailSize,
    trail: [],
    posX: 10,
    posY: 10,
    width: 10
  }

  const gridSize = canvas.width;
  const nextX = 0;
  const nextY = 0;

  const apple = {
    posX: 15,
    posY: 15
  }

  const draw = function() {
    //snake to next position
    snake.posX += nextX;
    snake.posY += nextY;

    //snake in world
    if (snake.posX < 0) {
      snake.posX = gridSize - 1;
    }
    if (snake.posX > gridSize - 1) {
      snake.posX = 0;
    }

    if (snake.posY < 0) {
      snake.posY = gridSize - 1;
    }
    if (snake.posY > gridSize - 1) {
      snake.posY = 0;
    }

    context.fillStyle = "#fff";
    context.fillRect(snake.posX, snake.posY, snake.width, snake.width);
  }

  draw();
});