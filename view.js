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

  let cartListElements = [cartList]
  cartListElements.push(...cartList.getElementsByTagName("*"))

  if(!cartVisibility && e.target !== cartIcon) {

    cartList.classList.add('hidden')
    
    for(let i = 0; i < cartListElements.length; i++) {
      
      if(e.target === cartListElements[i]) {
       
        // console.log(e.target, cartListElements[i])
       
        if(true) {
          cartList.classList.remove('hidden')
        }
      }
    }
    
  }
})

addToCart.addEventListener("click", function() {
  renderCartView()
  cartNotification.classList.remove("hidden")  
})
