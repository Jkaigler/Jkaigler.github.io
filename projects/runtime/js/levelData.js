var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        currentLevel: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700,  y: 390 },
          { type: "sawblade", x: 1500, y: groundY },
          { type: "sawblade", x: 2600, y: 390 },
          { type: "enemy", x: 450,  y: 474 },
          { type: "enemy", x: 1250, y: 474 },
          { type: "enemy", x: 2300, y: 474 },
          { type: "reward", x: 950, y: 380 },
          { type: "reward", x: 1800, y: 380 },
          { type: "reward", x: 2900, y: 380 },
          { type: "marker", x: 3500, y: 474 },
        ],
      },
      {
        name: "Robot Rampage",
        currentLevel: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 1500, y: 390 },
          { type: "sawblade", x: 2600, y: groundY },
          { type: "enemy", x: 450, y: 474 },
          { type: "enemy", x: 1250, y: 474 },
          { type: "enemy", x: 2300, y: 474 },
          { type: "reward", x: 950, y: 380 },
          { type: "reward", x: 1800, y: 380 },
          { type: "reward", x: 2900, y: 380 },
          { type: "marker", x: 3500, y: 474 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

var gameItems = [i];
for (var i = 0; i < createSawBlade.length; i++) {
  var createSawBlade = createSawBlade[i];

  // code to do something with each element
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
