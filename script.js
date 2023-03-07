// define an array of text strings to cycle through
const textArray = [
  "Love Design",
  "Create Experiences",
  "Research Needs",
  "Bring Fun",
  "Practice Imagination",
  "Explore Always",
  "Be Cool"


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

let ballPositions = [{
  x: 0,
  y: 0
}, {
  x: ballSize * 2,
  y: ballSize
}, {
  x: ballSize * 4,
  y: ballSize * 2
}, ];

let ballVelocities = [{
  x: speed,
  y: speed
}, {
  x: speed,
  y: -speed
}, {
  x: -speed,
  y: speed
}, ];

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

let shape2Positions = {};
shape1 = document.getElementById("redtriangle");
shape2 = document.getElementById("greenrectangle");
shape3 = document.getElementById("bluecircle");
let pg = document.getElementById('playground').getBoundingClientRect();
console.log('pg:' + pg);


// document.getElementById("redtriangle").addEventListener("click", dragElement);



let INITIAL_SHAPE_OFFSET_PCT = .75
// shape2.style.top = (pg.bottom - shape2.getBoundingClientRect().height).toString() + 'px'
// shape2.style.left = ((pg.width * INITIAL_SHAPE_OFFSET_PCT) + pg.left).toString() + 'px'

// shape1.style.top = (pg.bottom - shape1.getBoundingClientRect().height).toString() + 'px'
// shape1.style.left = (parseInt(shape2.style.left, 10) -  shape2.getBoundingClientRect().width - shape1.getBoundingClientRect().width).toString() + 'px'

// shape3.style.top = (1 + pg.bottom - 2.1 * shape2.getBoundingClientRect().height).toString() + 'px'
// shape3.style.left = (parseInt(shape2.style.left, 10) - 1.5 * shape2.getBoundingClientRect().width).toString() + 'px'

// shape2.style.top = (pg.bottom).toString() + 'px'
// shape1.style.top = (pg.bottom).toString() + 'px'
// shape3.style.top = (pg.bottom).toString() + 'px'

shape1.style.left = (pg.width * .54 + pg.left).toString() + 'px';
shape2.style.left = (pg.width * .73 + pg.left).toString() + 'px';
shape3.style.left = (pg.width * .63 + pg.left).toString() + 'px';
shape1.style.top = (pg.height * .57 + pg.top).toString() + 'px';
shape2.style.top = (pg.height * .52 + pg.top).toString() + 'px';
shape3.style.top = (pg.height * .25 + pg.top).toString() + 'px';

shape2Positions['redtriangle'] = getCenterCoordinatesAsPctOfPlayground(shape1.getBoundingClientRect(), pg);
shape2Positions['greenrectangle'] = getCenterCoordinatesAsPctOfPlayground(shape2.getBoundingClientRect(), pg);
shape2Positions['bluecircle'] = getCenterCoordinatesAsPctOfPlayground(shape3.getBoundingClientRect(), pg);


dragElement(shape1);
dragElement(shape2);
dragElement(shape3);


let scrollLeft = 0;
let scrollTop = 0;
window.onscroll = function() {
  recordScrollPosition()
};

function recordScrollPosition() {
  scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}


function dragElement(elmnt) {
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  let mouseOffsetX;
  let mouseOffsetY;


  function dragMouseDown(e) {
    // call location of cursor on screen
    e = e || window.event;
    e.preventDefault();
    console.log('reached here');

    var elementRect = elmnt.getBoundingClientRect();

    mouseOffsetX = e.clientX - elementRect.x - scrollLeft;
    mouseOffsetY = e.clientY - elementRect.y - scrollTop;

    // do function when cursor is moved

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // call new cursor location

    e = e || window.event;
    e.preventDefault();
    var elementRect = elmnt.getBoundingClientRect();
    var elem_w = elementRect.width;
    var elem_h = elementRect.height;

    var pgBox = document.getElementById('playground').getBoundingClientRect();
    var playground_x = pgBox.x;
    var playground_y = pgBox.y;
    var playground_w = pgBox.width;
    var playground_h = pgBox.height;

    var newElemTop = e.clientY - mouseOffsetY;
    var newElemLeft = e.clientX - mouseOffsetX;

    if (newElemTop >= playground_y + scrollTop &&
      newElemLeft >= playground_x + scrollLeft &&
      newElemTop + elem_h <= playground_y + playground_h + scrollTop &&
      newElemLeft + elem_w <= playground_x + playground_w + scrollLeft) {
      elmnt.style.top = newElemTop.toString() + 'px';
      elmnt.style.left = newElemLeft.toString() + 'px';
    } else {
      console.log('skipping moving.')
    }

    shape2Positions[elmnt.id] = getCenterCoordinatesAsPctOfPlayground(elementRect, pgBox);
  }

  function closeDragElement() {
    // release shape when click is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function getCenterCoordinatesAsPctOfPlayground(elembox, pgbox) {
  var x = (elembox.left + elembox.width / 2 - pgbox.left) / pgbox.width;
  var y = (elembox.top + elembox.height / 2 - pgbox.top) / pgbox.height;
  return [x, y];
}

function moveElementAlongWithPlayground(elem, pg) {
  elemBox = elem.getBoundingClientRect();

  // console.log('made it here');
  var idealCoordinates = shape2Positions[elem.id];
  var idealX = idealCoordinates[0] * pg.width + pg.left;
  var idealY = idealCoordinates[1] * pg.height + pg.top;

  var idealXCorner = idealX - elemBox.width / 2;
  var idealYCorner = idealY - elemBox.height / 2;

  elem.style.left = idealXCorner + 'px'
  elem.style.top = idealYCorner + 'px'

  if (elemBox.x + elemBox.width > pg.x + pg.width) {
    console.log('bad1');
    elem.style.left = (pg.x + pg.width - elemBox.width).toString() + 'px';
  }
  if (elemBox.y + elemBox.height > pg.y + pg.height) {
    console.log('bad2');
    elem.style.top = (pg.y + pg.height - elemBox.height).toString() + 'px';
  }
  if (elemBox.x < pg.x) {
    console.log('bad3');
    elem.style.left = pg.x + 'px'
  }
  if (elemBox.y < pg.y) {
    console.log('bad4');
    elem.style.top = pg.y + 'px'
  }
}

window.addEventListener('resize', function(event) {
  let playgroundRect = document.getElementById('playground').getBoundingClientRect();
  let elements = document.querySelectorAll("[class='shape']");

  for (let elem of elements) {
    moveElementAlongWithPlayground(elem, playgroundRect);
  }
}, true);

// add a new shape !!!!!!!!!!!!!!!!!!!!!!
// Select the container element
const container2 = document.querySelector('.playground');

// Add a click event listener to the container
container2.addEventListener('click', addShape);

let newShapesMade = 0;

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
  newShapesMade += 1;
  // Create a new shape element with a random color and number of sides
  let sides = Math.floor(Math.random() * 8);
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const shape = document.createElement('div');
  shape.setAttribute('id', 'randomShape' + newShapesMade.toString());
  shape.classList.add('shape');
  shape.style.backgroundColor = color;
  shape.style.width = '4vw';
  shape.style.height = '4vw';
  shape.style.position = 'absolute';
  shape.style.left = `${x - 25}px`;
  shape.style.top = `${y - 25}px`;
  switch (sides) {
    case 0:
      shape.style.borderRadius = '50%';
      break;
    case 1:
      shape.style.borderTop = '4vw solid transparent';
      shape.style.borderRight = '2vw solid ' + color;
      shape.style.borderBottom = '4vw solid transparent';
      break;
    case 2:
      shape.style.borderTop = '4vw solid transparent';
      shape.style.borderRight = '2vw solid ' + color;
      shape.style.borderBottom = '4vw solid transparent';
      break;
    case 3:
      shape.style.borderTop = '4vw solid ' + color;
      shape.style.borderRight = '2vw solid transparent';
      shape.style.borderBottom = '4vw solid ' + color;
      shape.style.borderLeft = '2vw solid transparent';
      break;
    case 4:
      shape.style.borderTop = '2vw solid ' + color;
      shape.style.borderRight = '4vw solid transparent';
      shape.style.borderBottom = '2vw solid ' + color;
      shape.style.borderLeft = '50px solid transparent';
      break;
    case 5:
      shape.style.width = 0;
      shape.style.height = 0;
      shape.style.backgroundColor = 'transparent';
      shape.style.borderTop = '0vw solid transparent';
      shape.style.borderRight = '10vw solid' + '#' + Math.floor(Math.random() * 16777215).toString(16);;
      shape.style.borderBottom = '8vw solid transparent';
      break;
    case 6:
      shape.style.width = 0;
      shape.style.height = 0;
      shape.style.backgroundColor = 'transparent';
      shape.style.borderTop = '0vw solid transparent';
      shape.style.borderRight = '8vw solid' + '#' + Math.floor(Math.random() * 16777215).toString(16);;
      shape.style.borderBottom = '8vw solid transparent';
      shape.style.transform = 'rotate(90deg)';
      break;
    case 7:
      shape.style.transform = 'skew(20deg)';
  }

  container2.appendChild(shape);

  shapeRect = shape.getBoundingClientRect();

  pgRect = document.getElementById('playground').getBoundingClientRect()

  if (shapeRect.bottom > pgRect.bottom) {
    shape.style.top = (pgRect.bottom - shapeRect.height).toString() + 'px';
  }
  if (shapeRect.right > pgRect.right) {
    shape.style.left = (pgRect.right - shapeRect.width).toString() + 'px';
  }
  if (shapeRect.top < pgRect.top) {
    shape.style.top = pgRect.top.toString() + 'px';
  }
  if (shapeRect.left < pgRect.left) {
    shape.style.left = pgRect.left.toString() + 'px';
  }

  shape2Positions[shape.id] = getCenterCoordinatesAsPctOfPlayground(shapeRect, pgRect);

  // Make the new shape draggable
  dragElement(shape);
}
