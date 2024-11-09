// Sample product data (you can replace this with an actual API or database fetch)
const products = [
    { id: 1, name: "Product 1", price: 25.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 45.50, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 15.75, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 32.00, image: "https://via.placeholder.com/200" }
];

// Cart data structure
let cart = [];

// Load products dynamically
const productContainer = document.querySelector('.product-grid');

function loadProducts() {
    productContainer.innerHTML = ''; // Clear current content
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button class="buy-now" onclick="buyNow(${product.id})">
                <i class="fas fa-shopping-bag"></i> Buy Now
            </button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Buy Now (direct checkout for a single product)
function buyNow(productId) {
    const product = products.find(item => item.id === productId);
    alert(`Proceeding to buy ${product.name} for $${product.price.toFixed(2)}`);
    // Implement checkout logic here (e.g., redirect to checkout page)
}

// Update cart item count in the header
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show cart summary (you can integrate this with a modal or cart page)
function showCartSummary() {
    let summary = "Your Cart:\n";
    let totalAmount = 0;

    cart.forEach(item => {
        summary += `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
        totalAmount += item.price * item.quantity;
    });

    summary += `\nTotal: $${totalAmount.toFixed(2)}`;
    alert(summary);
}

// Initialize website on load
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();
});
function buyNow(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return console.error("Product not found!");

    // Redirect to a checkout page, passing product ID and price as URL parameters
    const checkoutPage = `checkout.html?productId=${product.id}&price=${product.price.toFixed(2)}`;
    window.location.href = checkoutPage;
}
