import { fetchProducts, renderProducts } from './products.js';
import { loadCart, addToCart, renderCart } from './cart.js';

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    const cart = loadCart();
    
    renderProducts(products, (product) => {
        addToCart(cart, product);
    });

    renderCart(cart);

    document.getElementById('clear-cart').addEventListener('click', () => {
        localStorage.removeItem('cart');
        renderCart({});
    });
});