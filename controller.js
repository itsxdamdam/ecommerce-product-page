const quantity = document.getElementById("quantity");
const minusQuantity = document.getElementById("minus");
const addQuantity = document.getElementById("plus");



// functions
let amount = quantity.textContent;

const updateQuantity = function () {
  quantity.innerText = amount
}

console.log(amount)

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