//i love this shit

var img;
var a; 
   var offset = 10; 
   var angle = 0.0;
   var angleDirection = 1; 
   var speed = 10; 
 
function preload(){
  img = loadImage ("rain-.gif");
} 
 
function setup() {
  createCanvas(1400, 900);
  image(img,0,0,1400,900);

    a = width/2;

    button = createButton("Click to start again!");
  button.position(20,20);
  button.mousePressed(changeText);
  button.class('myButton');
}
 
 function draw() {
    if (mouseX > a) { 
     a += 0.5;
     offset = -10; 
   }
 if (mouseX < a) {
   a -= 0.5;
   offset = 10; 
 }
    if (mouseX < 400) {
      push();
      translate((mouseX/2)-50,(mouseY/2)-50);
 } 
     rotate (angle*2);
stroke(255,255,255,30); 
strokeWeight(1.6);
line(a, 0, a, height*2);
 line(mouseX,mouseY,mouseX + offset, mouseY - 10);
 line(mouseX, mouseY, mouseX + offset, mouseY + 10);
 line(mouseX, mouseY, mouseX + offset*3, mouseY);

 angle += speed * angleDirection; 
 }
 
   function mousePressed() {
    createCanvas(1600, 800);
    background(255);
}
   function changeText() {
  button.html('click again to restart');
 }
 
  angle += speed * angleDirection; 
  if ((angle > 5.0) || (angle < 0 )) { 
    angleDirection *= -1; 
  }
