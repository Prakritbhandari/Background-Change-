
var r = 0;
var g = 50;
var b = 255;
var Ellipse;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

  Ellipse = createSprite(200,200,10,10);
  Ellipse.shapeColor = "black" ;

  r = createSprite(200,200,400,400);
  r.visible = false;

  g = createSprite(600,200,400,400);
  g.visible = false;

  b = createSprite(1000,200,400,400);
  b.visible = false;

}


function draw(){

  background(255)

  Ellipse.x = World.mouseX ;
  Ellipse.y = World.mouseY ;

 

  // change the value of Red based on the mouse movement about the X axis
  if(Ellipse.x>0&&Ellipse.x<400){
    background("red");
  }
  // change the value of Green based on the mouse movement about the X axis
  if(Ellipse.x>400&&Ellipse.x<800){
    background("green");
  }
  // change the value of Blue based on the mouse movement about the X axis
  if(Ellipse.x>800&&Ellipse.x<1200){
    background("blue");
  }
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.

  // Remember to fill the canvas with white paint before creating the ellipse.

  drawSprites();

}