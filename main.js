const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const burguerMenu = document.querySelector(".burguer-menu");

const shoopingCartMenu = document.querySelector(".navbar-shopping-cart");
const orderDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
shoopingCartMenu.addEventListener("click", toggleShoppingCartMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu(){
    const isOrderDetailClosed = orderDetail.classList.contains("inactive");
    
    if(!isOrderDetailClosed){
        orderDetail.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    } else{
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleShoppingCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
        orderDetail.classList.toggle("inactive");
    } else{
        orderDetail.classList.toggle("inactive");
    }
}