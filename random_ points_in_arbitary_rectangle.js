const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function getRandom(start, end) {
  const array = [];
  for (let i = 0; i < 20; i++) {
    const distance = end - start;
    const num = start + Math.random() * distance;
    array.push(Math.round(num));
  }
  return array;
}

function setup() {
  const width = 800;
  const height = 600;

  const randomArrayX = getRandom(300, 700);
  const randomArrayY = getRandom(200, 500);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, "randomnessTrials");
  r.SetTargetFPS(60);

  return {randomArrayX, randomArrayY};
}

function update() {}

function draw(array) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  for (let i = 0; i < array.randomArrayX.length; i++) {
    const x = array.randomArrayX[i];
    const y = array.randomArrayY[i];

    r.DrawCircle(x, y, 10, r.WHITE);
    r.DrawRectangleLines(300, 200, 400, 300, r.WHITE);
  }

  r.EndDrawing();
}

function loop(array) {
  while (running()) {
    update();
    draw(array);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const array = setup();
  loop(array);
  teardown();
}
main();
