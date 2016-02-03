
var AM = new AssetManager();

function BoundingRect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.top = this.y;
    this.left = this.x;
    this.bottom = this.y + this.height;
    this.right = this.x + this.width;
}


AM.queueDownload("./img/area51main.png");
AM.queueDownload("./img/bird_enemy_spritesheet.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();


    var levelPlan = [
    "X B            X           ",
    "X              X           ",
    "X              X           ",
    "X              X           ",
    "X         XXXXXX           ",
    "X                         X",
    "X                         X",
    "XXXXXX                    X",
    "X              XXXXXXXXXXXX",
    "X        XXXXXXX           ",
    "X              X           ",
    "X @   XXXXXXXXXX           ",
    "XXXXXXXXXXXXXXXX           "
    ];
    var currLevel = new Level(levelPlan, gameEngine);
  
    var ch;
    for (var i = 0; i < currLevel.grid[0].length; i++) {
      for (var j = 0; j < currLevel.grid.length; j++) {
        ch = currLevel.grid[j][i];
        if (ch === "player") {
          gameEngine.addEntity(new PlayerOne(gameEngine, i * 50, j * 50 - 125, AM.getAsset("./img/area51main.png")));
        } else if (ch === "bird") {
          gameEngine.addEntity(new BirdEnemy(gameEngine, i * 50, j * 50, AM.getAsset("./img/bird_enemy_spritesheet.png")));
        } else if (ch === "platform") {
          gameEngine.platforms.push((new Platform(gameEngine, i * 50, j * 50, 50, 50)));
        }
      }
    }

    console.log("All Done!");
});
