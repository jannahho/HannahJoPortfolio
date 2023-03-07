// let mybutton = document.getElementById("myBtn");
// let currentPosition = 0;
// let viewportHeight = window.innerHeight;
// let documentHeight = document.body.scrollHeight;
//
// // Display the button after the user scrolls a small distance
// window.addEventListener("scroll", function() {
//   if (window.pageYOffset > 5) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
//
//   // Check if the user has scrolled to the bottom of the page
//   if (window.innerHeight + window.pageYOffset >= documentHeight) {
//     mybutton.textContent = "^"
//     mybutton.style.fontSize = "2.3vw";
//     mybutton.style.marginBottom = "4vh";
//     mybutton.style.height= "1vh";
//   } else {
//     mybutton.textContent = "ˇ";
//     mybutton.style.fontSize = "5vw";
//     // mybutton.style.marginBottom = "1vh";
//     // mybutton.style.fontFamily = "'Jost', sans-serif;";
//   }
// });
//
// // Scroll to the top of the page if the user is at the bottom of the page
// mybutton.addEventListener("click", function() {
//   if (window.innerHeight + window.pageYOffset >= documentHeight) {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     });
//     currentPosition = 0;
//   } else {
//     currentPosition += viewportHeight;
//     currentPosition = Math.ceil(currentPosition / viewportHeight) * viewportHeight;
//     window.scrollTo({
//       top: currentPosition,
//       left: 0,
//       behavior: 'smooth'
//     });
//   }
// });


// try 2

// let mybutton = document.getElementById("myBtn");
// let currentPosition = 0;
// let viewportHeight = window.innerHeight;
// let documentHeight = document.body.scrollHeight;
// let containers = document.querySelectorAll(".containerx");
//
// // Get the row gap of the grid
// let grid = document.getElementById("project1");
// let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
//
// // Display the button after the user scrolls a small distance
// window.addEventListener("scroll", function() {
//   if (window.pageYOffset > 5) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
//
//   // Check if the user has scrolled to the bottom of the page
//   if (window.innerHeight + window.pageYOffset >= documentHeight) {
//     mybutton.textContent = "^"
//     mybutton.style.fontSize = "2.3vw";
//     mybutton.style.marginBottom = "4vh";
//     mybutton.style.height= "1vh";
//   } else {
//     mybutton.textContent = "ˇ";
//     mybutton.style.fontSize = "5vw";
//     // mybutton.style.marginBottom = "1vh";
//     // mybutton.style.fontFamily = "'Jost', sans-serif;";
//   }
// });
//
// // Scroll to the top of the next container if the user is not at the bottom of the page
// mybutton.addEventListener("click", function() {
//   let i;
//   for (i = 0; i < containers.length; i++) {
//     let containerTop = containers[i].getBoundingClientRect().top - rowGap;
//     if (containerTop > viewportHeight) {
//       break;
//     }
//   }
//   currentPosition = containers[i].offsetTop;
//   window.scrollTo({
//     top: currentPosition,
//     left: 0,
//     behavior: 'smooth'
//   });
// });

// try 3

let mybutton = document.getElementById("myBtn");
let currentPosition = 0;
let viewportHeight = window.innerHeight;
let documentHeight = document.body.scrollHeight;
let containers = document.querySelectorAll(".containerx");

// Get the row gap of the grid
// let grid = document.querySelector(".maincontainer");
// let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-gap"));
function vh(percent) {
  var h = Math.max(document.querySelector(".maincontainer").clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}
let rowGap = vh(0);


// Display the button after the user scrolls a small distance
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.pageYOffset >= documentHeight) {
    mybutton.textContent = "^"
    mybutton.style.fontSize = "2.3vw";
    mybutton.style.marginBottom = "4vh";
    mybutton.style.height= "1vh";
  } else {
    mybutton.textContent = "ˇ";
    mybutton.style.fontSize = "5vw";
    // mybutton.style.marginBottom = "1vh";
    // mybutton.style.fontFamily = "'Jost', sans-serif;";
  }
});

// Scroll to the top of the next container if the user is not at the bottom of the page
mybutton.addEventListener("click", function() {
  if (mybutton.textContent === "^") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    currentPosition = 0;
  } else {
    let i;
    for (i = 0; i < containers.length; i++) {
      let containerTop = containers[i].getBoundingClientRect().top - rowGap;
      if (containerTop > viewportHeight) {
        break;
      }
    }
    currentPosition = containers[i].offsetTop;
    window.scrollTo({
      top: currentPosition,
      left: 0,
      behavior: 'smooth'
    });
  }
});
