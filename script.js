// When page loads
window.addEventListener('DOMContentLoaded', function () {
    console.log('Welcome to Freye Clothing!');
  });
  
  // "Shop Now" button action
  document.addEventListener('DOMContentLoaded', function () {
    const shopButton = document.querySelector('.btn');
  
    if (shopButton) {
      shopButton.addEventListener('click', function (e) {
        e.preventDefault(); // prevent link from navigating
        alert('Redirecting to our shop...');
      });
    }
  });
  