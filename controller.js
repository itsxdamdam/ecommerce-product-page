const quantity = document.getElementById("quantity");
const minusQuantity = document.getElementById("minus");
const addQuantity = document.getElementById("plus");
const cartList = document.querySelector(".cart-list");
const cartListBody = document.querySelector(".cart-body");
const cartNotification = document.querySelector(".cart-notification")
const addToCart = document.getElementById("addtocart");


// functions
let amount = 1;

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
    cartListBody.textContent = "Your cart is empty"
    cartNotification.classList.add("hidden")
  }
}

const updateCart = function() {
  if(amount > 0) {
    const cartListBody = document.querySelector(".cart-body");
    cartListBody.classList.remove("cart-body")
    cartListBody.classList.add("cart-body-item")

    cartListBody.insertAdjacentHTML(
      'afterbegin',
      `<img src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
      <div>
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${amount} <span class="bold">$${125 * amount}.00</span></p>
      </div>
      <button id="delete">
        <p></p>
        <img src="./images/icon-delete.svg" alt="delete">
      </button>`
    )
  }
}

  updateCart()



// const renderCartView = function() {
//   defaultCart()
//   updateCart()
// }


// renderCartView()


export {cartList, defaultCart };