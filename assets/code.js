const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
hamIcon.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
    const isProductDetailOpen = !productDetail.classList.contains("inactive");

    if(isProductDetailOpen) {
        productDetail.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains("inactive");

    if(isProductDetailOpen) {
        productDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

    if(isMobileMenuOpen) {
        mobileMenu.classList.add("inactive");
    }

    if(isDesktopMenuOpen) {
        desktopMenu.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "Motorcycle",
    price: 520,
    image: "assets/img/Motorcycle.jpg"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "assets/img/Bike.jpg"
});
productList.push({
    name: "Computer",
    price: 620,
    image: "assets/img/Computer.jpg"
});
productList.push({
    name: "Motorcycle",
    price: 520,
    image: "assets/img/Motorcycle.jpg"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "assets/img/Bike.jpg"
});
productList.push({
    name: "Computer",
    price: 620,
    image: "assets/img/Computer.jpg"
});
productList.push({
    name: "Motorcycle",
    price: 520,
    image: "assets/img/Motorcycle.jpg"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "assets/img/Bike.jpg"
});
productList.push({
    name: "Computer",
    price: 620,
    image: "assets/img/Computer.jpg"
});
productList.push({
    name: "Motorcycle",
    price: 520,
    image: "assets/img/Motorcycle.jpg"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "assets/img/Bike.jpg"
});
productList.push({
    name: "Computer",
    price: 620,
    image: "assets/img/Computer.jpg"
});

function viewProducts(array) {
    for(product of array) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const divInfo = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        divInfo.appendChild(productPrice);
        divInfo.appendChild(productName);
    
        const productFigure = document.createElement("figure");
        const cartImg = document.createElement("img");
        cartImg.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    
        productFigure.appendChild(cartImg);
    
        productInfo.appendChild(divInfo);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

viewProducts(productList);