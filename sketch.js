var gameState = 0;
var shooter,shooterImg;
var bg,bg2;
var arrow, target;
var arrowGroup;
var score = 0

function preload(){
  arrowImg = loadImage("images/arrow.png");
  bowImg = loadImage("images/bow.png");
  bg = loadImage("images/bg.gif");
  bg2 = loadImage("images/bg2.jpg")
  targetImg = loadImage("images/target.png");
  bTargetImg = loadImage("images/brokenTarget.png");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  

  bow = createSprite(windowWidth/2, windowHeight-50, 50, 50);
  bow.scale = 0.25
  bow.addImage("bow",bowImg);
  
  arrowGroup = createGroup();
}

function draw() {
  background(bg); 
  
  if (keyDown("RIGHT_ARROW")) {
    bow.position.x = bow.position.x+10
  }

  if (keyDown("LEFT_ARROW")) {
    bow.position.x = bow.position.x-10
  }

  if (keyWentDown("space")) {
    createArrow();
  }

  fill("cyan");
  textSize(30);
  text("Score: "+score,windowWidth-150,50)

  if (frameCount%140 === 0) {
    for (i=0; i<1;i++) {
      target = createSprite(0,50,20,20);
      target.addImage("target",targetImg)
      target.scale = 0.1;
      target.velocityX = 7;
      target.lifetime = 200;
      target.debug = true;
      
    }
  }

  if (gameState === 0) {
    if (arrowGroup.isTouching(target)) {
      for (var i = 0; i < arrowGroup.length; i++) {
        if (arrowGroup[i].isTouching(target)) {
          arrowGroup[i].x = target.x;
          arrowGroup[i].velocityY = 0;
          arrowGroup[i].velocityX = target.velocityX;
          target.addImage("target",bTargetImg);
          score = score + 5;

          if (score === 50) {
            gameState = 1;
          }
        }
      }
    }
  }
  
  if (gameState === 1){
    background(bg2);
    fill("cyan")
    textSize(130)
    text("YourScore: "+score, width / 4, height / 2);
    bow.visible = false;
    target.visible = false;
    arrowGroup.destroyEach();
  }
  

  drawSprites();
}

function createArrow() {
  arrow = createSprite(bow.position.x, windowHeight - 50, 50, 50);
  arrow.scale = 0.3
  arrow.addImage("arrow",arrowImg);
  arrow.velocityY = -10;
  arrowGroup.add(arrow);
}
