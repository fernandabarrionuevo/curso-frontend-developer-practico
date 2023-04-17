const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const burguerMenu = document.querySelector(".burguer-menu");

const shoopingCartMenu = document.querySelector(".navbar-shopping-cart");
const orderDetail = document.querySelector("#shopping-card-container");

const productDetail = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
shoopingCartMenu.addEventListener("click", toggleShoppingCartMenu);
productDetailClose.addEventListener("click", closeProductDetail);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
    orderDetail.classList.add("inactive");
}


function toggleMobileMenu(){
    const isOrderDetailClosed = orderDetail.classList.contains("inactive");
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if(!isOrderDetailClosed || !isProductDetailClosed){
        orderDetail.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
        productDetail.classList.add("inactive");
    } else{
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleShoppingCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed || !isProductDetailClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add("inactive");
        orderDetail.classList.toggle("inactive");
        desktopMenu.classList.add("inactive");
        productDetail.classList.add("inactive");
    } else{
        orderDetail.classList.toggle("inactive");
    }
}

function closeProductDetail(){
    
    productDetail.classList.add("inactive");
}

function openProductDetail(){
    mobileMenu.classList.add("inactive");
    orderDetail.classList.add("inactive");
    productDetail.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
}


/*---Lista de Productos*/

productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }
);
productList.push({
    name: "Tv",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }
);
productList.push({
    name: "Celular",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }
);

function renderProduct(array){
    for(product of array){
    
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src", "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        img.addEventListener("click", openProductDetail);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const figure = document.createElement("figure");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        figure.appendChild(productImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    
    };
}

renderProduct(productList);





