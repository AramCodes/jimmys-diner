const menu = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella","flour"],
        id: 0,
        price: 14,
        location: "images/pizza.png"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce","buns"],
        price: 12,
        location: "images/hamburger.png",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        location: "images/beer.png",
        id: 2
    }
]

//renders boilerplate and fills in the information from the array
const menuArea = document.getElementById('menu');
let html = ""
for (let i = 0 ; i < menu.length; i++) {
    html += `
    <div class="item-details">
        <div class="order-pic">
            <img src=${menu[i].location}>
        </div>
        <div class="order-details">
            <h6 class="food-title">${menu[i].name}</h6>
            <p class="food-ingredient">${menu[i].ingredients}</p>
            <p class="food-price">${menu[i].price}</p>
        </div>
        <div class="add-btn-container">
            <button class="add-to-cart-btn" id="addToCartBtn"><i class="fa-duotone fa-plus"></i></button>
         </div>
    </div>
    `
}

menuArea.innerHTML = html;

//gets add buttons to work and renders order to oder-section

const addBtns = document.getElementsByClassName('add-to-cart-btn');
const OrderSection = document.getElementById('order-section')

addBtns.addEventListeners('click', ()=>{

})

