let nav = document.querySelector("header nav");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");

let features = document.getElementById("features");
let featuresUl = document.querySelector("header nav .nav-left li .features-ul");
let featuresUpDown = document.querySelector(
  "header nav .nav-left #features img"
);

let company = document.getElementById("company");
let companyUl = document.querySelector("header nav .nav-left li .company-ul");
let companyUpDown = document.querySelector("header nav .nav-left #company img");

menu.onclick = () => (nav.style.right = "0");

closeMenu.onclick = () => (nav.style.right = "-150%");

features.onclick = () => {
  featuresUl.classList.toggle("active");
  if (featuresUl.classList.contains("active")) {
    featuresUpDown.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    featuresUpDown.setAttribute("src", "images/icon-arrow-down.svg");
  }
};

company.onclick = () => {
  companyUl.classList.toggle("active");
  if (companyUl.classList.contains("active")) {
    companyUpDown.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    companyUpDown.setAttribute("src", "images/icon-arrow-down.svg");
  }
};
