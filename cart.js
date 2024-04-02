let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

/* pt ca obiectele pe care le am pus in cos din shop.js, sa se vada in card.html si js
facem urmatoarele lucruri:
tragem toate dataele pe care le avem n applications in cart.js 
- copiez le basket din shop.js in cart.js */
let basket = JSON.parse(localStorage.getItem("data")) || [];
//console.log(basket);
// copiem let calculation din shop.js

//mutam let shopItemData intr un folder separat in data.js
//pt ca produsele sa apara in partea de cart,creeam o functie
let generateCartItems = () => {
  //facem in caz ca cardul genereaza produse si in caz ca nu avem nimic in cos
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        //the x will target all the data from the local storage one by one am then is gonna run the function
        let { id, item } = x; //id vine de la basket //y vine de la data.js
        let search = shopItemsData.find((y) => y.id === id) || []; //primul id vine de la data js si al 2 lea de la let { id, item } = x; trebuie sa vedem id din basket is matching with the id din data.js
        return `
         
      <div class= "cart-item">
      <div class="button-cart">
      <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
      <div id=${id} class="quantity">${item}</div>  
      <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
   </div>
      <div class="image-checkout">
      <img width='80'src=${search.img} alt=""/>
      </div>
      <div class='details-checkout'>
      <h5 class="h5-price"> ${search.price} €</h5>
      <p class="p-name">${search.name}, ${search.desc}</p>
      
      </div>
     <i  onclick="removeItem(${id})" class="fa-solid fa-xmark"></i>
     <div class='subtotal'> <h4> € ${item * search.price} </h4>
                             
      </div>
      </div>
      
`;
      })
      .join("")); //ca sa nu mai apara virgula intre obiecte
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = ` <h4 class="h4-emptycart">Your cart is empty</h4>
    <h5 class="h5-emptycart">Looks like you haven't made your choice yet...</h5>
    <a href="shop.html">
    <button class="homeBtn"> Return to shop </button>
    </a>

    `;
  }
};
generateCartItems();
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
  generateCartItems(); //pt a adauga si uodata la plus
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
  generateCartItems(); //ca sa dispara artocolul pe care nu il dorim din lista (adca sa dispara casuta de la check out)

  localStorage.setItem("data", JSON.stringify(basket));
};
//update function
let update = (id) => {
  // defiecare data cand apasam plus sau minus, adaugam la rezultatul din mijloc valoare
  let search = basket.find(function (x) {
    return x.id === id; // ultimul id e acealasi cu parametrull id; It compares the id of the current element x with the id passed to the update function.
  });
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item; //asa adaugam numerele in pagina web // o apelam pt ca atunci cand functioa update se trigaruieste, sa trigaruieste si  let calculation
  totalAmount();
};
let removeItem = (id) => {
  // scriem asta pt ca atunci cand apasam pe x sa se stearga casuta plus ca am mai adaugat la <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
  let selectedItem = id;
  //console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};
let totalAmount = () => {
  //functie pt totalul de suma
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x; // we are gonna use id and search in our data .js
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = ` <h3 class= "h3-reduce">Total to pay: € ${amount}</h3>
      `;
    // console.log(amount);
  } else return {}; //else return- inseamnca do not do anything just stop the process
};
totalAmount();
