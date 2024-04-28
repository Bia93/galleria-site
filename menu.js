//we are going to add some ARIA(accesible rich internet apps) -attributes for screen readers
//we are going to add role='dialog into our HTML
//aria-expanded='false'(indicating that the menu is closed or  hidden)- control wheter the dialogue's content is expanded or hidden -
//in our case we want the open button to control the topnav menu dialogue
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
}
function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
}
btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
