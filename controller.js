const quantity = document.getElementById("quantity");
const minusQuantity = document.getElementById("minus");
const addQuantity = document.getElementById("plus");
const cartList = document.querySelector(".cart-list");
const cartListBody = document.querySelector(".cart-body");
const cartNotification = document.querySelector(".cart-notification")
const addToCart = document.getElementById("addtocart");

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
    cartList.classList.add("hidden")
    const newDiv = document.createElement('div')
    newDiv.textContent = "Your cart is empty"
    cartListBody.appendChild(newDiv)
    cartNotification.classList.add("hidden")
  }
}

const updateCart = function() {
  if(amount > 0) {
    const cartListBody = document.querySelector(".cart-body div");
    if(cartListBody.textContent === "Your cart is empty") {
      cartListBody.textContent = ""
    }
    cartListBody.classList.remove("cart-body")
    cartListBody.classList.add("cart-body-item")
    cartNotification.textContent++

    cartListBody.insertAdjacentHTML(
      'afterbegin',
      `<div>
        <img src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
        <div>
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 x ${amount} <span class="bold">$${125 * amount}.00</span></p>
        </div>
        <button id="delete">
          <p></p>
          <img src="./images/icon-delete.svg" alt="delete">
        </button>
      </div>
      <button id="checkout">Checkout</button>`
    )
    
    const deleteIcon = document.getElementById('delete');
    deleteIcon.addEventListener('click', function(e) {
      const target = e.target
      target.parentElement.parentElement.parentElement.remove()
      cartListBody.textContent = "Your cart is empty"

    })
  }
}

const renderCartView = function() {
  defaultCart()
  updateCart()
}

export {cartList, renderCartView, addToCart, cartNotification, amount, cartListBody };