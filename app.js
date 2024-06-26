const productElements = document.querySelectorAll('.product');

productElements.forEach((productElement) => {
    productElement.addEventListener('click', handleClick);
});

function handleClick(event) {
    const productId = event.currentTarget.id;
    navigateToDetails(productId);
}

function navigateToDetails(productId) {
    const productDetailsUrl = `/ProductDetails/ProductDetails.html?productId=${productId}`;

    window.location.href = productDetailsUrl;
}


$(function(){
    $(".nav-placeholder").load("/Navbar/Navbar.html");
  });

function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}