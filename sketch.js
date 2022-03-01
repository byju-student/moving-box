//declaring global variables
var box;

//runs once at the start of the game, is used for creating things
function setup() {
  createCanvas(400,400);

  box = createSprite(50,50,10,10);
  box.shapeColor = 'blue';
}

//runs continuously for every frame
function draw() 
{
  background(30);

  if(keyDown(RIGHT_ARROW)){
    box.x+=2;
  }

  if(keyDown(LEFT_ARROW)){
    box.x-=2;
  }

  if(keyDown(UP_ARROW)){
    box.y-=2;
  }

  if(keyDown(DOWN_ARROW)){
    box.y+=2;
  }

  drawSprites();
}




