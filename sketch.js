var background1, background1Image, sea, seaImage;
var title1, title2, title1Image, title2Image, welcome, welcomeImage;
var mainFish, mainFishImg, fish1Image, fish2Image, fish3Image, fish4Image, fish5Image, fish6Image, fish1, fish2, fish3;
var level = 0;
var score = 0;
var edge1, edge2;
var playButton, playButtonImage;
var treasure, treasureImage;
var invisibleBlock, invisibleBlock2, invisibleBlock3, treasureInvisibeBlock, treasureInvisibeBlock2, treasureInvisibeBlock3, invisibleRestart, treasureInvisibeSound;
var rect1, rect2, rect3, rect4, heart, energy1, lifeImage, energyImage, coinImage, invisibleLife;
var gameover, gameoverImage, restartButton, restartImage;
var win, winImage;
//variables for level buttons
var level2Button, level2ButtonImage, level3Button, level3ButtonImage, guide, guideImage;
var changeLevelSound, collisionSound, treasureSound;
var wonGame, wonGameImage, trophy, trophyImage;

function preload() {
  // loading images and animation
  seaImage = loadImage("./assets/background.png");
  background1Image = loadImage("./assets/background2.png");

  title1Image = loadImage("./assets/title.png");
  title2Image = loadImage("./assets/title2.png");
  welcomeImage = loadImage("./assets/welcome.png");
  playButtonImage = loadImage("./assets/playButton.png");

  mainFishImg = loadAnimation("./assets/main-fish1.png", "./assets/main-fish2.png", "./assets/main-fish3.png", "./assets/main-fish4.png", "./assets/main-fish5.png")
  mainFishImg2 = loadAnimation("./assets/main-fish5.png");

  treasureImage = loadImage("./assets/treasure.png");

  fish1Image = loadImage("./assets/fish1.png");
  fish2Image = loadImage("./assets/fish2.png");
  fish3Image = loadImage("./assets/fish3.png");
  fish4Image = loadImage("./assets/fish4.png");

  winImage = loadImage("./assets/levelUp.png");
  level2ButtonImage = loadImage("./assets/level2.png");
  level3ButtonImage = loadImage("./assets/level3.png");

  gameoverImage = loadImage("./assets/gameOver.png");
  restartImage = loadImage("./assets/restart.png");

  lifeImage = loadImage("./assets/heart.png");
  energyImage = loadImage("./assets/Energy.png");
  fuelImage = loadImage("./assets/fuelimage.png");
  coinImage = loadImage("./assets/coin.png");

  wonGameImage = loadImage("./assets/win.png");
  trophyImage = loadImage("./assets/trophy.png");
  
  guideImage = loadImage("./assets/guide.png");
  collisionSound = loadSound("collision.mp3");
  treasureSound = loadSound("treasureSound.mp3");
  changeLevelSound = loadSound("changeLevelSound.mp3");  
 
}

