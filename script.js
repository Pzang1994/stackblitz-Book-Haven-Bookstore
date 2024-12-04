const log = console.log;

let hamburgerMenu = document.getElementById("hamburger-menu");
let links = document.getElementById("hamburger-links");

function displayMenu(){
    if (links.style.display === "none"){
        links.style.display = "block";
        log("this happened");
    } else { 
        links.style.display = "none";
        log("then this happened");
    };
};

hamburgerMenu.addEventListener("click", displayMenu);
