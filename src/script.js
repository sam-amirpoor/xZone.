const navButton = document.getElementById("nav-button");
const navMenu = document.getElementById("nav-menu");
const navLinkElems = document.querySelectorAll(".nav-link");
let navLinks = Array.from(navLinkElems);
let isMenuHide = true;

// Show or hide nav menu
navButton.addEventListener("click", () => {
  if (isMenuHide) {
    navMenu.classList.replace("invisible", "visible")
    navMenu.classList.replace("opacity-0", "opacity-100")
    navMenu.classList.replace("gap-[10px]", "gap-[30px]")
  } else {
    navMenu.classList.replace("visible", "invisible")
    navMenu.classList.replace("opacity-100", "opacity-0")
    navMenu.classList.replace("gap-[30px]", "gap-[10px]")
  }

  // Toggle between true and false
  isMenuHide = !isMenuHide;
});

// Hide nav menu when click on a link
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navMenu.classList.replace("visible", "invisible")
    navMenu.classList.replace("opacity-100", "opacity-0")
    navMenu.classList.replace("gap-[30px]", "gap-[10px]")

    isMenuHide = true;
  })
})