function setup() {
  //creating canvas
  canvas = createCanvas(windowWidth, windowHeight);
  // creating background
  background1 = createSprite(width/2, height/2);
  background1.addImage(background1Image);
  background1.scale = 2
  /// creating title
  title1 = createSprite(width/2, height/2 - 100);
  title1.addImage(title1Image);
  title1.scale = 2;


  welcome = createSprite(width/2, height/2 + 100);
  welcome.addImage(welcomeImage);


  playButton = createSprite(width - 170, height/2 + 150);
  playButton.addImage(playButtonImage);
  playButton.scale = .7;

  //creating main fish
  mainFish = createSprite(90, height/2 - 20, 20, 20);
  mainFish.addAnimation("floating", mainFishImg);

  treasure = createSprite(width + 150, height/2 + 150)
  treasure.addImage(treasureImage);
  //creating backgroung2 for 1st, 2nd, 3rd levels
  sea=createSprite(width/2,height/2 - 70, 100, 100);
  sea.addImage(seaImage);
  sea.scale = 4;
  // creating energy and life bars
  rect1 = createSprite(width/3 + 50, height/3-150, 200, 20);
  rect1.shapeColor = "white";

  rect2 = createSprite(width/3 + 50, height/3-150, 200, 20);
  rect2.shapeColor = "red";

  rect3 = createSprite(width/3 + 50, height/3-180, 200, 20);
  rect3.shapeColor = "white";

  rect4 = createSprite(width/3 + 50, height/3-180, 200, 20);
  rect4.shapeColor = "yellow";

  invisibleRestart = createSprite(width/3 - 250, height/3-180, 10, 70);
  invisibleRestart.visible = true;

  invisibleLife = createSprite(width/3 - 240, height/3-180, 210, 22);
  invisibleLife.addImage(seaImage);
  invisibleLife.scale = 0.9;

  title2 = createSprite(width/3 - 240, height/3 - 140, 20, 20);
  title2.addImage(title2Image);
  title2.scale = 1

  invisibleLife.depth = title2.depth;
  title2.depth += 1;

  //image(lifeImage, 375, 55, 10, 10);
  heart = createSprite(width/3 - 80, height/3-150, 10, 10);
  heart.addImage(lifeImage);
  heart.scale = .2

  //image(lifeImage, 375, 55, 10, 10);
  energy1 = createSprite(width/3 - 80, height/3-180, 10, 10);
  energy1.addImage(energyImage);
  energy1.scale = .5

  mainFish.depth = sea.depth;
  mainFish.depth +=1;

  treasure.depth = sea.depth;
  treasure.depth += 1;

  edge1 = createSprite(width/2, 1, width, 5);
  edge1.visible = false;
  edge1.depth = mainFish.depth;

  edge2 = createSprite(width/2, height-1, width, 20);
  edge2.visible = false;
  edge2.depth = mainFish.depth;
  // creating invisible blocks for spowning fishes only when they touch these blocks
  invisibleBlock = createSprite(50, height/2 - 20, 5500, height);
  invisibleBlock.visible = false;

  invisibleBlock2 = createSprite(width/3, height/2, 7000, height);
  invisibleBlock2.visible = false;

  invisibleBlock3 = createSprite(width/3, height/2, 9500, height);
  invisibleBlock3.visible = false;

  treasureInvisibeBlock = createSprite(3900, height/2, 200, height);
  treasureInvisibeBlock.visible = false;
  treasureInvisibeSound = createSprite(width-10, height/2, 30, height);
  treasureInvisibeSound.visible = false;

  treasureInvisibeBlock2 = createSprite(4000, height/2, 200, height);
  treasureInvisibeBlock2.visible = false;

  treasureInvisibeBlock3 = createSprite(6000, height/2, 200, height);
  treasureInvisibeBlock3.visible = false;

  // creating groups
  fish1Group = createGroup();
  fish2Group = createGroup();
  fish3Group = createGroup();
  fish4Group = createGroup();
  energyGroup = createGroup();
  coinGroup = createGroup();

  // creating game over and restart button
  gameover = createSprite(width/2, height/2 - 50, 20, 20);
  gameover.addImage(gameoverImage);
  gameover.scale = 1.4
  gameover.visible = false;
  

  win = createSprite(width/2, height/2 - 50, 30, 30);
  win.addImage(winImage);
  win.scale = 1.5;
  level2Button = createSprite(width/2, height/2+50, 20, 10);
  level2Button.addImage(level2ButtonImage);
  level2Button.scale = .6;
  level3Button = createSprite(width/2, height/2+50, 20, 10);
  level3Button.addImage(level3ButtonImage);
  level3Button.scale = .6;

  trophy = createSprite(width/2, height/3-50, 20,20);
  trophy.addImage(trophyImage);
  trophy.scale = 1
  wonGame = createSprite(width/2, height/2+100, 20, 20);
  wonGame.addImage(wonGameImage);
  wonGame.scale = 1;

  restartButton = createSprite(width/2, height/2 + 100, 20, 10);
  restartButton.addImage(restartImage);
  restartButton.scale = .8;
  restartButton.visible = false;
  
  guide = createSprite(width/2, height/3-100, 20, 10);
  guide.addImage(guideImage);
  guide.scale = 1
  
  mainFish.setCollider("rectangle",0,0,50,50);
  mainFish.debug = false;
  
}

