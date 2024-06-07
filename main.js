const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger-menu")
const navClose = document.querySelector(".nav-close")
const bodyDark = document.querySelector(".body-dark")

hamburger.addEventListener("click", function() {
  navbar.classList.add("mobile-nav");
  navClose.classList.remove("hidden");
  bodyDark.classList.remove("hidden")
  // body.style.backgroundColor = "rgba(0, 0, 0, 1)";
  // body.style.zIndex = 10000
})

navClose.addEventListener("click", function() {
  navbar.classList.remove("mobile-nav")
  navClose.classList.add("hidden")
  bodyDark.classList.add("hidden")
})
