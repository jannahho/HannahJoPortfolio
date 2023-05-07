function myXFunction() {
  document.getElementById("myXDropdown").classList.toggle("showX");
}
window.onclick = function(event) {
  if (!event.target.matches('#Xdropbtn')) {
    var xdropdowns = document.getElementsByClassName("Xdropdown-content");
    var i;
    for (i = 0; i < xdropdowns.length; i++) {
      var openxDropdown = xdropdowns[i];
      if (openxDropdown.classList.contains('showX')) {
        openxDropdown.classList.remove('showX');
      }
    }
  }
}
