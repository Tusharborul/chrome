const robot = require("@hurdlegroup/robotjs");

const MIN_DISTANCE = 8;
const MAX_DISTANCE = 40;
const INTERVAL_MS = 20000;

function randomOffset() {
  const distance =
    MIN_DISTANCE + Math.floor(Math.random() * (MAX_DISTANCE - MIN_DISTANCE + 1));
  const angle = Math.random() * Math.PI * 2;

  return {
    x: Math.round(Math.cos(angle) * distance),
    y: Math.round(Math.sin(angle) * distance),
  };
}

setInterval(() => {
  const pos = robot.getMousePos();

  // Move right
  robot.moveMouse(pos.x + DISTANCE, pos.y);

  // Move to a random nearby point — does not return to the old position
  robot.moveMouse(pos.x + offset.x, pos.y + offset.y);
}, INTERVAL_MS);
