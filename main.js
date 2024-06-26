

//

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);
let escapeModal = function (event) {
  //This anonymous function takes one parameter event, which represents the event object.
  // Inside the function, it checks if the pressed key is the "Escape" key.
  //If the pressed key is "Escape", it calls the closeModal function.
  if (event.key === "Escape") {
    closeModal();
  }
};
document.addEventListener("keydown", escapeModal);
//This line adds an event listener to the document object.
//It listens for a "keydown" event anywhere on the document.
//When a key is pressed, it triggers the escapeModal function.
//
