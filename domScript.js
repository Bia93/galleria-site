function generatePaintings() {
  const paintings = JSON.parse(localStorage.getItem("paintings"));
  const container = document.getElementById("container");
  //facem un div pentru FIECARE painting(tablou)
  //pentru fiecare painting cream un div
  paintings.forEach((painting) => {
    const divPainting = document.createElement("div");
    divPainting.classList.add("info-photos");
    const divImage = document.createElement("div");
    divImage.classList.add("text");
    divPainting.appendChild(divImage);
    const image = document.createElement("img");
    image.setAttribute("src", painting.image);
    image.setAttribute("alt", `image of ${painting.title}`);
    divPainting.appendChild(image);
    container.appendChild(divPainting);
    const a = document.createElement("a");
    a.classList.add("photo-holder");
    divPainting.appendChild(a);
    a.appendChild(image);
    a.appendChild(divImage);
    //a.setAttribute("href", "./index1.html");
    let pageUrls = [
      "./index1.html",
      "./index2.html",
      "./index3.html",
      "./index4.html",
      "./index5.html",
      "./index6.html",
      "./index7.html",
      "./index8.html",
      "./index9.html",
      "./index10.html",
      "./index11.html",
      "./index12.html",
      "./index13.html",
      "./index14.html",
      "./index15.html",
    ];
    var anchorElements = document.querySelectorAll("a");
    // loop through each anchor element and set its href attribute
    for (var i = 0; i < anchorElements.length; i++) {
      // set href attribute to corresponding URL from the array
      anchorElements[i].setAttribute(
        "href",
        `${pageUrls[i % pageUrls.length]}`
      );
    }
    const title = document.createElement("h2");
    title.textContent = `${painting.title}`;
    divImage.appendChild(title);
    const painter = document.createElement("p");
    painter.textContent = `${painting.painter}`;
    divImage.appendChild(painter);
  });
}
generatePaintings();
