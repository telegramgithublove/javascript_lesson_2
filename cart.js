export function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  return cart;
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(cart, product) {
  if (cart[product.id]) {
      cart[product.id].quantity++;
  } else {
      cart[product.id] = {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
      };
  }
  saveCart(cart);
  renderCart(cart);
}

export function removeFromCart(cart, productId) {
  if (cart[productId]) {
      delete cart[productId];
      saveCart(cart);
      renderCart(cart);
  }
}

export function renderCart(cart) {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  Object.values(cart).forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
          <p>${item.title} - ${item.quantity} x $${item.price}</p>
          <button data-id="${item.id}">Remove</button>
      `;
      
      const removeButton = cartItem.querySelector('button');
      removeButton.addEventListener('click', () => {
          removeFromCart(cart, item.id); 
      });

      cartItemsContainer.appendChild(cartItem);
  });
}