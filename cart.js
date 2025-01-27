let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${itemName} has been added to the cart!`);
}

// Render cart on cart.html
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
      </tr>
    `;
    total += item.price;
  });

  cartTotal.innerText = total;
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Initialize the cart on load
renderCart();
