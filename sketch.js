var hr,min,seconds
hr=hour()
min=minute()
seconds=second()
angleMode(DEGREES)


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hrAngle=map(hr,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  secondsAngle=map(seconds,0,60,0,360)
  
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  stroke("blue")
  strokeWeight(7)
  line(0,0,100,0)
  stroke("green")
  strokeWeight(7)
  line(0,0,100,0)
  translate()
  drawSprites();
}