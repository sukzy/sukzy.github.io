class Bubble {
  constructor() {
    this.r = random(30, 150);
    this.pos = createVector(mouseX, mouseY);
  }

  show() {
    noFill();
    stroke(200, 50, 250, 100);
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  goyang() {
    this.pos.x -= random(-3, 3);
    this.pos.y -= random(-3, 3);
  }
}