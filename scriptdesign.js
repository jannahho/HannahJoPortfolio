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

let mybutton = document.getElementById("myBtn");
let viewportHeight = window.innerHeight;
let containers = document.querySelectorAll(".containerx");
let currentContainerIndex = 0;

// Display the button after the user scrolls a small distance
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
    mybutton.textContent = "^";
    mybutton.style.fontSize = "3vw";
    mybutton.style.marginBottom = "2vh";

  } else {
    mybutton.textContent = "ˇ";
    mybutton.style.fontSize = "6vw";
  }
});

// Scroll to the top of the page or to the next container when the button is clicked
mybutton.addEventListener("click", function() {
  if (currentContainerIndex < containers.length) {
    let containerTop = containers[currentContainerIndex].offsetTop - 1 * parseFloat(getComputedStyle(containers[currentContainerIndex]).gridRowGap);
    currentContainerIndex++;
    window.scrollTo({
      top: containerTop,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    currentContainerIndex = 0;
  }
});
