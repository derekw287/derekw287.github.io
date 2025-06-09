$(function () {
   //initialize canvas and context when able to
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

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 100, 25);
    createPlatform(550, 520, 100, 25);
    createPlatform(800, 390, 100, 25);
    createPlatform(1050, 260, 100, 25);
    createPlatform(1300, 130, 100, 25);






    // TODO 3 - Create Collectables
    createCollectable("diamond", 1085, 220);
    createCollectable("max", 830, 350);
    createCollectable("kennedi", 1330, 91);
    createCollectable("steve", 580, 481);
    createCollectable("grace", 330, 610);











    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("top", 535, 1100);
    createCannon("top", 775, 1200);
    createCannon("top", 1030, 1300);
    createCannon("top", 1275, 1400);
    createCannon("right", 280, 4500);
    createCannon("right", 400, 4000);
    createCannon("right", 530, 3500);
    createCannon("right", 670, 3000);
    createCannon("right", 750, 2500);














    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
