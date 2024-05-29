import { cartList } from "./controller.js";

const cartIcon = document.getElementById("cart")

// view
cartIcon.addEventListener('click', function() {
  cartList.classList.toggle('hidden')
  console.log("he reach")
})