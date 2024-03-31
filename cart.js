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
      <div class="image-checkout">
      <img width='70' src=${search.img} alt=""/>
      </div>
      <div class='details-checkout'>
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
