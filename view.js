import { cartList } from "./controller.js";
import { addToCart } from "./controller.js";
import { renderCartView } from "./controller.js";
import { cartNotification } from "./controller.js";
import { mainImage } from "./controller.js";
// import { mobileNavbar } from "./main.js";
const thumbnail = document.querySelector(".thumbnail")

import { cart } from "./controller.js";

const cartIcon = document.querySelector(".cart-icon")
const lightBox = document.querySelector(".lightbox")
const cancel = document.querySelector(".cancel")

const thumbnailItem = thumbnail.children


// view
const init = function() {
  renderCartView()
  // mobileNavbar()
}

init()

cartIcon.addEventListener('click', function(e) {
  cartList.classList.toggle('hidden')
})


// window.addEventListener("click", function(e) {
//   const cartVisibility = cartList.classList.contains("hidden")
  
//   let cartListElements = [cartList]
//   cartListElements.push(...cartList.querySelectorAll("*"))

//   if(!cartVisibility && e.target !== cartIcon) {
//     cartList.classList.add('hidden')

//     for(let i = 0; i < cartListElements.length; i++) {
      
//       if(e.target === cartListElements[i]) {
       
//         // console.log(e.target, cartListElements[i])
       
//         if(true) {
//           cartList.classList.remove('hidden')
//         }
//       }
//     }
//   }

//   if(e.target === lightBox) {
//     lightBox.classList.add("hidden")
//   }



//   // for(let i = 0; i < thumbnailItem.length; i++) {
//   //   console.log(thumbnailItem[i].children)
//   //   console.log(e.target)
//   //   if(e.target === thumbnailItem[i]) {
//   //     thumbnailItem[i].classList.add("active")
//   //     console.log("is going")
//   //   }

//   // }


// })

mainImage.addEventListener("click", function() {
  lightBox.classList.toggle("hidden")
})


cancel.addEventListener("click", function() {
  lightBox.classList.add("hidden")
})



addToCart.addEventListener("click", function() {
  renderCartView()
  cartNotification.classList.remove("hidden")  
})
