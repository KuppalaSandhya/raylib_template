const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function convertToRadians(degress) {
  radians = (degress * Math.PI) / 180;
  return radians;
}

function getRandomPointsofX(startX, startY, radius) {
  const array = [];
  for (let i = 0; i < 10; i++) {
    const distance = Math.random() * radius;
    const angle = Math.random() * 90;
    const coOrdinateX = startX + distance * Math.cos(convertToRadians(angle));
    const coOrdinateY = startY + distance * Math.sin(convertToRadians(angle));

    array.push({coOrdinateX, coOrdinateY});
  }
  return array;
}

function setup() {
  const width = 800;
  const height = 600;

  const centerX = 0;
  const centerY = 0;
  const radius = 150;

  const randomArray = getRandomPointsofX(centerX, centerY, radius);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, "randomnessTrials");
  r.SetTargetFPS(60);

  return {randomArray, centerX, centerY, radius};
}

function update() {}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawCircleLines(w.centerX, w.centerY, w.radius, r.WHITE);

  for (let i = 0; i < w.randomArray.length; i++) {
    const x = w.randomArray[i].coOrdinateX;
    const y = w.randomArray[i].coOrdinateY;

    r.DrawCircle(x, y, 2, r.YELLOW);
  }

  r.EndDrawing();
}

function loop(w) {
  while (running()) {
    update();
    draw(w);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const w = setup();
  console.log(w);
  loop(w);
  teardown();
}
main();
