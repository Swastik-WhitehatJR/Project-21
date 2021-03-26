var canvas;
var blockred;
var blockblack;
var blockorange;
var blockaqua;
var ball;
var walltop;
var wallright;
var wallbottom;
var wallleft;
var music;
var edges;

function preload()
{
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    blockred = createSprite(0,580,360,30);
    blockred.shapeColor = "red";

    blockblack = createSprite(295,580,200,30);
    blockblack.shapeColor = "black";

    blockorange = createSprite(515,580,200,30);
    blockorange.shapeColor = "orange";

    blockaqua = createSprite(740,580,220,30);
    blockaqua.shapeColor = "aqua";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background("pink");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(isTouching(ball,blockred) && bounce(ball,blockred)){
        ball.shapeColor = "red";
        music.play();
    }

    if(isTouching(ball,blockblack)){
        ball.shapeColor = "grey";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(isTouching(ball,blockorange) && bounce(ball,blockorange)){
        ball.shapeColor = "orange";
    }

    if(isTouching(ball,blockaqua) && bounce(ball,blockaqua)){
        ball.shapeColor = "aqua";
    }

    drawSprites();
}
