const quantity = document.getElementById("quantity");
const minusQuantity = document.getElementById("minus");
const addQuantity = document.getElementById("plus");
const cartList = document.querySelector(".cart-list");
const cartListBody = document.querySelector(".cart-body");
const cartNotification = document.querySelector(".cart-notification")
const addToCart = document.getElementById("addtocart");
const cart = document.getElementById("cart");
const mainImage = document.querySelector(".item img")



// functions
let amount = 0;

const updateQuantity = function() {
  quantity.innerText = amount
}


minusQuantity.addEventListener('click', function() {
  if (amount === 0) {
    return;
  }
  amount--
  updateQuantity()
})

addQuantity.addEventListener('click', function() {
  amount++
  updateQuantity()
})

const defaultCart = function() {
  if(amount === 0) {
    cartListBody.textContent = "Your cart is empty"
    cartNotification.classList.add("hidden")
  }
}

const updateCart = function() {
  if(amount > 0) {
    cartListBody.classList.remove("cart-body")
    cartListBody.classList.add("cart-body-item")

    if(cartListBody.textContent === "Your cart is empty") {
      cartListBody.textContent = ""
    }
     
    cartNotification.textContent++

    cartListBody.insertAdjacentHTML(
      'afterbegin',
      `<div id="display-item">
        <div>
          <img src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${amount} <span class="bold">$${125 * amount}.00</span></p>
          </div>
          <button id="delete">
            <img src="./images/icon-delete.svg" alt="delete">
          </button>
        </div>
        <button id="checkout">Checkout</button>
      </div>`
    )

    if(cartListBody.childNodes.length > 1) {
      cartListBody.style.overflow = "scroll"
      cartListBody.style.overflowX = "hidden"
      cartListBody.style.height = "70%"
    }

    amount = 0;
    updateQuantity()

    const deleteIcon = document.getElementById('delete');

    deleteIcon.addEventListener('click', function(e) {
      const target = e.target
      
      function deleteThisthing() {
        target.parentElement.parentElement.parentElement.remove()
      }

      deleteThisthing()
      

      if(cartListBody.childNodes.length === 0) {
        cartListBody.classList.add("cart-body")
        cartListBody.classList.remove("cart-body-item")
        cartListBody.textContent = "Your cart is empty"
        cartNotification.classList.add("hidden")
      }

      if(cartListBody.childNodes.length === 1) {
        cartListBody.style.removeProperty("overflow")
      }

      cartNotification.textContent--
    
    })
  }
}





const renderCartView = function() {
  defaultCart()
  updateCart()
}

export {cartList, renderCartView, addToCart, cartNotification, amount, cartListBody, cart, mainImage };