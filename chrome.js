const robot = require("@hurdlegroup/robotjs");

const MIN_DISTANCE = 8;
const MAX_DISTANCE = 40;
const INTERVAL_MS = 60_000; // every 1 minute
const MOVE_GAP_MS = 150; // gap between the 2–3 moves

function randomOffset() {
  const distance =
    MIN_DISTANCE + Math.floor(Math.random() * (MAX_DISTANCE - MIN_DISTANCE + 1));
  const angle = Math.random() * Math.PI * 2;

  return {
    x: Math.round(Math.cos(angle) * distance),
    y: Math.round(Math.sin(angle) * distance),
  };
}

function moveInRandomDirections() {
  const moves = 2 + Math.floor(Math.random() * 2); // 2 or 3 moves
  let i = 0;

  const step = () => {
    const pos = robot.getMousePos();
    const offset = randomOffset();
    robot.moveMouse(pos.x + offset.x, pos.y + offset.y);

    i += 1;
    if (i < moves) {
      setTimeout(step, MOVE_GAP_MS);
    }
  };

  step();
}

setInterval(moveInRandomDirections, INTERVAL_MS);
