$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 25); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    createPlatform(000, 350, 200, 20);
    createPlatform(300, 450, 200, 20);
    createPlatform(600, 350, 200, 20);
    createPlatform(900, 450, 200, 20);
    createPlatform(1200, 350, 200, 20);
    
    
    // TODO 2
    createCollectable("kennedi", 400, 100);
    createCollectable("grace", 700, 000);
    createCollectable("max", 1000, 000);
    
    
    
    
    // TODO 3
    createCannon("bottom", 190, 500);
    createCannon("top", 610, 600);
    createCannon("bottom", 790, 500);
    createCannon("top", 1210, 600);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
