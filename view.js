import { cartList } from "./controller.js";
import { addToCart } from "./controller.js";
import { renderCartView } from "./controller.js";
import { cartNotification } from "./controller.js";
import { cart } from "./controller.js";

const cartIcon = document.querySelector(".cart-icon")

// view
const init = function() {
  renderCartView()
}

init()

cartIcon.addEventListener('click', function(e) {
  cartList.classList.toggle('hidden')
})


window.addEventListener("click", function(e) {
  const cartVisibility = cartList.classList.contains("hidden")

  if(!cartVisibility && e.target !== cartIcon) {
    const displayItem = document.getElementById("display-item")

    if(e.target.parentElement === cartList || e.target.parentElement === cart) {
      cartList.classList.remove('hidden')
    } else if(e.target.parentElement === displayItem) {
      cartList.classList.remove('hidden')
    } else if(e.target.parentElement.parentElement === displayItem) {
      cartList.classList.remove('hidden')
    } else if(e.target.parentElement.parentElement.parentElement === displayItem) {
      cartList.classList.remove('hidden')
    } else if(e.target.parentElement.parentElement.parentElement.parentElement === displayItem) {
      cartList.classList.remove('hidden')
    } else {
      cartList.classList.add('hidden')
    }
  }
})

addToCart.addEventListener("click", function() {
  renderCartView()
  cartNotification.classList.remove("hidden")  
})
