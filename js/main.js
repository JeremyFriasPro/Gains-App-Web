

// open and close navigation
// status: Successful 
let ham = document.querySelector(".hamburger-menu");
let ssv = document.querySelector(".small-screen-nav");
let x = document.querySelector(".close img");

ssv.style.display = "none";

function openNav() {
    ssv.style.display = "block";
}

function closeNav() {
    ssv.style.display = "none";
}

// filter images

// buttons
let cBTN = document.querySelector("#com-btn");
let aBTN = document.querySelector("#aud-btn");
let jBTN = document.querySelector("#jud-btn");

// image section
let filterImages = document.querySelector(".filter-images");

let firstImage = document.querySelector(".filter-images img:nth-child(1)");
let secondImage = document.querySelector(".filter-images img:nth-child(2)");
let thirdImage = document.querySelector(".filter-images img:nth-child(3)");
let fourthImage = document.querySelector(".filter-images img:nth-child(4)");
let fifthImage = document.querySelector(".filter-images img:nth-child(5)");

// competition
let oneC = "./assets/images/filter/c/1.jpg";
let twoC= "./assets/images/filter/c/2.jpg";
let threeC = "./assets/images/filter/c/3.jpg";
let fourC = "./assets/images/filter/c/4.jpg";
let fiveC = "./assets/images/filter/c/5.jpg";

// audience
let oneA = "./assets/images/filter/a/1.jpg";
let twoA= "./assets/images/filter/a/2.jpg";
let threeA = "./assets/images/filter/a/3.jpg";
let fourA= "./assets/images/filter/a/4.jpg";
let fiveA = "./assets/images/filter/a/5.jpg";

// judges
let oneJ = "./assets/images/filter/j/1.jpg";
let twoJ= "./assets/images/filter/j/2.jpg";
let threeJ = "./assets/images/filter/j/3.jpg";
let fourJ= "./assets/images/filter/j/4.jpg";
let fiveJ = "./assets/images/filter/j/5.jpg";

// set comp to default
firstImage.src = oneC;
secondImage.src = twoC;
thirdImage.src = threeC;
fourthImage.src = fourC;
fifthImage.src = fiveC;

// setting a default tab
cBTN.classList.add("tab_active"); 

cBTN.addEventListener("click", ()=>{
    aBTN.classList.remove("tab_active");
    aBTN.classList.add("tab_notActive");

    jBTN.classList.remove("tab_active");
    jBTN.classList.add("tab_notActive");


    cBTN.classList.add("tab_active");
    cBTN.classList.remove("tab_notActive");

    // add competition filterImages
    firstImage.src = oneC;
    secondImage.src = twoC;
    thirdImage.src = threeC;
    fourthImage.src = fourC;
    fifthImage.src = fiveC;
});

aBTN.addEventListener("click", ()=>{
    cBTN.classList.remove("tab_active");
    cBTN.classList.add("tab_notActive");

    jBTN.classList.remove("tab_active");
    jBTN.classList.add("tab_notActive");


    aBTN.classList.add("tab_active");
    aBTN.classList.remove("tab_notActive");

    // add audience filterImages
    firstImage.src = oneA;
    secondImage.src = twoA;
    thirdImage.src = threeA;
    fourthImage.src = fourA;
    fifthImage.src = fiveA;
});

jBTN.addEventListener("click", ()=>{
    aBTN.classList.remove("tab_active");
    aBTN.classList.add("tab_notActive");

    cBTN.classList.remove("tab_active");
    cBTN.classList.add("tab_notActive");


    jBTN.classList.add("tab_active");
    jBTN.classList.remove("tab_notActive");

    // add judges filterImages
    firstImage.src = oneJ;
    secondImage.src = twoJ;
    thirdImage.src = threeJ;
    fourthImage.src = fourJ;
    fifthImage.src = fiveJ;
});