let shop = document.getElementById("shop");
let shopItemsData = [
  {
    id: "unu",
    name: "Colorful rug",
    price: 80,
    desc: "made from yarn",
    img: "./photos/RolsStrata05_1400x.webp",
  },
  {
    id: "doi",
    name: "Green pillow",
    price: 30,
    desc: "made of 100% linen",
    img: "./photos/Bungalow_pude_seagrass_LINEN_50x50_08a17a8b-057f-4c30-9259-ea31c2efc54a_1400x.webp",
  },
  {
    id: "trei",
    name: "Yellow pillow",
    price: 30,
    desc: "made from yarn",
    img: "./photos/Bungalow_pude_ochre_LINEN_50x50_1f841a54-f9cd-4a70-9138-a498c92331bf_1400x.webp ",
  },
  {
    id: "patru",
    name: "Apron",
    price: 25,
    desc: "made of 100% cotton",
    img: "./photos/Vearkforklaedebla_1400x.webp",
  },
]; // when we wrote in html, we wrote with the hand.  we are going to automate it
// we are going to make an array;
// we are storing object inside the array {}
let basket = JSON.parse(localStorage.getItem("data")) || [];
//; //which items we selected,it s gonna store in the basket
let generateShop = () => {
  //arrow function
  //generating the cart using javascript
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x; //folosim destructurari pt a nu mai scrie ${x.name},${x.desc}etc. si pt ca avem obiext si ca sa accesam valoare scriem de ex: shopItemsData.id si accesam valoarea
      //map imi itereaza peste obiectele din array
      //am pus ${x.name,img etc} pt a schimba la fiecare obiect valorile
      let search1 = basket.find((x) => x.id === id) || [];
      return `<div id=product-id-${id} class="item"> 
    <img width="200" src="${img}" />
    <div class="details">
      <h3>${name}</h3> 
      <h3>${desc}</h3>
  
      <h2>€ ${price}</h2>
      <div class="price-quantity">
        <div class="button">
          <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
          <div id=${id} class="quantity">${
        search1.item === undefined ? 0 : search1.item
      }</div>  
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
  let selectedItem = id; //we are gonna pass the id here
  let search = basket.find(function (y) {
    //--EXEMPLU INCEPUT--:const inventory = [
    //{ name: "apples", quantity: 2 },
    // { name: "bananas", quantity: 0 },
    // { name: "cherries", quantity: 5 },
    // ];

    //function isCherries(fruit) {
    //return fruit.name === "cherries";
    //}
    //---EXEMPLU TERMINAT--
    //aici am folosit functie traditionala
    return y.id === selectedItem.id; //its gonna search the object that you selected;
  });
  //y is gonna check all the objects one by one
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  //console.log(basket);
  update(selectedItem.id); //am apelat functia update
  localStorage.setItem("data", JSON.stringify(basket)); //i am setting data inside the local storage;ii dam numele de data(key);basket the object that is getting stored
};

//decrement function
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((y) => {
    // y-its gonna check all the object one by one
    // aici am folosit arrow function
    return y.id === selectedItem.id; //its gonna search the object that you selected; tha think exists or not
  });
  //y is gonna check all the objects one by one
  if (search.item === 0)
    return; // de fiecare data cand search e undifined, then do nothing; dupa ce am apelat calculation() pt a avea toate in cos dupa refresh
  else if (search.item === 0)
    return; // se opreste la 0, asta ca sa nu imi dea cu -1,-2,-3 etc.
  else {
    search.item -= 1;
  }
  update(selectedItem.id); //la fel si aici am apelat functia update;
  basket = basket.filter((x) => x.item !== 0); //vom selecta toate obiectele ce nu au 0 la item, in local storage, in application
  //console.log(basket);

  localStorage.setItem("data", JSON.stringify(basket));
};
//update function
let update = (id) => {
  // defiecare data cand apasam plus sau minus, adaugam la rezultatul din mijloc valoare
  let search = basket.find(function (x) {
    return x.id === id; // ultimul id e acealasi cu parametrull id; It compares the id of the current element x with the id passed to the update function.
  });
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item; //asa adaugam numerele in pagina web
  calculation(); // o apelam pt ca atunci cand functioa update se trigaruieste, sa trigaruieste si  let calculation
};
//FUNCTIA DE ADAUGARE A SUMEI IN COS
//let calculation = () => {
// let cardIcon = document.getElementById("cartAmount");
///VARIANTA CU NORMAL FUNCTION----
// let search = basket.map(function (x) {
//am folosit ma ca sa mi itereze si sa mi puna toata suma intr un array
//return x.item; //i am dat return x.item ca sa mi dea doar itemul adica numarul
// });
//let reduce = basket.reduce(function (x, y) {
// return x + y, 0; //0- is the default. number- adica calculul incepe de la 0
//});
// console.log(search, reduce);
//};
//x and y -one of them is the previous number and the other one is the next number
// ----STOP NORMAL FUNCTION---
//---ARROW FUNCTION---
let calculation = () => {
  let cardIcon = document.getElementById("cartAmount");
  let suma = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  cardIcon.innerHTML = suma;
};
calculation(); //pt ca suma sa apara in cos si dupa ce dam refresh la pagina
//-- if we use local storage we can save the data; daca dam refresh la pagina, suma din cos nu dispare
//when we want to trigger the local storage?
//-when we press plus minus etc
//folosim localStorage in codul de mai sus
// am folost JSON.stringfy
//we have to retrieve(a recupera) the data from the local storage into our application
// asa ca scriem in dreptul lui basket let basket = .JSON.parse(localStorage.getItem('data')) || [],
//inlocuim basket=[], cu ce am zis in randul de mai sus;scriem cu || [], in caz ca nu avem date, atunci va da eroare;asa ca sa impiedicam asta scriem || []
//By using stringfy and parse,when you want to save an object/array
//to local storage, you convert the object to string, save it,  then when you retrieve
// the string for usage, you parse it back to the object/array
