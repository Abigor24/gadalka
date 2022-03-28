let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav");
hamburger.addEventListener('click', function () {
  menu.classList.toggle('active');
})