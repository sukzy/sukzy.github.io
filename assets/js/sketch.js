var canvas;
var bubbles = [];
var b;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function mousePressed() {
  b = new Bubble();
  bubbles.push(b);
}


function draw() {
  background(250, 100);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].goyang();
  }
}