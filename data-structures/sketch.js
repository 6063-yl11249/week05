let xPos = [];
let yPos = [];
let xVel = [];
let cDiam = [];

let numCircles = 10;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < numCircles; i += 1) {
    xPos.push(0);
    yPos.push(random(20, 550));
    xVel.push(random(5, 15));
    cDiam.push(random(10, 45));
  }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < numCircles; i += 1) {
    ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
    // draw circle

    // update pos
    xPos[i] = xPos[i] + xVel[i];

    // if reset is needed: pick random diameter and reset x
    if (xPos[i] > width + cDiam[i]) {
      cDiam[i] = random(20, 75);
      xPos[i] = 0 - cDiam[i];
    }
  }
}
