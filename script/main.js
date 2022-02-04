"useStrict";

// Variables
const hamburger = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close_icon");
const menu = document.querySelector(".menu-space");
const linkSpace = document.querySelector(".menu_links");
const menuLinks = document.querySelectorAll(".menu_link");

// Functions
const displayMenu = () => {
  menu.style.width = "50vw";
  closeBtn.style.display = "block";
  linkSpace.style.display = "flex";
};
const closeMenu = () => {
  menu.style.width = "0vw";
  closeBtn.style.display = "none";
  linkSpace.style.display = "none";
};

// Implementations
menuLinks.forEach((el) => el.addEventListener("click", closeMenu));
hamburger.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", closeMenu);
