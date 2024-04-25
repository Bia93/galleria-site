let search = () => {
  let searchbox = document.getElementById("search-item").value.toLowerCase();
  let storeitems = document.getElementsById("container");
  const product = document.querySelectorAll(".info-photos");
  const pname = document.querySelectorAll(".info-photo h2");
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
