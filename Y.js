var gif_loadImg, gif_createImg;
function preload() {
  gif_createImg = createImg("bg.gif");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  imageMode(CENTER);
  gif_createImg.size(windowWidth, windowHeight);
  background(gif_createImg.position(300, 300));
}
