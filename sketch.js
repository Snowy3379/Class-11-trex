var trex, ground
var trexImg
var groundImg
var invisibleGround

function preload() {
    trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundImg = loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200)

    trex = createSprite(50, 160, 20, 50)
    trex.addAnimation("tr", trexImg)
    trex.scale = 0.6

    ground = createSprite(200, 180, 400, 20)
    ground.addImage("g", groundImg)

    invisibleGround = createSprite(200, 200, 400, 20)
    invisibleGround.visible = false
}

function draw() {
    background(220)

    ground.velocityX = -2
    if (ground.x < 0) {
        ground.x = ground.width / 2
    }

    if (keyDown("space") && trex.y > 140) {
        trex.velocityY = -10
        console.log(trex.y)
    }
    trex.velocityY += 0.5

    trex.collide(invisibleGround)
    drawSprites()
}