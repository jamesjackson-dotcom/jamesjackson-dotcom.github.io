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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
// adding comment to check push requirements
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(700, 700, 400, 20, "#ffffffff")
    createPlatform(400, 590, 400, 20, "#ffffffff")
    createPlatform(300, 470, 300, 20, "#ffffffff")
    createPlatform(700, 400, 400, 20, "#ffffffff")
    createPlatform(1000, 300, 400, 20, "#ffffffff")
    createPlatform(700, 170, 400, 20, "#ffffffff")







    // TODO 3 - Create Collectables
    createCollectable("diamond", 320, 430, )
    createCollectable("database", 1300, 250)
    createCollectable("steve", 750, 130)




    
    // TODO 4 - Create Cannons
    createCannon("top", 1200, 2000)
    createCannon("top", 400, 1700)
    createCannon("right", 600, 2000)



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
