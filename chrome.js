const robot = require("@hurdlegroup/robotjs");

// Approx. 0.4 cm (may vary by monitor DPI)
const DISTANCE = 15;



setInterval(() => {
  const pos = robot.getMousePos();

  // Move right
  robot.moveMouse(pos.x + DISTANCE, pos.y);

  setTimeout(() => {
    const current = robot.getMousePos();

    // Move left
    robot.moveMouse(current.x - DISTANCE, current.y);
  }, 20000);
}, 20000);