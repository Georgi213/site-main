// Get a reference to the checkout button
const nav_categories = document.querySelectorAll('.nav-categories ul li')
const collapseContainer = document.querySelectorAll('.collapse .card .collapse-container')
const underCategories = document.querySelectorAll('.under-categories')
const categoriesType = document.querySelectorAll('.under-categories p')
const titleLinks = document.querySelectorAll('.under-categories h4 a')

//Get the button
const mybutton = document.getElementById("btn-back-to-top");

nav_categories.forEach(buttons => buttons.addEventListener('click', () => {
    buttons.classList.toggle('focus-color')
}))

collapseContainer.forEach(collapseContainer => {
    collapseContainer.style.fontSize = '10px'
    collapseContainer.style.gap = '40px'
})

categoriesType.forEach(type => {
    type.style.margin = '0px'
    type.style.padding = '0px'
})

underCategories.forEach(category => category.style.marginTop = '-5px')

titleLinks.forEach(titleLink => {
    titleLink.style.fontSize = '20px'
    titleLink.style.maxWidth = '200px'
    titleLink.style.fontWeight = 'bold'
})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const checkoutButton = document.getElementById('checkout-button');

// Add an event listener to the button click
checkoutButton.addEventListener('click', function() {
    // TODO: Use a payment gateway API to process the payment
    // ...

    // Display a confirmation message to the user
    alert('Your purchase has been completed!');
});

// Get a reference to the continue shopping button
const continueShoppingButton = document.getElementById('continue-shopping-button');

// Add an event listener to the button click
continueShoppingButton.addEventListener('click', function() {
    // Redirect the user to the home page, or another page of your choice
    window.location.href = 'https://example.com/';
});


continueShoppingButton.addEventListener('click', function() {
    // Perform the "Continue Shopping" action here
    console.log('Continue Shopping button clicked!');
});

const makePurchaseButton = document.getElementById('make-purchase-button');
makePurchaseButton.addEventListener('click', function() {
    // Perform the "Make a Purchase" action here
    console.log('Make a Purchase button clicked!');
});
// Get a reference to all the remove buttons on the page

var removeButtons = document.querySelectorAll('.remove-button');
// Loop through each remove button and attach a click event handler
removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the parent element of the button (i.e. the table row)
        var rowElement = button.parentElement.parentElement;

        // Remove the table row from the table
        rowElement.remove();
    });
});
var cartMenu = document.querySelector('.cart-menu');
var cartMenuButton = document.querySelector('.cart-menu-button');
var cartMenuDropdown = document.querySelector('.cart-menu-dropdown');

cartMenuButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (cartMenuDropdown.style.display === 'block') {
        cartMenuDropdown.style.display = 'none';
    } else {
        cartMenuDropdown.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    if (!cartMenu.contains(event.target)) {
        cartMenuDropdown.style.display = 'none';
    }
});
// Get a reference to all the quantity buttons on the page
var quantityButtons = document.querySelectorAll('.quantity-button');

// Loop through each quantity button and attach a click event handler
quantityButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the parent element of the button (i.e. the quantity td)
        var quantityElement = button.parentElement;

        // Get the quantity text element
        var quantityText = quantityElement.querySelector('.quantity-text');

        // Get the current quantity from the quantity text element
        var currentQuantity = parseInt(quantityText.innerText);

        // Get the action (i.e. increment or decrement) from the button data-action attribute
        var action = button.getAttribute('data-action');

        // Update the quantity based on the action
        if (action === 'decrement' && currentQuantity > 1) {
            quantityText.innerText = currentQuantity - 1;
        } else if (action === 'increment') {
            quantityText.innerText = currentQuantity + 1;
        }

        // Update the total for this item
        updateItemTotal(quantityElement.parentElement);
    });
});
function zoomIn() {
    var page = document.body;
    var zoom = parseFloat(page.style.zoom) || 1.0;
    zoom += 0.1;
    page.style.zoom = zoom;
}

function zoomOut() {
    var page = document.body;
    var zoom = parseFloat(page.style.zoom) || 1.0;
    zoom -= 0.1;
    page.style.zoom = zoom;
}
//
function stopZoom() {
    clearInterval(zoomInterval);
}
function updateItemTotal(rowElement) {
    // Get a reference to the price and quantity elements for this item
    var priceElement = rowElement.querySelector('.price');
    var quantityElement = rowElement.querySelector('.quantity-text');
    var totalElement = rowElement.querySelector('.total');

    // Get the price and quantity values as numbers
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = parseInt(quantityElement.innerText);

    // Calculate the total price for this item
    var total = price * quantity;
}
function toggleDescription() {
    var description = document.getElementById("description");
    if (description.style.visibility === "hidden") {
        description.style.visibility = "visible";
    } else {
        description.style.visibility = "hidden";
    }
}
function toggleDescription1() {
    var description = document.getElementById("description1");
    if (description.style.visibility === "hidden") {
        description.style.visibility = "visible";
    } else {
        description.style.visibility = "hidden";
    }
}

