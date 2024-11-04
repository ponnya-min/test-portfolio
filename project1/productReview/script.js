function goToReview(productId, imageUrl) {
    localStorage.setItem('productId', productId);
    localStorage.setItem('productImage', imageUrl);  // Store image URL in localStorage
    window.location.href = 'review.html';
}
