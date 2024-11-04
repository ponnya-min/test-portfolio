document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored productId and productImage from localStorage
    const productId = localStorage.getItem('productId');
    const productImage = localStorage.getItem('productImage');
    
    // Define your products with name and price (you can expand this if needed)
    const products = {
        1: { name: "Product 1", price: "$99.99" },
        2: { name: "Product 2", price: "$139.99" },
        3: { name: "Product 3", price: "$59.99" },
        4: { name: "Product 4", price: "$89.99" }
    };

    // Get the product-info section in the review.html
    const productInfo = document.getElementById('product-info');

    // Check if productId exists and is valid
    if (productId && products[productId]) {
        // Render the product image, name, and price inside product-info div
        productInfo.innerHTML = `
            <img src="${productImage}" alt="${products[productId].name}" style="width:300px; height:200px;">
            <h2>${products[productId].name}</h2>
            <p>Price: ${products[productId].price}</p>
        `;
    }

    // Handle review form submission
    const reviewForm = document.getElementById('review-form');
    const customerReviews = document.getElementById('customer-reviews');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Get the values from the input fields
        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('review').value;

        // Check for empty fields
        if (name === "" || reviewText === "") {
            alert("Both name and review are required!");
            return;
        }

        // Create a new review entry
        const newReview = document.createElement('div');
        newReview.innerHTML = `<strong>${name} says:</strong> <p>${reviewText}</p>`;
        customerReviews.appendChild(newReview);

        // Clear the form after submission
        reviewForm.reset();
    });

    // Go back to the product list page (index.html) when the "Back" button is clicked
    const backButton = document.querySelector('button[onclick="goBack()"]');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
