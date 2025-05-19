// script.js
// This file contains JavaScript functionality for the eCommerce website.

// Function to handle form validation for registration and login
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('is-invalid'); // Bootstrap class for invalid input
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Event listener for registration form submission
const registrationForm = document.querySelector('#registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        if (!validateForm(this)) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
}

// Event listener for login form submission
const loginForm = document.querySelector('#loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        if (!validateForm(this)) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
}

// Function to update cart display
function updateCartDisplay(cartItems) {
    const cartContainer = document.querySelector('#cartItems');
    cartContainer.innerHTML = ''; // Clear existing items

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>${item.name}</div>
            <div>${item.price}</div>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Event listener for removing items from the cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const itemId = event.target.getAttribute('data-id');
        // Logic to remove item from cart (not implemented here)
        // Update cart display after removal
        updateCartDisplay(cartItems); // Assuming cartItems is an array of current cart items
    }
});

// Function to initialize the page
function init() {
    // Load cart items and update display
    const cartItems = []; // Fetch cart items from storage or API
    updateCartDisplay(cartItems);
}

// Call init on page load
document.addEventListener('DOMContentLoaded', init);