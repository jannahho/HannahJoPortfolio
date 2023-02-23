// define an array of text strings to cycle through
const textArray = [
  "Loves Design",
  "is a student",
  "Wants to Bring Fun",
  "Is Cool"
];

// get a reference to the text element
const textElement = document.getElementById("subtitle");

// set an initial text value
let currentIndex = 0;
textElement.innerText = textArray[currentIndex];

// define a function to cycle through the text values
function changeText() {
  currentIndex = (currentIndex + 1) % textArray.length;
  textElement.innerText = textArray[currentIndex];
}

// call the changeText function every 3 seconds
setInterval(changeText, 3000);








// bouncing ball



const canvas = document.getElementById('maincontainer');
const ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = canvas.height/2;
let dx = 2;
let dy = -2;
let radius = 30;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width-radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy > canvas.height-radius || y + dy < radius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
