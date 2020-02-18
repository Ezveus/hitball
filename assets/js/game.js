$(function() {
  const ballColor = '#FF0000';
  const ballRadius = 15;

  let xcoord = 42;
  let ycoord = 42;
  let dx = 1;
  let dy = 1;

  const $zone = $('#zone');
  const $points = $('#points');
  const zoneWidth = parseInt($zone.attr('width'));
  const zoneHeight = parseInt($zone.attr('height'));
  let points = parseInt($points.text());
  let intervalId = undefined;

  function startGame(_layer) {
    console.log("<startGame>");
    if (intervalId == undefined) {
      intervalId = window.setInterval(draw, 60);
      $points.text(points.toString());
    }
    console.log("</startGame>");
  }

  function increasePoints(_layer) {
    console.log("<increasePoints>");
    points += 1;
    $points.text(points.toString());
    console.log("</increasePoints>");
  }

  function drawZone(clickCb) {
    $zone.drawRect({
      layer: true,
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
      fillStyle: ballColor,
      x: xcoord,
      y: ycoord,
      radius: ballRadius,
      click: clickCb
    });
  }

  function draw() {
    console.log("<draw>");
    // Reset the canvas
    $zone.clearCanvas();

    // Redraw the exact same game board
    drawZone();

    // Check for collisions and update X and/or Y direction
    checkForCollisions();

    // Draw the ball
    drawBall(increasePoints);

    // Update ball position for next interval
    xcoord += dx;
    ycoord += dy;

    console.log("</draw>");
  }

  drawZone(startGame);
  drawBall(startGame);
});
