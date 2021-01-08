var canvas;
var music;
var box;
var board1 , board2 , board3 , board4 ;
var edge1 , edge2 , edge3 , edge4 ;

function preload(){

    music = loadSound("music.mp3");
}


function setup(){

    canvas = createCanvas(800,600);

    box = createSprite(400,200,40,40);
    box.shapeColor = "white"
    box.velocityX = 10;
    box.velocityY = 18;

    board1 = createSprite(100,585,200,30);
    board1.shapeColor = "red";
    board2 = createSprite(299,585,200,30);
    board2.shapeColor = "green";
    board3 = createSprite(499,585,200,30);
    board3.shapeColor = "yellow";
    board4 = createSprite(699,585,200,30);
    board4.shapeColor = "violet";

    edge1 = createSprite(10,300,20,600);
    edge1.visible = false ;
    edge2 = createSprite(790,300,20,600);
    edge2.visible = false ; 
    edge3 = createSprite(400,10,800,20);
    edge3.visible = false ;
    edge4 = createSprite(400,10,800,20);
    edge4.visible = false ;

}

function draw() {

    background("black");

if(box.isTouching(board1)){
    box.velocityX = 0;
    box.velocityY = 0;
    box.shapeColor = "red";
    music.play();
}

else if(box.isTouching(board2)){
    box.velocityX = 0;
    box.velocityY = 0;
    box.shapeColor = "green";
    music.play();
}

else if(box.isTouching(board3)){
    box.velocityX = 0;
    box.velocityY = 0;
    box.shapeColor = "yellow";
    music.play();
}

else if(box.isTouching(board4)){
    box.velocityX = 0;
    box.velocityY = 0;
    box.shapeColor = "violet";
    music.play();
}
    
drawSprites();
}







