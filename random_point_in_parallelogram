const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function getDistanceOfX(factor1, factor2, lTP, rTP, lBP) {
  const x = factor1 * (lBP.x - lTP.x) + factor2 * (rTP.x - lTP.x);

  return x;
}

function getDistanceOfY(factor1, factor2, lTP, rTP, lBP) {
  const y = factor1 * (lBP.y - lTP.y) + factor2 * (rTP.y - lTP.y);

  return y;
}

function getRandomPointsofX(lTP, rTP, lBP) {
  const array = [];
  for (let i = 0; i < 200; i++) {
    const factor1 = Math.random();
    const factor2 = Math.random();
    const x = lTP.x + getDistanceOfX(factor1, factor2, lTP, rTP, lBP);
    const y = lTP.y + getDistanceOfY(factor1, factor2, lTP, rTP, lBP);

    array.push({x, y});
  }
  return array;
}

function setup() {
  const width = 800;
  const height = 600;

  const leftTopPositions = {
    x: 0,
    y: 200,
  };

  const rightTopPositions = {
    x: 450,
    y: 200,
  };

  const leftBottomPositions = {
    x: 50,
    y: 500,
  };

  const randomArray = getRandomPointsofX(
    leftTopPositions,
    rightTopPositions,
    leftBottomPositions,
  );

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, "randomnessTrials");
  r.SetTargetFPS(60);

  return {randomArray};
}

function update() {}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawLine(0, 200, 450, 200, r.WHITE);
  r.DrawLine(450, 200, 500, 500, r.WHITE);
  r.DrawLine(500, 500, 50, 500, r.WHITE);
  r.DrawLine(50, 500, 0, 200, r.WHITE);

  for (let i = 0; i < w.randomArray.length; i++) {
    const x = w.randomArray[i].x;
    const y = w.randomArray[i].y;

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
  loop(w);
  teardown();
}
main();
