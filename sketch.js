var player
var score=0
var wormGroup

function preload(){
  wormImage= loadImage("images/worm.png")
  swampImage= loadImage("images/swampImg.png")
  playerImage= loadImage("images/frog.png")
}

function setup() {
  createCanvas(600,600);
  swamp= createSprite(300,300);
swamp.scale=2.5;
swamp.addImage(swampImage);

player=createSprite(40,550,30,30);
player.addImage(playerImage);
player.scale=0.4;



wormGroup= new Group();
 
}

function draw() {
 background("yellow");  
 // stroke("red");
 // noFill();
//ellipse(100,350,30,30);
 
  player.x=mouseX
  player.y=mouseY

  if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
    text("NO CHEATING!!",200,200);
    player.x=30;
    player.y=30;
  }
  generateWorms();
 for(var i=0; i<(wormGroup).length; i++)
 {
 var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }


  drawSprites()
textSize(20)
text("worms destroyed: " +score, 300,50);
}

function generateWorms()
{
if (frameCount % 30===0){
console.log(frameCount); 
  var worm = createSprite(random(40,380),random(290,380),40,5);
worm.shapeColor="green"
worm.addImage(wormImage);
worm.scale =random( 0.1,0.3)
worm.velocityX=random(-4,4);
worm.velocityY=random(-4,4);
wormGroup.add(worm);
}
}