function draw() {
  background("grey");

  if(level === 0) {
    // adjusting visiblity
    sea.visible = false;
    mainFish.visible = false;
    treasure.visible = false;
    rect1.visible = false;
    rect2.visible = false;
    rect3.visible = false;
    rect4.visible = false;
    heart.visible = false;
    energy1.visible = false;
    title2.visible = false;
    invisibleLife.visible = false;
    win.visible = false;
    guide.visible = false;
    level2Button.visible = false;
    level3Button.visible = false;
    trophy.visible = false;
    wonGame.visible = false;

    if(mousePressedOver(playButton)) {
      level = 1;
      changeLevelSound.play();
    }

  }
  
  if(level === 1) {
    // adujusting visiblity
    sea.visible = true;
    mainFish.visible = true;
    rect1.visible = true;
    rect2.visible = true;
    rect3.visible = true;
    rect4.visible = true;
    heart.visible = true;
    energy1.visible = true;
    title2.visible = true;
    invisibleLife.visible = true;
    gameover.visible = false;
    restartButton.visible = false;
    win.visible = false;
    guide.visible = false;
    level2Button.visible = false;
    level3Button.visible = false;

    // colliding min fish with edges
    mainFish.collide(edge1);

    //decreasing energy bar
    rect4.x -= 0.2;

    //spawning coins
    spawnCoins();
    
    invisibleBlock.velocityX = -3
    treasureInvisibeBlock.velocityX = -3.3
    //giving velocity
    if(keyDown(UP_ARROW)) {
      mainFish.velocityY -= 1;
    }
    if(keyDown(DOWN_ARROW)) {
      mainFish.velocityY += 1;
    }
  
    mainFish.velocityY += .1;

    if(mainFish.isTouching(treasureInvisibeBlock)) {
      //making treasure visible
      treasure.visible = true;
      treasure.velocityX = -2.5;
      treasureInvisibeSound.velocityX = -2.5;
      
    }

    if(treasureInvisibeSound.isTouching(mainFish)) {
      treasureSound.play();
    }
  
    if(invisibleBlock.isTouching(mainFish)) {
      spawnFishes();
    }

    // decreasing life bar
    if(fish1Group.isTouching(mainFish)) {
      rect2.x -= 7
      mainFish.x += 20
      mainFish.x -= 5
      collisionSound.play();
    } else if(fish2Group.isTouching(mainFish)) {
      rect2.x -= 6
      mainFish.x += 40
      mainFish.x -= 5
      collisionSound.play();
    } else if(fish3Group.isTouching(mainFish)) {
      rect2.x -= 6
      mainFish.x += 40
      mainFish.x -= 5
      collisionSound.play();
    } else if(fish4Group.isTouching(mainFish)) {
      rect2.x -= 7
      mainFish.x += 20
      mainFish.x -= 5
      collisionSound.play();
    } else if(mainFish.isTouching(edge2)) {
      rect2.x -= 9
      mainFish.y -= 150
      collisionSound.play();
    } else if(mainFish.isTouching(invisibleLife)) {
      rect2.x -= 9
      mainFish.y += 70
      collisionSound.play();
    }

    //making game over
    if(rect2.isTouching(invisibleRestart) || rect4.isTouching(invisibleRestart)) {
      gameOver();
      fish1Group.destroyEach();
      fish2Group.destroyEach();
      fish3Group.destroyEach();
      fish4Group.destroyEach();
      energyGroup.destroyEach();
      coinGroup.destroyEach();
    }

    //spawning energies
    spawnEnergy();

    //increasing energy bar when fish touches energy
    mainFish.overlap(energyGroup, function(collector, collected) {
      rect4.x += 40
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
      treasureSound.play();
    });
    //increasing coins
    mainFish.overlap(coinGroup, function(collector, collected) {
      score += 1;
      collected.remove();
      treasureSound.play();
    });

    if(energyGroup.isTouching(fish3Group)) {
      energyGroup.x += 40;
    }

    if(treasure.isTouching(mainFish)) {
      changeLevel();
      level2Button.visible = true;
      guide.visible = true;

      if(mousePressedOver(level2Button)) {
        //chinging level
        level = 2;
        changeLevelSound.play();
        mainFish.x = 90
        rect2.x = width/3+50;
        rect4.x = width/3+50;
        treasure.x = width + 150;
        treasure.velocityX = 0;
        energyGroup.destroyEach();
        coinGroup.destroyEach();
        treasure.visible = false;
        treasureInvisibeSound.x = width-10;
        treasureInvisibeSound.velocityX = 0;
      }
    }

  }

  if(level === 2) {
    // adujusting visiblity
    sea.visible = true;
    mainFish.visible = true;
    rect1.visible = true;
    rect2.visible = true;
    rect3.visible = true;
    rect4.visible = true;
    heart.visible = true;
    energy1.visible = true;
    title2.visible = true;
    invisibleLife.visible = true;
    gameover.visible = false;
    restartButton.visible = false;
    win.visible = false;
    guide.visible = false;
    level2Button.visible = false;
    level3Button.visible = false;
    trophy.visible = false;
    wonGame.visible = false;

    mainFish.changeAnimation(mainFishImg  )

    mainFish.collide(edge1);

    //decreasing energy bar
    rect4.x -= 0.2;

    //spawning coins
    spawnCoins();
  
    invisibleBlock2.velocityX = -3
    treasureInvisibeBlock2.velocityX = -3
  
    if(keyDown(UP_ARROW)) {
      mainFish.velocityY -= 1;
    }
    if(keyDown(DOWN_ARROW)) {
      mainFish.velocityY += 1;
    }
  
    mainFish.velocityY += .1;

    if(mainFish.isTouching(treasureInvisibeBlock2)) {
      treasure.visible = true;
      treasure.velocityX = -2.5;
      treasureInvisibeSound.velocityX = -2.5;
      
    }

    if(treasureInvisibeSound.isTouching(mainFish)) {
      treasureSound.play();
    }
  
    if(invisibleBlock2.isTouching(mainFish)) {
      spawnFishes();
      fish1Group.setVelocityXEach(-5);
      fish2Group.setVelocityXEach(-6);
      fish3Group.setVelocityXEach(-7.5);
      fish4Group.setVelocityXEach(-5.2);
    }

    if(fish1Group.isTouching(mainFish)) {
      rect2.x -= 9
      mainFish.x += 20.1
      collisionSound.play();
    } else if(fish2Group.isTouching(mainFish)) {
      rect2.x -= 9.3
      mainFish.x += 41
      collisionSound.play();
    } else if(fish3Group.isTouching(mainFish)) {
      rect2.x -= 9
      mainFish.x += 41
      collisionSound.play();
    } else if(fish4Group.isTouching(mainFish)) {
      rect2.x -= 9.5
      mainFish.x += 21
      collisionSound.play();
    } else if(mainFish.isTouching(edge2)) {
      rect2.x -= 11
      mainFish.y -= 150
      collisionSound.play();
    } else if(mainFish.isTouching(invisibleLife)) {
      rect2.x -= 12
      mainFish.y += 70
      collisionSound.play();
    }

    if(rect2.isTouching(invisibleRestart) || rect4.isTouching(invisibleRestart)) {
      gameOver();
      fish1Group.destroyEach();
      fish2Group.destroyEach();
      fish3Group.destroyEach();
      fish4Group.destroyEach();
      energyGroup.destroyEach();
      coinGroup.destroyEach();
      //rect2.collide(invisibleRestart);
      //rect4.collide(invisibleRestart);
    }

    spawnEnergy();

    /*if(mainFish.isTouching(energyGroup)) {
      rect4.x += 40;
      energyGroup.destroyEach();
    }*/

    mainFish.overlap(energyGroup, function(collector, collected) {
      rect4.x += 40
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
      treasureSound.play();
    });

    mainFish.overlap(coinGroup, function(collector, collected) {
      score += 1;
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
      treasureSound.play();
    });

    if(energyGroup.isTouching(fish3Group)) {
      energyGroup.x += 40;
    }

    if(treasure.isTouching(mainFish)) {
      changeLevel();
      level3Button.visible = true;

      if(mousePressedOver(level3Button)) {
        level = 3;
        changeLevelSound.play();
        mainFish.x = 90
        rect2.x = width/3+50;
        rect4.x = width/3+50;
        treasure.x = width + 150;
        treasure.velocityX = 0;
        energyGroup.destroyEach();
        coinGroup.destroyEach();
        treasure.visible = false;
        treasureInvisibeSound.x = width-10;
        treasureInvisibeSound.velocityX = 0;
      }

    }
  }

  if(level === 3) {
    sea.visible = true;
    mainFish.visible = true;
    rect1.visible = true;
    rect2.visible = true;
    rect3.visible = true;
    rect4.visible = true;
    heart.visible = true;
    energy1.visible = true;
    title2.visible = true;
    invisibleLife.visible = true;
    gameover.visible = false;
    restartButton.visible = false;
    win.visible = false;
    guide.visible = false;
    level2Button.visible = false;
    level3Button.visible = false;
    trophy.visible = false;
    wonGame.visible = false;

    mainFish.changeAnimation(mainFishImg);

    mainFish.collide(edge1);

    //decreasing energy bar
    rect4.x -= 0.19;

    //spawning coins
    spawnCoins();
  
    invisibleBlock3.velocityX = -3
    treasureInvisibeBlock3.velocityX = -3
  
    if(keyDown(UP_ARROW)) {
      mainFish.velocityY -= 1;
    }
    if(keyDown(DOWN_ARROW)) {
      mainFish.velocityY += 1;
    }
  
    mainFish.velocityY += .1;

    if(mainFish.isTouching(treasureInvisibeBlock3)) {
      treasure.visible = true;
      treasure.velocityX = -2.5;
      treasureInvisibeSound.velocityX = -2.5;
      
    }

    if(treasureInvisibeSound.isTouching(mainFish)) {
      treasureSound.play();
    }
  
    if(invisibleBlock3.isTouching(mainFish)) {
      spawnFishes();
      fish1Group.setVelocityXEach(-6.2);
      fish2Group.setVelocityXEach(-7.5);
      fish3Group.setVelocityXEach(-10);
      fish4Group.setVelocityXEach(-7.2);
    }

    if(fish1Group.isTouching(mainFish)) {
      rect2.x -= 11
      mainFish.x += 20.1
      collisionSound.play();
    } else if(fish2Group.isTouching(mainFish)) {
      rect2.x -= 10.2
      mainFish.x += 41
      collisionSound.play();
    } else if(fish3Group.isTouching(mainFish)) {
      rect2.x -= 10.5
      mainFish.x += 41
      collisionSound.play();
    } else if(fish4Group.isTouching(mainFish)) {
      rect2.x -= 10
      mainFish.x += 21
      collisionSound.play();
    } else if(mainFish.isTouching(edge2)) {
      rect2.x -= 12
      mainFish.y -= 150
      collisionSound.play();
    } else if(mainFish.isTouching(invisibleLife)) {
      rect2.x -= 13
      mainFish.y += 70
      collisionSound.play();
    }

    if(rect2.isTouching(invisibleRestart) || rect4.isTouching(invisibleRestart)) {
      gameOver();
      fish1Group.destroyEach();
      fish2Group.destroyEach();
      fish3Group.destroyEach();
      fish4Group.destroyEach();
      energyGroup.destroyEach();
      coinGroup.destroyEach();
      //rect2.collide(invisibleRestart);
      //rect4.collide(invisibleRestart);
    }

    spawnEnergy();

    /*if(mainFish.isTouching(energyGroup)) {
      rect4.x += 40;
      energyGroup.destroyEach();
    }*/

    mainFish.overlap(energyGroup, function(collector, collected) {
      rect4.x += 40
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
      treasureSound.play();
    });

    mainFish.overlap(coinGroup, function(collector, collected) {
      score += 1;
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
      treasureSound.play();
    });

    if(energyGroup.isTouching(fish3Group)) {
      energyGroup.x += 40;
    }

    if(treasure.isTouching(mainFish)) {
      win.visible = false;
      guide.visible = false;
      welcome.visible = false;
      rect1.visible = false;
      rect2.visible = false;
      rect3.visible = false;
      rect4.visible = false;
      playButton.visible = false;
      trophy.visible = true;
      wonGame.visible = true;
      background1.visible = true;
      sea.visible = false;
      treasure.visible = false;
      mainFish.visible = false;
      title2.visible = false;
      invisibleLife.visible = false;
      energy1.visible = false;
      heart.visible = false;
      restartButton.visible = true;
      restartButton.y = height - 100

      mainFish.changeAnimation(mainFishImg2)
      mainFish.velocityY = 0;
      treasure.velocityX = 0;
      rect2.x = 0;
      rect4.x = 0;
      invisibleBlock.velocityX = 0;
      treasureInvisibeBlock.velocityX = 0;
      energyGroup.setVelocityXEach(0)
      coinGroup.setVelocityXEach(0);
      fish1Group.setVelocityXEach(0);
      fish2Group.setVelocityXEach(0);
      fish3Group.setVelocityXEach(0);
      fish4Group.setVelocityXEach(0);
    }
  }


  drawSprites()
  //text("x: "+ mouseX +"y: "+ mouseY, mouseX, mouseY);
  if(level === 1 || level ===2 || level === 3) {
  fill("#d7fc05")
  textSize(25)
  text("Coins: "+score, width/2+100, height/3-150)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function spawnFishes() {

    if (frameCount % 365 === 0) {
      var fish1 = createSprite(width+50,height/3-100,40,10);
      fish1.y = Math.round(random(height/2 + 10,height/2 + 100));
      fish1.addImage(fish1Image);
      fish1.scale = .7;
      fish1.velocityX = -5.1;
      fish1.lifetime = +400
      fish1.setCollider("rectangle",0,0,140,80);
      fish1.debug = false;
      fish1Group.add(fish1);
      
    }
    fish1Group.depth = mainFish.depth;

    if (frameCount % 195 === 0) {
      var fish2 = createSprite(width+80,height/3-100,40,10);
      fish2.y = Math.round(random(height/3-40,height/2-100));
      fish2.addImage(fish2Image);
      fish2.scale = 1;
      fish2.velocityX = -4.1
      fish2.lifetime = +400
      fish2.setCollider("rectangle",0,0,300,90);
      fish2.debug = false
      fish2Group.add(fish2);
      
    }
    fish2Group.depth = mainFish.depth;

    if (frameCount % 265 === 0) {
      var fish3 = createSprite(width+80,height/3-100,40,10);
      fish3.y = Math.round(random(height/2 + 40,height-80));
      fish3.addImage(fish3Image);
      fish3.scale = 1;
      fish3.velocityX = -4.7
      fish3.lifetime = +350
      fish3.setCollider("rectangle",-20,0,200,170);
      fish3.debug = false
      fish3Group.add(fish3);
      
    }
    fish3Group.depth = mainFish.depth;

    if (frameCount % 415 === 0) {
      var fish4 = createSprite(width+50,height/3-100,40,10);
      fish4.y = Math.round(random(height/3 - 130,height/3 - 70));
      fish4.addImage(fish4Image);
      fish4.scale = .7;
      fish4.velocityX = -2.6;
      fish4.lifetime = +500;
      fish4.setCollider("rectangle",0,0,100,50);
      fish4.debug = false
      fish4Group.add(fish4);

      
    }
    fish4Group.depth = mainFish.depth;



}

function spawnEnergy() {
  if (frameCount % 250 === 0) {
    var energy = createSprite(width+50,height/3-10,40,10);
    energy.y = Math.round(random(height/3 - 50,height/2 + 100));
    energy.addImage(energyImage);
    energy.scale = .7;
    energy.velocityX = -4;
    energy.lifetime = +500
    energy.debug = false;
    energyGroup.add(energy);
    
  }
  energyGroup.depth = sea.depth;
  energyGroup.depth += 1;
  energyGroup.depth = fish1Group.depth;
  energyGroup.depth = fish2Group.depth;
  energyGroup.depth = fish3Group.depth;
  energyGroup.depth = fish4Group.depth;

}

function spawnCoins() {
  if (frameCount % 100 === 0) {
    var coin = createSprite(width+50,height/3-10,40,10);
    coin.y = Math.round(random(height/3 - 100,height - 100));
    coin.addImage(coinImage);
    coin.scale = .3;
    coin.velocityX = -4;
    coin.lifetime = +500
    coin.debug = false;
    coinGroup.add(coin);
    
  }
}

function gameOver() {
  gameover.visible = true;
  restartButton.visible = true;
  mainFish.velocityY = 0;
  mainFish.changeAnimation(mainFishImg2);
  invisibleBlock.velocityX = 0;
  treasureInvisibeBlock.velocityX = 0;
  treasure.velocityX = 0;
  energyGroup.setVelocityXEach(0)
  coinGroup.setVelocityXEach(0);
  fish1Group.setVelocityXEach(0);
  fish2Group.setVelocityXEach(0);
  fish3Group.setVelocityXEach(0);
  fish4Group.setVelocityXEach(0);

  gameover.depth = fish1Group.depth;
  gameover.depth += 1;
  gameover.depth = fish2Group.depth;
  gameover.depth += 1;
  gameover.depth = fish3Group.depth;
  gameover.depth += 1;
  gameover.depth = fish4Group.depth;
  gameover.depth += 1;

  if(mousePressedOver(restartButton)) {
    gameover.visible = false;
    restartButton.visible = false;
    level = 0;
    fish1Group.destroyEach();
    fish2Group.destroyEach();
    fish3Group.destroyEach();
    fish4Group.destroyEach();
    energyGroup.destroyEach();
    coinGroup.destroyEach();
    window.location.reload();

  }
}

function changeLevel() {
  win.visible = true;
  mainFish.velocityY = 0;
  mainFish.changeAnimation(mainFishImg2)
  treasure.velocityX = 0;
  rect2.x = 0;
  rect4.x = 0;
  invisibleBlock.velocityX = 0;
  treasureInvisibeBlock.velocityX = 0;
  coinGroup.destroyEach();
  energyGroup.destroyEach();
  energyGroup.setVelocityXEach(0)
  coinGroup.setVelocityXEach(0);
  fish1Group.setVelocityXEach(0);
  fish2Group.setVelocityXEach(0);
  fish3Group.setVelocityXEach(0);
  fish4Group.setVelocityXEach(0);

}
