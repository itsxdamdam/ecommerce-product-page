const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger-menu")
const navClose = document.querySelector(".nav-close")
const bodyDark = document.querySelector(".body-dark")
const hamburgerLinks = document.querySelector(".hamburger-links")

hamburger.addEventListener("click", function() {
  navbar.classList.add("mobile-nav");
  navClose.classList.remove("hidden");
  bodyDark.classList.remove("hidden")
  hamburgerLinks.classList.add("mobile-nav-link")
})

navClose.addEventListener("click", function() {
  navbar.classList.remove("mobile-nav")
  navClose.classList.add("hidden")
  bodyDark.classList.add("hidden")
})
