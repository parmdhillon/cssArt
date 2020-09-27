var canvasElement = document.querySelector('#myCanvas');
var ctx = canvasElement.getContext('2d');
const width = 50;
const height = 50;
let xoff = 0;
let yoff = 0;
const boxColor = [
  '#45ccf9',
  '#fbbe15',
  '#fa242e',
  '#3b257a',
  '#f0eef9',
  '#ff8c1a',
  '#3081b9',
  '#654bb9',
];

let funcs = [shape1, shape2, shape3, shape4, shape5, shape6, shape7];

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 10; j++) {
    ctx.beginPath();
    ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
    ctx.fillRect(j * 50, i * 50, width, height);
    let xoff = j * 50;
    let yoff = i * 50;
    funcs[Math.floor(Math.random() * funcs.length)](xoff, yoff);
  }
}
//SHAPES

function shape1(xoff, yoff) {
  //SINGLE CIRCLE
  let randAngle = Math.random();
  if (randAngle < 0.5) {
    aglx = 45;
    agly = 225;
  } else {
    aglx = 135;
    agly = 315;
  }
  //First Circle
  ctx.beginPath(xoff, yoff);
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    20,
    (Math.PI / 180) * aglx,
    (Math.PI / 180) * agly
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Second Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    20,
    (Math.PI / 180) * aglx,
    (Math.PI / 180) * agly,
    true
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
}

function shape2(xoff, yoff) {
  //CIRCLE with SMALL CIRCLE
  //First Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    20,
    (Math.PI / 180) * 45,
    (Math.PI / 180) * 225
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Second Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    20,
    (Math.PI / 180) * 45,
    (Math.PI / 180) * 225,
    true
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Third Circle

  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    7,
    (Math.PI / 180) * 135,
    (Math.PI / 180) * 315,
    true
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Fourth Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    7,
    (Math.PI / 180) * 135,
    (Math.PI / 180) * 315
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
}

