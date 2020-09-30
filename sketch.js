var fixedRect, movingRect, recta1, recta2, recta3, recta4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  recta1 = createSprite(520,260,30,60);
  recta1.shapeColor = "blue";
  recta2 = createSprite(950,620,20,50);
  recta2.shapeColor = "blue";
  recta3 = createSprite(300,620,60,90);
  recta3.shapeColor = "blue";
  recta4 = createSprite(800,400,40,75);
  recta4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  recta4.x = World.mouseX;
  recta4.y = World.mouseY;

 if (isTouching(recta2, recta4))   {
   recta4.shapeColor = "red";
  recta2.shapeColor = "red";
 }
  else {
    recta4.shapeColor = "blue";
  recta2.shapeColor = "blue";
  }
  
  drawSprites();
}


