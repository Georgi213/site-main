const myUserButton = document.getElementById("myUserButton");
const cartDropdown = document.getElementById("cartDropdown");

// Add a click event listener to the button
myUserButton.addEventListener("click", function() {
    // Toggle the "show" class on the dropdown menu
    cartDropdown.classList.toggle("show");
});