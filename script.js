const log = console.log;

let hamburgerMenu = document.getElementById("hamburger-menu");
let links = document.getElementById("hamburger-links");
let placeHolder1 = document.getElementById("placeholder-1");
let placeHolder2 = document.getElementById("placeholder-2");
let searchBar = document.getElementById("searchbar");

function displayMenu(){
    if (links.style.display === "none"){
        links.style.display = "block";
        //log("this happened");
    } else { 
        links.style.display = "none";
        //log("then this happened");
    };
};

hamburgerMenu.addEventListener("click", displayMenu);

function moveSearchbar(mediaQuery) {
    if (mediaQuery.matches) {
        placeHolder1.appendChild(searchBar);
    } else if (placeHolder1.hasChildNodes()){
        placeHolder2.appendChild(searchBar);
        console.log("Below minimum width.");
    }
  }
  
  const minWidthMediaQuery = window.matchMedia("(min-width: 480px)");
  
moveSearchbar(minWidthMediaQuery);

minWidthMediaQuery.addEventListener("change", moveSearchbar);

function contactUs(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const feedback = document.getElementById("Feedback").value;
    
    const customerInfo = {name, email, phone, feedback};
    
    const keyValue = name;
    localStorage.setItem(keyValue, JSON.stringify(customerInfo));

    const who = JSON.parse(localStorage.getItem(name));
    alert("Thank you for your message, "+ who.name + "!");
};

if(document.getElementById("Submit")){
    document.getElementById("Submit").addEventListener("click", contactUs);
};

/*This took a really long time for me to figure out... Not having this if statement
in place was causing a lot of problems with the rest of the code below on every page
that didn't have the Submit button located on the About Us page.*/

document.getElementById("Newsletter").addEventListener("submit", Subscribe);

function Subscribe(){
    alert("Thank you for your subscription!");
};

let items = [];

if(document.getElementsByClassName("add-to-cart")){
    const addToCart = document.getElementsByClassName("add-to-cart");
    const title = document.getElementsByClassName("Title");
    for(let i=0; i < addToCart.length; i++){
        addToCart[i].setAttribute("id", `product-${i}-button`)
    };
    for(let j=0; j < title.length; j++){
        title[j].setAttribute("id", `product-${j}`)
    };
    for(let k=0; k < addToCart.length; k++){
        addToCart[k].addEventListener("click", function(){
            let title = document.getElementById(`product-${k}`).innerText;
            items.push(title);
            //log(items);
            sessionStorage.setItem("Items", JSON.stringify(items));
            //log(title);
            alert(`${title} added to cart!`);
        });
    };
    //log(addToCart);
    //log(title);
}

const myCartBtn = document.getElementById("MyCart-btn");
const myCart = document.getElementById("MyCart");
const cartList = document.getElementById("Items");
const clearCartBtn = document.getElementById("ClearCart");
const processOrderBtn = document.getElementById("ProcessOrder");
log(myCartBtn);

myCartBtn.addEventListener("click", function showCart(){
    const list = JSON.parse(sessionStorage.getItem("Items"));
    if (sessionStorage.getItem("Items")) {
        list.forEach(element => {
            let newLi = document.createElement("li");
            newLi.innerText = element;
            cartList.appendChild(newLi);
        });
    };
    myCart.style.display = "block";
});

window.addEventListener("click", function hideCart(event){
    if (event.target == myCart) {
        myCart.style.display = "none";
        while(cartList.firstChild){
            cartList.removeChild(cartList.firstChild);
        };
    };

});

const xCartBtn = document.getElementById("x-cart-button");
log(xCartBtn);

xCartBtn.addEventListener("click", function xCart(){
    myCart.style.display = "none";
    while(cartList.firstChild){
        cartList.removeChild(cartList.firstChild);
    };
});

clearCartBtn.addEventListener("click", function clearCart(){
    if(sessionStorage.getItem("Items")){
        sessionStorage.removeItem("Items");
        items.length = 0;
        while(cartList.firstChild){
            cartList.removeChild(cartList.firstChild);
        };
        alert("Cart Cleared");
    } else {
        alert("No Items to Clear");
    };
});

processOrderBtn.addEventListener("click", function processOrder(){
    if(sessionStorage.getItem("Items")){
        sessionStorage.removeItem("Items");
        items.length = 0;
        while(cartList.firstChild){
            cartList.removeChild(cartList.firstChild);
        };
        alert("Thank you for your order!");
    } else {
        alert("Cart is Empty");
    };
});