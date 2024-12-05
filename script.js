const log = console.log;

let hamburgerMenu = document.getElementById("hamburger-menu");
let links = document.getElementById("hamburger-links");
let placeHolder1 = document.getElementById("placeholder-1");
let placeHolder2 = document.getElementById("placeholder-2");
let searchBar = document.getElementById("searchbar");

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

function moveSearchbar(mediaQuery) {
    if (mediaQuery.matches) {
        placeHolder1.appendChild(searchBar);
        console.log("Minimum width reached!");
    } else if (placeHolder1.hasChildNodes()){
        placeHolder2.appendChild(searchBar);
        console.log("Below minimum width.");
    }
  }
  
  const minWidthMediaQuery = window.matchMedia("(min-width: 480px)");
  
moveSearchbar(minWidthMediaQuery);

minWidthMediaQuery.addEventListener("change", moveSearchbar);
