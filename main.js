// selects hamburger button + header nav
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
// adds event to hamburger button
// opens/closes mobile nav
hamburger.addEventListener("click", handleHamburger);

function handleHamburger() {
  // if menu is open it will close
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  } else {
    // if menu is closed it will open
    hamburger.classList.add("active");
    nav.classList.add("active");
  }
}
// selects all header nav links
const navLink = document.querySelectorAll(".header-nav > a");
//  closes hamburger menu when link/"a" is clicked
navLink.forEach((element) => {
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});



