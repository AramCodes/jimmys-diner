const menu = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella","flour"],
        id: "main-0",
        price: 14,
        location: "images/pizza.png"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce","buns"],
        price: 12,
        location: "images/hamburger.png",
        id: "main-1"
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        location: "images/beer.png",
        id: "main-2"
    }
]

//renders boilerplate and fills in the information from the array
function renderMenu() {

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
            <p class="food-price">$${menu[i].price}</p>
        </div>
        <div class="add-btn-container">
            <button class="add-to-cart-btn" id="${menu[i].id}"><i class="fa-duotone fa-plus"></i></button>
         </div>
    </div>
    `
}

menuArea.innerHTML = html;
}

renderMenu();

//gets add buttons to work and renders order to oder-section
const addPizza = document.getElementById('main-0')
const addHamburger = document.getElementById('main-1')
const addBeer = document.getElementById('main-2')
const orderSection = document.getElementById('order-section')

let order = []

addPizza.addEventListener('click', ()=>{
    order.push("Pizza $14")
})




const orderHtml = order.map(function(item){
   orderSection.innerHTML += `<li>${item}</li>`
})


//gets complete order button to pop up credit-card-modal
