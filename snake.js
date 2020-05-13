const draw = function() {

}

document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById('board');
  let context = canvas.getContext('2d');

  const snake = {
    width: 30,
    height: 10,
    posX: 10,
    posY: 10
  }

  context.fillStyle = "#fff";
  context.fillRect(snake.posX, snake.posY, snake.width, snake.height);


  let frames = 8;

});