function shape3(xoff, yoff) {
  //DOTS
  //First Circle
  ctx.beginPath();
  ctx.arc(width / 5 + xoff, height / 5 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //second Circle
  ctx.beginPath();
  ctx.arc(width / 1.9 + xoff, height / 5 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //third Circle
  ctx.beginPath();
  ctx.arc(width / 1.2 + xoff, height / 5 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Fourth Circle
  ctx.beginPath();
  ctx.arc(width / 5 + xoff, height / 1.9 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Fifth Circle
  ctx.beginPath();
  ctx.arc(width / 1.9 + xoff, height / 1.9 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //sixth Circle
  ctx.beginPath();
  ctx.arc(width / 1.2 + xoff, height / 1.9 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //seventh Circle
  ctx.beginPath();
  ctx.arc(width / 5 + xoff, height / 1.2 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //eight Circle
  ctx.beginPath();
  ctx.arc(width / 1.9 + xoff, height / 1.2 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //ninth Circle
  ctx.beginPath();
  ctx.arc(width / 1.2 + xoff, height / 1.2 + yoff, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
}

function shape4(xoff, yoff) {
  // ON CORNERS CIRCLES
  //First Triangle
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Second Triangle
  ctx.beginPath();
  ctx.moveTo(xoff, height + yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff + width, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Third Triangle
  ctx.beginPath();
  ctx.moveTo(xoff + width, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff + width, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Fourth Triangle
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff + width, yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //First Circle
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.arc(xoff, yoff, 20, (Math.PI / 180) * 1, (Math.PI / 180) * 45);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.arc(xoff, yoff, 20, (Math.PI / 180) * 45, (Math.PI / 180) * 90);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //second Circle
  ctx.beginPath();
  ctx.moveTo(xoff + width, yoff);
  ctx.arc(xoff + width, yoff, 20, (Math.PI / 180) * 90, (Math.PI / 180) * 135);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xoff + width, yoff);
  ctx.arc(xoff + width, yoff, 20, (Math.PI / 180) * 135, (Math.PI / 180) * 180);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //third Circle
  ctx.beginPath();
  ctx.moveTo(xoff, yoff + height);
  ctx.arc(
    xoff,
    yoff + height,
    20,
    (Math.PI / 180) * 270,
    (Math.PI / 180) * 315
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xoff, yoff + height);
  ctx.arc(
    xoff,
    yoff + height,
    20,
    (Math.PI / 180) * 315,
    (Math.PI / 180) * 360
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //fourth Circle
  ctx.beginPath();
  ctx.moveTo(xoff + width, yoff + height);
  ctx.arc(
    xoff + width,
    yoff + height,
    20,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 225
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xoff + width, yoff + height);
  ctx.arc(
    xoff + width,
    yoff + height,
    20,
    (Math.PI / 180) * 225,
    (Math.PI / 180) * 270
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
}

function shape5(xoff, yoff) {
  //in Center CIRCLE with TRIANGLES
  //First Triangle
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Second Triangle
  ctx.beginPath();
  ctx.moveTo(xoff, height + yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff + width, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Third Triangle
  ctx.beginPath();
  ctx.moveTo(xoff + width, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff + width, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Fourth Triangle
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff + width, yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //First Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    10,
    (Math.PI / 180) * 225,
    (Math.PI / 180) * 315
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //second Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    10,
    (Math.PI / 180) * 315,
    (Math.PI / 180) * 45
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //third Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    10,
    (Math.PI / 180) * 45,
    (Math.PI / 180) * 135
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //fourth Circle
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height / 2 + yoff);
  ctx.arc(
    width / 2 + xoff,
    height / 2 + yoff,
    10,
    (Math.PI / 180) * 135,
    (Math.PI / 180) * 225
  );
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
}

function shape6(xoff, yoff) {
  //Square Triagles
  //First Square Triangles
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff, height / 2 + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Second Square Triangles
  ctx.beginPath();
  ctx.moveTo(xoff, height / 2 + yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xoff, height + yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(width / 2 + xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Third Square Triangles
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(width + xoff, yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(width + xoff, yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(width + xoff, height / 2 + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Fourth Square Triangles
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height + yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(width + xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(width + xoff, height / 2 + yoff);
  ctx.lineTo(width / 2 + xoff, height / 2 + yoff);
  ctx.lineTo(width + xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();
}

function shape7(xoff, yoff) {
  //Base Triangles
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width + xoff, yoff);
  ctx.lineTo(xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(xoff, height + yoff);
  ctx.lineTo(width + xoff, yoff);
  ctx.lineTo(width + xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  //Corner Triangles
  ctx.beginPath();
  ctx.moveTo(width / 2 + xoff, height + yoff);
  ctx.lineTo(width + xoff, height / 2 + yoff);
  ctx.lineTo(width + xoff, height + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(width / 2 + xoff, yoff);
  ctx.lineTo(xoff, height / 2 + yoff);
  ctx.closePath();
  ctx.fillStyle = boxColor[Math.floor(Math.random() * boxColor.length)];
  ctx.fill();

  drawShapeCurve2(
    ctx,
    xoff,
    yoff,
    boxColor[Math.floor(Math.random() * boxColor.length)]
  );
  drawShapeCurve1(
    ctx,
    xoff,
    yoff,
    boxColor[Math.floor(Math.random() * boxColor.length)]
  );
}

function drawShapeCurve1(ctx, xoff, yoff, color) {
  ctx.beginPath();
  ctx.moveTo(303 / 6 + xoff, 73 / 6 + yoff);
  ctx.bezierCurveTo(
    270 / 6 + xoff,
    91 / 6 + yoff,
    275 / 6 + xoff,
    98 / 6 + yoff,
    270 / 6 + xoff,
    134 / 6 + yoff
  );
  ctx.bezierCurveTo(
    266 / 6 + xoff,
    160 / 6 + yoff,
    237 / 6 + xoff,
    169 / 6 + yoff,
    217 / 6 + xoff,
    171 / 6 + yoff
  );
  ctx.bezierCurveTo(
    191 / 6 + xoff,
    173 / 6 + yoff,
    173 / 6 + xoff,
    190 / 6 + yoff,
    173 / 6 + xoff,
    222 / 6 + yoff
  );
  ctx.bezierCurveTo(
    173 / 6 + xoff,
    247 / 6 + yoff,
    149 / 6 + xoff,
    270 / 6 + yoff,
    131 / 6 + xoff,
    267 / 6 + yoff
  );
  ctx.bezierCurveTo(
    106 / 6 + xoff,
    263 / 6 + yoff,
    76 / 6 + xoff,
    283 / 6 + yoff,
    75 / 6 + xoff,
    299 / 6 + yoff
  );
  ctx.bezierCurveTo(
    75 / 6 + xoff,
    300 / 6 + yoff,
    180 / 6 + xoff,
    299 / 6 + yoff,
    180 / 6 + xoff,
    298 / 6 + yoff
  );
  ctx.bezierCurveTo(
    180 / 6 + xoff,
    287 / 6 + yoff,
    202 / 6 + xoff,
    271 / 6 + yoff,
    216 / 6 + xoff,
    273 / 6 + yoff
  );
  ctx.bezierCurveTo(
    239 / 6 + xoff,
    277 / 6 + yoff,
    271 / 6 + xoff,
    255 / 6 + yoff,
    274 / 6 + xoff,
    215 / 6 + yoff
  );
  ctx.bezierCurveTo(
    275 / 6 + xoff,
    200 / 6 + yoff,
    281 / 6 + xoff,
    185 / 6 + yoff,
    301 / 6 + xoff,
    179 / 6 + yoff
  );
  ctx.bezierCurveTo(
    302 / 6 + xoff,
    179 / 6 + yoff,
    302 / 6 + xoff,
    96 / 6 + yoff,
    302 / 6 + xoff,
    111 / 6 + yoff
  );
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawShapeCurve2(ctx, xoff, yoff, color) {
  ctx.beginPath();
  ctx.moveTo(120 / 6 + xoff, 0 / 6 + yoff);
  ctx.bezierCurveTo(
    103 / 6 + xoff,
    32 / 6 + yoff,
    88 / 6 + xoff,
    20 / 6 + yoff,
    58 / 6 + xoff,
    30 / 6 + yoff
  );
  ctx.bezierCurveTo(
    35 / 6 + xoff,
    38 / 6 + yoff,
    28 / 6 + xoff,
    55 / 6 + yoff,
    26 / 6 + xoff,
    87 / 6 + yoff
  );
  ctx.bezierCurveTo(
    25 / 6 + xoff,
    102 / 6 + yoff,
    16 / 6 + xoff,
    111 / 6 + yoff,
    0 / 6 + xoff,
    120 / 6 + yoff
  );
  ctx.bezierCurveTo(
    0 / 6 + xoff,
    120 / 6 + yoff,
    1 / 6 + xoff,
    224 / 6 + yoff,
    0 / 6 + xoff,
    225 / 6 + yoff
  );
  ctx.bezierCurveTo(
    -9 / 6 + xoff,
    237 / 6 + yoff,
    31 / 6 + xoff,
    218 / 6 + yoff,
    31 / 6 + xoff,
    182 / 6 + yoff
  );
  ctx.bezierCurveTo(
    31 / 6 + xoff,
    171 / 6 + yoff,
    43 / 6 + xoff,
    133 / 6 + yoff,
    85 / 6 + xoff,
    131 / 6 + yoff
  );
  ctx.bezierCurveTo(
    111 / 6 + xoff,
    130 / 6 + yoff,
    138 / 6 + xoff,
    103 / 6 + yoff,
    135 / 6 + xoff,
    75 / 6 + yoff
  );
  ctx.bezierCurveTo(
    133 / 6 + xoff,
    60 / 6 + yoff,
    156 / 6 + xoff,
    31 / 6 + yoff,
    181 / 6 + xoff,
    33 / 6 + yoff
  );
  ctx.bezierCurveTo(
    209 / 6 + xoff,
    35 / 6 + yoff,
    225 / 6 + xoff,
    18 / 6 + yoff,
    228 / 6 + xoff,
    1 / 6 + yoff
  );
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}
