export async function fetchProducts() {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching products:', error);
  }
}

export function renderProducts(products, addToCart) {
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      
      productDiv.innerHTML = `
          <h3>${product.title}</h3>
          <img src="${product.image}" alt="${product.title}" width="100">
          <p>Price: $${product.price}</p>
          <button data-id="${product.id}">Add to Cart</button>
      `;
      
      productDiv.querySelector('button').addEventListener('click', () => addToCart(product));
      productsContainer.appendChild(productDiv);
  });
}