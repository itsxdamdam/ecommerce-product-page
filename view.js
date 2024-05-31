import { cartList } from "./controller.js";
import { addToCart } from "./controller.js";
import { renderCartView } from "./controller.js";
import { cartNotification } from "./controller.js";
import { amount } from "./controller.js";
import { cartListBody } from "./controller.js";

const cartIcon = document.getElementById("cart")

// view
const init = function() {
  renderCartView()
}

init()

cartIcon.addEventListener('click', function() {
  cartList.classList.toggle('hidden')
})

addToCart.addEventListener("click", function() {
  renderCartView()
  cartNotification.classList.remove("hidden")  
})
