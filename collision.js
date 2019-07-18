//variables
let myPosX = 25
let myPosY = 25
let mySpeed = 5
let width = 50
let height = 50

let enemyX, enemyY;
let enemyW = 50, enemyH = 50

let myLeft, myRight, myTop,myBottom
let enemyLeft, enemyRight, enemyTop,enemyBottom

let points = 0

let spiderman;
let venom;
let backdrop;

function setup(){
    createCanvas(500,500)
    background(0)

    //switch rectMode
    
    imageMode(CENTER);

    enemyX = random(25,475)
    enemyY = random(75, 475)
    
    textSize(15)

    //load image
    spiderman = loadImage("togepi.png")
    venom = loadImage("clefairy.png")
    backdrop = loadImage("Energetic_Forest.png")
}

function draw(){
    background(0)
    image(backdrop, width /2 ,height /2, height)
    // fill(255,0,0)
    // rect(enemyX,enemyY,enemyW,enemyH)
    // fill(0,0,255)
    // rect(myPosX,myPosY,50,50)

    //draw pokemon
    image(venom,enemyX, enemyY, enemyW, enemyH)

    //draw spiderman
    image(spiderman,myPosX,myPosY,50,50)
    
    //if left arrow is pressed
    if (keyIsDown(LEFT_ARROW)){
        myPosX -= mySpeed

    }
    if (keyIsDown(RIGHT_ARROW)){
        myPosX += mySpeed
    }
    if (keyIsDown(UP_ARROW)) {
        myPosY -= mySpeed
    }
    if (keyIsDown(DOWN_ARROW)){
        myPosY += mySpeed
    }
    
    if(myPosX <= 25){
        myPosX = 25
    }
    if (myPosX >= 475){
        myPosX= 475
    }
    if(myPosY <= 25){
        myPosY = 25
    }
    if (myPosY >= 475){
        myPosY= 475
    }

    // know my edges
    myLeft = myPosX - 25;
    myRight = myPosX + 25
    myTop = myPosY - 25
    myBottom = myPosY + 25

    //define enemies edges
    enemyLeft = enemyX - 25
    enemyRight = enemyX + 25
    enemyTop = enemyY - 25
    enemyBottom = enemyY + 25

   
    //detect collisions! (non-collision)
    if (myLeft > enemyRight|| myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){
        //do nothing
    }
    else{
        //there is collision
        console.log("Collision")

        //outputing text on canvas
        fill(random(255),random(255),random(255))
        text("You got them!!!!!",250, 480 )

        //generate a new position for the enemy
        enemyX = random(25,475)
        enemyY = random(150, 450)

        //points
        points ++;
    }
    fill(255)
    text("Body Count:" + points, 340, 25)
}



