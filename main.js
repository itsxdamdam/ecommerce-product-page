const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger-menu")
const navClose = document.querySelector(".nav-close")
const body = document.querySelector("body")

hamburger.addEventListener("click", function() {
  navbar.classList.add("mobile-nav");
  navClose.classList.remove("hidden");
  console.log(body)
  body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  body.style.zIndex = 10000
})

navClose.addEventListener("click", function() {
  navbar.classList.remove("mobile-nav")
  navClose.classList.add("hidden")
})
