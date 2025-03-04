// Variables
let menu = document.querySelector(".jsMenu");
let header = document.querySelector(".jsHeader");

// Animate header
menu.addEventListener("click", () => {
  header.classList.toggle("header-animation");
  menu.classList.toggle("rotate");
});
