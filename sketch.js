var player1, background1, backgroundImg, trophyIMG;
var checkPntBg1, checkPntBg2, checkPntBg3;
function preload() {
    backgroundImg = loadImage("Full Map.png");
    trophyIMG = loadImage("trophy.jpg");
}
function setup() {
    createCanvas(displayWidth / 2, displayHeight - 150);
    player1 = createSprite(700, 650, 25, 25);
    player1.shapeColor = "red";
    checkPntBg1 = createSprite(70, 407, 35, 35);
    checkPntBg1.addImage("trophy", trophyIMG);
    checkPntBg1.scale = 0.1
   
    //Map - 1
    enemy1 = createSprite(580, 530, 20, 20);
    enemy1.shapeColor = "black"
    wall1 = createSprite(560, 540, 5, 50);
    wall1.shapeColor = "white"
    wall2 = createSprite(717, 540, 5, 50);
    wall2.shapeColor = "white"
    edges = createEdgeSprites();
    enemy1.velocityX = -2;
    enemy2 = createSprite(220, 410, 20, 20);
    enemy2.shapeColor = "black"
    wall3 = createSprite(204, 420, 5, 50);
    wall3.shapeColor = "white"
    wall4 = createSprite(654, 420, 5, 50);
    wall4.shapeColor = "white"
    enemy2.velocityX = -5;
   

}
function draw() {
    background("green");
    image(backgroundImg, 0, -1000, displayWidth / 2, displayHeight * 2);
    push()
    text(mouseX + " , " + mouseY, 600, 578);
    pop();

    if (enemy1.isTouching(wall1)) {
        enemy1.velocityX = enemy1.velocityX + 6
    }
    if (enemy1.isTouching(wall2)) {
        enemy1.velocityX = enemy1.velocityX - 6
    }
    if (enemy2.isTouching(wall3)) {
        enemy2.velocityX = enemy2.velocityX + 6
    }
    if (enemy2.isTouching(wall4)) {
        enemy2.velocityX = enemy2.velocityX - 6
    }

    if(enemy1.isTouching(player1)){
        text(GameOver, 300, 300);
    }

    if (player1.isTouching(checkPntBg1)) {
       textSize(100, 100);
       fill(0);
       text("You Win", 200, 500);
    }
    
    camera.position.y = player1.y

    if (keyDown("down")) {
        player1.y = player1.y + 5;
    }
    if (keyDown("up")) {
        player1.y = player1.y - 5;
    }
    if (keyDown("right")) {
        player1.x = player1.x + 5;
    }
    if (keyDown("left")) {
        player1.x = player1.x - 5;
    }




    drawSprites();


}

