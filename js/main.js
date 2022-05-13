

// open and close navigation
let ham = document.querySelector(".hamburger-menu");
let ssv = document.querySelector(".small-screen-nav");
let x = document.querySelector(".close img");

ssv.style.display = "none";

function openNav() {
    ssv.style.display = "inline";
}

function closeNav() {
    ssv.style.display = "none";
}
