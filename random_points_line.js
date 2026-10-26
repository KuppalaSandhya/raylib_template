const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}
function getRandom(x1, x2) {
  const array = [];
  for (let i = 0; i < 20; i++) {
    const distance = x2 - x1;
    const num = x1 + Math.random() * distance;
    array.push(num);
  }
  return array;
}

function setup() {
  const width = 800;
  const height = 600;
  const x1 = 200;
  const x2 = 400;
  const randomArray = getRandom(x1, x2);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, "randomnessTrials");
  r.SetTargetFPS(60);

  return randomArray;
}

function update() {}

function draw(array) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  for (const x of array) r.DrawLine(x, 0, x, 600, r.WHITE);

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
