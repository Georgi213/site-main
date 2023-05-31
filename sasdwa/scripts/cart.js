const myCartButton = document.getElementById("myCartButton");
const cartDropdown = document.getElementById("cartDropdown");

// Add a click event listener to the button
myCartButton.addEventListener("click", function() {
    // Toggle the "show" class on the dropdown menu
    cartDropdown.classList.toggle("show");
});