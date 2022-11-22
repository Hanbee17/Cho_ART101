//let micVar;
//let mic;
let look;
let myHearts = [];
let r;
let g;
let b;
let HatColor = 0;
let i = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let sketchStarted = false;

function setup() {
  createCanvas(800, 800);
  noStroke();

  //createButton("Start").mousePressed(startSketch);
  startSketch();
  frameRate(30);
  angleMode(DEGREES);
  //HeartsClass
  for (let i = 0; i < 30; i++) {
    let x = random(width*0.075, width*0.925);
    let y = random(height*0.075, height*0.925);
    if (i<10) {
    r = 234;
    g = 15;
    b = 150;
  } else if (i<20) {
    r = 248;
    g = 133;
    b = 180;
  } else if (i<30) {
    r = 201;
    g = 24;
    b = 74;
  }
    myHearts[i] = new hearts (x,y,r,g,b);
  }
}

function startSketch() {
  //mic = new p5.AudioIn();
  //mic.start();
  sketchStarted = true;
}

function draw() {

  if(sketchStarted){
  background(10,139,160);
  //micVar = map(mic.getLevel(), 0, 0.1,0, 245);

  //HeartsClass
  for (let i = 0; i< 30; i++) {
    myHearts[i].display();
    myHearts[i].move();
  }

  BodyPart(153,88,42);
  Eyes(250,250,250);
  Eyeballs(0,0,0);
  Mouth(0,0,0);
  Chocolatechips(250,250,200);
  Hat(192,133,82);
}
}

function Hat(r,g,b) {
  fill(HatColor,180,215);
  if (frameCount % 225 == 0) {
    HatColor = 0;
  } else {
    HatColor++;
  }
  //Hat
  rect(width*0.35,height*0.13,width*0.3,height*0.08,20)
  rect(width*0.422,height*0.05,width*0.15,height*0.15,15)
}

function BodyPart(r,g,b) {
  if (keyIsPressed === true) {
    fill(155,34,38);
  } else {
    fill(r,g,b);
  }
  //Body
  ellipse(width*0.5,height*0.5,width*0.6,height*0.6);
  //LeftArm
  rect(width*0.11,height*0.50,width*0.4,height*0.08,20);
  //RightArm
  rect(width*0.54,height*0.50,width*0.35,height*0.08,20);
  //Leg1
  rect(width*0.36,height*0.7,width*0.1,height*0.18,20);
  //leg2
  rect(width*0.55,height*0.7,width*0.1,height*0.18,20)
}

function Eyes(r,g,b) {
  fill(r,g,b);
  //LeftEye
  ellipse(width*0.36,height*0.46,width*0.1,height*0.1);
  //RightEye
  ellipse(width*0.62,height*0.46,width*0.1,height*0.1);
}

function Eyeballs(r,g,b) {
  push();
  ellipseMode(CENTER);
  fill(r,g,b);
   //LeftEyeBal
  let x1 = map(mouseX, width*0.32, width*0.34, width*0.328, width*0.38, true);
  let y1 = map(mouseY, height*0.45, height*0.46, height*0.44, height*0.48, true);
  ellipse(x1,y1,width*0.05,height*0.05);
  //RightEyeBall
  let x2 = map(mouseX, width*0.58, width*0.60, width*0.588, width*0.64, true);
  let y2 = map(mouseY, height*0.45, height*0.46, height*0.44, height*0.48, true);
  ellipse(x2,y2,width*0.05,height*0.05)
  pop();
  }

function Mouth(r,g,b) {
  fill(r,g,b);
  //Mouth
  rect(width*(0.44),height*(0.6),width*(0.1),height*(0.06),20)
}

function Chocolatechips(r,g,b) {
  if (mouseIsPressed === true) {
    fill(60,30,22);
  } else {
    fill(r,g,b);
  }
  //Chocolatechips
  ellipse(width*0.24,height*0.50,width*0.04,height*0.045);
  ellipse(width*0.68,height*0.60,width*0.045,height*0.047);
  ellipse(width*0.51,height*0.75,width*0.05,height*0.049);
  ellipse(width*0.35,height*0.70,width*0.052,height*0.045);
  ellipse(width*0.70,height*0.32,width*0.042,height*0.043);
  ellipse(width*0.30,height*0.35,width*0.044,height*0.047);
  ellipse(width*0.50,height*0.30  ,width*0.038,height*0.040);
}

class hearts {
  constructor(xpos, ypos,r,g,b) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(360));
    this.s = random(-3,3);
    this.r = r;
    this.g = g;
    this.b = b;
  }
  display(){
    push();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    fill(this.r,this.g,this.b);
    ellipse(66.6, 66.6, 20, 20);
    ellipse(83.2, 66.6, 20, 20);
    triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
    pop();
  }
  move() {
    this.t = this.t + this.s
  }
}
