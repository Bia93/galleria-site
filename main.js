let search = () => {
  let searchbox = document.getElementById("search-item1").value.toLowerCase();
  let storeitems = document.getElementById("photos-id");
  let product = document.querySelectorAll(".info-photo");
  let pname = document.querySelectorAll(".info-photo h2");

  for (let i = 0; i < product.length; i++) {
    let matchH2 = pname[i];

    if (matchH2) {
      let textValueH2 = matchH2.textContent || matchH2.innerHTML;
      let textValueP =
        product[i].querySelector("p").textContent ||
        product[i].querySelector("p").innerHTML;

      if (
        textValueH2.toLowerCase().indexOf(searchbox) > -1 ||
        textValueP.toLowerCase().indexOf(searchbox) > -1
      ) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

//
function openNav() {
  document.getElementById("mySidebar").style.width = "420px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
//

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
