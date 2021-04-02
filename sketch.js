var balloon,balloonimg1,balloonimg2;
var Postion,database
var background_Img;
function preload(){
  balloonimg1 = loadAnimation("HotAirBalloon-02.png","HotAirBalloon-02.png","HotAirBalloon-02.png","HotAirBalloon-03.png","HotAirBalloon-03.png","HotAirBalloon-03.png","HotAirBalloon-04.png","HotAirBalloon-04.png","HotAirBalloon-04.png");
 balloonimg2 = loadAnimation("HotAirBalloon-02.png")
  background_Img = loadImage("HotAirBalloon-01.png");
}
function setup() {
  database = firebase.database();

  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
balloon.addAnimation("HotAirBalloon",balloonimg2);
  var balloonPosition=database.ref( 'balloon/height');

  balloonPosition. on("value", readPosition, showError);
  
}

function draw() {
  background(background_Img); 
  if (keyDown (LEFT_ARROW) ) {
    updateHeight(-10,0);
    balloon.addAnimation("HotAirBalloon",balloonimg1)
    }
    else if(keyDown (RIGHT_ARROW) ) {
      updateHeight(10,0);
      balloon.addAnimation("HotAirBalloon",balloonimg1)    
    }
    else if(keyDown (UP_ARROW) ) {
      updateHeight(0,-10);
      balloon.addAnimation("HotAirBalloon",balloonimg1)    
    }
    else if(keyDown (DOWN_ARROW) ) {
      updateHeight(0,10);
      balloon.addAnimation("HotAirBalloon",balloonimg1)    }     
  drawSprites();
}
function updateHeight(x, y) {
  database. ref(' balloon/height' ) . set({
  'x': height.x + x ,
  'y': height.y + y
  })
}
  function readHeight(data) {
  height = data. val( );
  balloon.x = height.x;
  balloon.y = height.y;
  }
  function showError(){
  console. log("Error in writing to the database");
  }