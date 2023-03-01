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

// button drop down
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}



// bouncing balls around screen
const container = document.querySelector('body');
const balls = document.querySelectorAll('.ball');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const ballSize = balls[0].clientWidth;
const speed = 3;
const maxSpeed = 5;

let ballPositions = [  { x: 0, y: 0 },  { x: ballSize * 2, y: ballSize },  { x: ballSize * 4, y: ballSize * 2 },];

let ballVelocities = [  { x: speed, y: speed },  { x: speed, y: -speed },  { x: -speed, y: speed },];

function animate() {
  balls.forEach((ball, ballIndex) => {
    ballPositions[ballIndex].x += ballVelocities[ballIndex].x;
    ballPositions[ballIndex].y += ballVelocities[ballIndex].y;

    if (ballPositions[ballIndex].x <= 0) {
      ballVelocities[ballIndex].x = Math.abs(ballVelocities[ballIndex].x);
    }

    if (ballPositions[ballIndex].x >= containerWidth - ballSize) {
      ballVelocities[ballIndex].x = -Math.abs(ballVelocities[ballIndex].x);
    }

    if (ballPositions[ballIndex].y <= 0) {
      ballVelocities[ballIndex].y = Math.abs(ballVelocities[ballIndex].y);
    }

    if (ballPositions[ballIndex].y >= containerHeight - ballSize) {
      ballVelocities[ballIndex].y = -Math.abs(ballVelocities[ballIndex].y);
    }

    for (let i = 0; i < balls.length; i++) {
      if (i !== ballIndex) {
        const distance = Math.sqrt(
          Math.pow(ballPositions[i].x - ballPositions[ballIndex].x, 2) +
          Math.pow(ballPositions[i].y - ballPositions[ballIndex].y, 2)
        );
        if (distance < ballSize) {
          const tempX = ballVelocities[ballIndex].x;
          const tempY = ballVelocities[ballIndex].y;
          ballVelocities[ballIndex].x = ballVelocities[i].x;
          ballVelocities[ballIndex].y = ballVelocities[i].y;
          ballVelocities[i].x = tempX;
          ballVelocities[i].y = tempY;
        }
      }
    }

    ball.style.transform = `translate(${ballPositions[ballIndex].x}px, ${ballPositions[ballIndex].y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();


// ((((&U*^Y*&^*&*))))

// document.getElementById("redtriangle").addEventListener("click", dragElement);
dragElement(document.getElementById("redtriangle"));
dragElement(document.getElementById("greenrectangle"));
dragElement(document.getElementById("bluecircle"));



let target = document.querySelector(".drag");

function onDrag(e) {
  // we could make them global variables instead
  const {width, height} = window.getComputedStyle(target);
  target.style.transform = `translate(${e.clientX - +width.replace("px", "") / 2}px, ${e.clientY - +height.replace("px", "") / 2}px)`;
}


function dragElement(elmnt) {
    // pick up shape from anywhere inside the shape
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    var containerRect = document.getElementById('playground').getBoundingClientRect();
    var playground_x = containerRect.x;
    var playground_y = containerRect.y;
    var playground_w = containerRect.width;
    var playground_h = containerRect.height;
    // console.log(playground_x + " " + playground_y);
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }


    function dragMouseDown(e) {
        // call location of cursor on screen
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        // do function when cursor is moved
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        // call new cursor location
        e = e || window.event;
        e.preventDefault();
        var elementRect = elmnt.getBoundingClientRect();
        var elem_y = elementRect.y;
        var elem_x = elementRect.x;
        var elem_w = elementRect.width;
        var elem_h = elementRect.height;
        console.log(playground_x + " " + playground_y + " " + elem_x + " " + elem_y)
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // put shape in new cursor location

        temp_x = (elmnt.offsetLeft - pos1);
        temp_y = (elmnt.offsetTop - pos2);

        if (temp_y < playground_y || temp_x < playground_x || temp_x + elem_w > playground_x + playground_w || temp_y + elem_h > playground_y + playground_h) {

        } else {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        // release shape when click is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// add a new shape !!!!!!!!!!!!!!!!!!!!!!

// Select the container element
const container2 = document.querySelector('.playground');

// Add a click event listener to the container
container2.addEventListener('click', addShape);

function addShape(event) {
  // Get the coordinates of the click event
  const x = event.clientX;
  const y = event.clientY;

  // Check if the click event is inside the container
  const containerRect = container2.getBoundingClientRect();
  const containerX = containerRect.left;
  const containerY = containerRect.top;
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;
  if (x < containerX || x > containerX + containerWidth || y < containerY || y > containerY + containerHeight) {
    return;
  }

  // Check if the new shape overlaps with any existing shape in the container
  const shapes = container2.querySelectorAll('.shape');
  for (const shape of shapes) {
    const shapeRect = shape.getBoundingClientRect();
    if (x + 20 > shapeRect.left && x - 20 < shapeRect.right && y + 20 > shapeRect.top && y - 20 < shapeRect.bottom) {
      return;
    }
  }

  // Create a new shape element with a random color and number of sides
  const sides = Math.floor(Math.random() * 6);
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const shape = document.createElement('div');
  shape.classList.add('shape');
  shape.style.backgroundColor = color;
  shape.style.width = '50px';
  shape.style.height = '50px';
  shape.style.position = 'absolute';
  shape.style.left = `${x - 25}px`;
  shape.style.top = `${y - 25}px`;
  switch (sides) {
    case 0:
      shape.style.borderRadius = '50%';
      break;
    case 1:
      shape.style.borderTop = '50px solid transparent';
      shape.style.borderRight = '25px solid ' + color;
      shape.style.borderBottom = '50px solid transparent';
      break;
    case 2:
      shape.style.borderTop = '50px solid transparent';
      shape.style.borderRight = '50px solid ' + color;
      shape.style.borderBottom = '50px solid transparent';
      break;
    case 3:
      shape.style.borderTop = '50px solid ' + color;
      shape.style.borderRight = '25px solid transparent';
      shape.style.borderBottom = '50px solid ' + color;
      shape.style.borderLeft = '25px solid transparent';
      break;
    case 4:
      shape.style.borderTop = '25px solid ' + color;
      shape.style.borderRight = '50px solid transparent';
      shape.style.borderBottom = '25px solid ' + color;
      shape.style.borderLeft = '50px solid transparent';
      break;
    case 5:
      shape.style.borderTop = '25px solid ' + color;
      shape.style.borderRight = '25px solid transparent';
      shape.style.borderBottom = '25px solid ' + color;
      shape.style.borderLeft = '25px solid transparent';
      shape.style.transform = 'rotate(45deg)';
      break;
  }

  container2.appendChild(shape);

  // Make the new shape draggable
  dragElement(shape);
}
