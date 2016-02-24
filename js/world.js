//world.js
function World(name, gameEngine) {
  this.game = gameEngine;
  this.name = name;
  this.rooms = [];
  for (var i = 0; i < 10; i++) {
    this.rooms[i] = [];
    for (var j = 0; j < 10; j++) {
      this.rooms[i][j] = j;
    }
  }
  this.currentRoom = null;
  this.makeRoomPlans(name);
};

World.prototype.makeRoomPlans = function (name) {
  var builder = [];
  for (var i = 0; i < 10; i++) {
    builder[i] = [];
    for (var j = 0; j < 10; j++) {
      builder[i][j] = null;
    }
  }

  if (name === "Area 51") {
    builder = [
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "X                                              O",
      "X                                              O",
      "X                                              O",
      "XW                                         E   O",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      // "XXXXXXXXXXXXXXXXXXXX                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "O             B    X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "O                  X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "O  @               X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X B                XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X     B            XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                                         XX",
      // "XXXXXXXXXXXXXX     X                                         XX",
      // "XXXXXXXXXXXXXX     X                                         XX",
      // "XXXXXXXXXXXXXX     X                                         XX",
      // "XXXXXXXXXXXXXX     X       X     XXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                          X     XXXXXXXXXXXXXXXXXXXXX       XX",
      // "X B           B            X     XXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                          XXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X  S             XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XX                                                           XX",
      // "XX              B            B                   B           XX",
      // "O                                                            XX",
      // "O            XX           XX            XX                   XX",
      // "O            XX           XX            XX                    O",
      // "O            XX           XX            XX                    O",
      // "O            XX           XX            XX                    O",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    ];
    this.rooms[0][6] = new Level(builder, 0, 6, this.game);
    builder = [
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "O                 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "O                 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "O                 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "O W       S       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXOOOOOOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      // "X                  X                                          O",
      // "X                  X        B                                 O",
      // "X                  X                                          O",
      // "XXXXXXXXXXXXXX     X                                          O",
      // "XXXXXXXXXXXXXX     X                                      @   O",
      // "XXXXXXXXXXXXXX     X             XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X  S               XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     XXXXXXXX           XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                XXXXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X                  XXXXXXXXXXXXXXXXXXXXXXXXX",
      // "XXXXXXXXXXXXXX     X             XXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                                XXXXXXXXXXXXXXXXXXXXX       XX",
      // "X B                              XXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                          XXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "X                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX",
      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XX"

    ];
    this.rooms[0][7] = new Level(builder, 0, 7, this.game);
    builder = [
      "XXXXXOOOOOOXXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX  N   XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXX  S   XXXXX",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXXOOOOOOXXXXX",

      // "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      // "X                                              X",
      // "X                                              X",
      // "X                                              X",
      // "X                                              X",
      // "X                                              X",
      // "X                                              X",
      // "X                                              X",
      // "X                 X      X                     X",
      // "O                 X      X                     X",
      // "O                 X      X                     X",
      // "O  @              X      X                     X",
      // "XXXXXXXXXXXXXXXXXXX111111XXXXXXXXXXXXXXXXXXXXXXX"
    ];
    this.rooms[1][7] = new Level(builder, 1, 7, this.game);
    builder = [
      "XXXXXXXXXXXXXXXXXXXOOOOOOXXXXXXXXXXXXXXXXXXXXXXX",
      "O            XXXXXX      XXXXXXXXXXXXXXXXXXXXXXX",
      "O            XXXXXX      XXXXXXXXXXXXXXXXXXXXXXX",
      "O W          XXXXXX   N  XXXXXXXXXXXXXXXXXXXXXXX",
      "XXXX         XXXXXX      XXXXXXXXXXXXXXXXXXXXXXX",
      "X            XXXXXX      XXXXXXXXXXXXXXXXXXXXXXX",
      "X            XXXXXX      XXXXXXXXXXXXXXXXXXXXXXX",
      "X       XXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXXXX",
      "X                                              X",
      "X                                              X",
      "XXXXXX                                         X",
      "X                                              O",
      "X                                              O",
      "X                                          E   O",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    ];
    this.rooms[2][7] = new Level(builder, 2, 7, this.game);
    builder = [
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "X                                              X",
      "XXXXXXXXXX                                     X",
      "X  B     X                                     X",
      "X        X                                     O",
      "X        X                                     O",
      "X        X        XXXXXXXX                 E   O",
      "X        X        X      X        XXXXXXXXXXXXXX",
      "XXXXXXXXXX        X D    X        X            X",
      "O              XXXX      XXXX     X            X",
      "O              XXXX      XXXX     X            X",
      "O W            XXXX      XXXX     X            X",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    ];
    this.rooms[2][8] = new Level(builder, 2, 8, this.game);
    builder = [
      "XXXXXXXXXXXXXXXX",
      "O              X",
      "O              X",
      "O W            X",
      "XXXXXXX        X",
      "X              X",
      "X              X",
      "X         XXXXXX",
      "X              X",
      "X              X",
      "XXXXXXX        X",
      "X              X",
      "X              X",
      "X         XXXXXX",
      "X              X",
      "X              X",
      "X              X",
      "X    XXXXXX    X",
      "X              X",
      "X              X",
      "X S            X",
      "XXXXX      XXXXX",
      "XXXXX      XXXXX",
      "XXXXXOOOOOOXXXXX"
    ]
    this.rooms[2][9] = new Level(builder, 2, 9, this.game);
    this.currentRoom = this.rooms[0][6];
  } else if (name === "World 1") {
    var builder = [];

    builder = [
      "XXXXXXXX000000XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "X      X      X                                X",
      "X      X      X                                X",
      "X      X  @   X                                X",
      "X      X      X                                X",
      "X                                              X",
      "X                                              X",
      "X                                              X",
      "X                 X      X                     X",
      "O                 X      X                     X",
      "O                 X      X                     X",
      "O                 X      X                     X",
      "XXXXXXXXXXXXXXXXXXX000000XXXXXXXXXXXXXXXXXXXXXXX"
    ];
    this.rooms[0][7] = new Level(builder, 0, 7, this.game);

    builder = [
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "X                                              X",
    "X                                              X",
    "X                                              X",
    "X                                              X",
    "X                                              X",
    "X                                              X",
    "X                                              X",
    "X                 X      X                     X",
    "X                 X      X                     O",
    "X                 X      X                     O",
    "X                 X      X               @     O",
    "XXXXXXXXXXXXXXXXXXX000000XXXXXXXXXXXXXXXXXXXXXXX"
  ];
  this.rooms[0][6] = new Level(builder, 0, 6, this.game);
  }
};
