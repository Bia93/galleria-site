let shop = document.getElementById("shop");
let shopItemsData = [
  {
    id: "unu",
    name: "Colorful rug",
    price: 80,
    desc: "made from yarn",
    img: "/photos/RolsStrata05_1400x.webp",
  },
  {
    id: "doi",
    name: "Green pillow",
    price: 30,
    desc: "made of 100% linen",
    img: "/photos/Bungalow_pude_seagrass_LINEN_50x50_08a17a8b-057f-4c30-9259-ea31c2efc54a_1400x.webp",
  },
  {
    id: "trei",
    name: "Yellow pillow",
    price: 30,
    desc: "made from yarn",
    img: "/photos/Bungalow_pude_ochre_LINEN_50x50_1f841a54-f9cd-4a70-9138-a498c92331bf_1400x.webp ",
  },
  {
    id: "patru",
    name: "Apron",
    price: 25,
    desc: "made of 100% cotton",
    img: "/photos/Vearkforklaedebla_1400x.webp",
  },
]; // when we wrote in html, we wrote with the hand.  we are going to automate it
// we are going to make an array;
// we are storing object inside the array {}
let basket = [
  {
    id: "jdfkjhdfkdf",
    item: 1,
  },
]; //whicg items we selected
let generateShop = () => {
  //arrow function
  //generating the cart using javascript
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x; //folosim destructurari pt a nu mai scrie ${x.name},${x.desc}etc. si pt ca avem obiext si ca sa accesam valoare scriem de ex: shopItemsData.id si accesam valoarea
      //map imi itereaza peste obiectele din array
      //am pus ${x.name,img etc} pt a schimba la fiecare obiect valorile
      return `<div id=product-id-${id} class="item"> 
    <img width="200" src="${img}" />
    <div class="details">
      <h3>${name}</h3> 
      <h3>${desc}</h3>
  
      <h2>€ ${price}</h2>
      <div class="price-quantity">
        <div class="button">
          <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
          <div id=${id} class="quantity">0</div>  
          <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  </div>`;
    }) //am dat id=${id} la div class quantity deoarece de fiecare fata cand vom incrementea sau invers vom targeta id=${id}
    .join("")); //he join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
};
generateShop();
//increment function
let increment = (id) => {
  let selectedItem = id;

  basket.push({
    id: selectedItem.id,
    item: 1,
  });
  console.log(basket);
};
//decrement function
let decrement = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
};
//update function
let update = () => {};
