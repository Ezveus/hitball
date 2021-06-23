$(function() {
  const ballColor = '#FF0000';
  const ballRadius = 15;
  const $zone = $('#zone');
  const $points = $('#points');
  const zoneWidth = parseInt($zone.attr('width'));
  const zoneHeight = parseInt($zone.attr('height'));

  let xcoord = 42;
  let ycoord = 42;
  let dx = 1;
  let dy = 1;
  let points = parseInt($points.text());
  let intervalId = undefined;
  let startedGame = false;
  let victory = false;

  function startGame(_layer) {
    console.log("<startGame>");
    if (startedGame === false) {
      intervalId = window.setInterval(draw, 60);
      $points.text(points.toString());
      startedGame = true;
    }
    console.log("</startGame>");
  }

  function increasePoints(_layer) {
    console.log("<increasePoints>");
    if (victory === false && startedGame === true) {
      points += 1;
      $points.text(points.toString());
    }
    console.log("</increasePoints>");
  }

  function drawZone(clickCb) {
    $zone.drawRect({
      layer: true,
      name: 'zone',
      strokeStyle: 'black',
      strokeWidth: 2,
      x: 0,
      y: 0,
      width: zoneWidth,
      height: zoneHeight,
      fromCenter: false,
      click: clickCb
    });
  }

  function checkForCollisions() {
    // TODO
  }

  function drawBall(clickCb) {
    $zone.drawArc({
      layer: true,
      name: 'ball',
      fillStyle: ballColor,
      x: xcoord,
      y: ycoord,
      radius: ballRadius,
      click: clickCb
    });
  }

  function checkWinCondition() {
    if (startedGame === true && victory === false && points === 2) {
      victory = true;
      // Game is won, stopping the game
      window.clearInterval(intervalId);
    }
  }

  function draw() {
    console.log("<draw>");
    // Check win condition
    checkWinCondition();

    // Check for collisions and update X and/or Y direction
    checkForCollisions();

    // Draw the ball
    // drawBall(increasePoints);
    $zone.drawLayer('ball');

    // Update ball position for next interval
    xcoord += dx;
    ycoord += dy;

    console.log("</draw>");
  }

  drawZone(startGame);
  drawBall(startGame);
});
