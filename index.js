const menu = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", " mushrom", " mozarella"," flour"],
        id: "main-0",
        price: 14,
        location: "images/pizza.png"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", " cheese", " lettuce"," buns", " tomato", " onion"],
        price: 12,
        location: "images/hamburger.png",
        id: "main-1"
    },
        {
        name: "Beer",
        ingredients: ["grain", " yeast", " water", " malted barley", " hops"],
        price: 8,
        location: "images/beer.png",
        id: "main-2"
    },
]

//renders boilerplate and fills in the information from the objects nested in the menu array
function renderMenu() {
    const menuArea = document.getElementById('menu')
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
            <button class="add-btn" id="${menu[i].id}" data-add="${menu[i].id}"> + </button>
         </div>
    </div>
    `
}
menuArea.innerHTML = html;
}

renderMenu();

//gets add buttons to push to cart array
const cart = []

document.addEventListener('click', function(e) {
    if (e.target.dataset.add) {
        addToCart(e.target.dataset.add)
    }

})

function addToCart(id){
    
    const targetFoodObj = menu.filter(food => {
        return food.id === id
    })[0]

    cart.push(targetFoodObj)
    renderOrder()
}
//get other buttons to work
const overlay = document.getElementById("overlay")
const openBtn = document.getElementById("open")
const closeBtn = document.getElementById("close")
const popUp = document.getElementById('popup')

openBtn.addEventListener('click', openPopUp)
closeBtn.addEventListener('click', closePopUp)

function openPopUp() {
    popUp.classList.add("open-popup");
    overlay.classList.add('active')
}

function closePopUp() {
    popUp.classList.remove("open-popup");
    overlay.classList.remove('active')
}

//console.log(cart)

//makes order button and details appear when cart has one or more items 
const orderContainer = document.getElementById('order-section')

if (cart.length > 0) {
    orderContainer.style.display = 'block'
    
}

//renders order to oder-section
function renderOrder() { 
    cart.forEach(object => {
     
     
     let htmlStr = ""
     
     htmlStr +=`
     
     <span id="item">${oject.name}</span>
     <span id="price">$${object.price}</span>
     
     `
     
     orderContainer.innerHTML = htmlStr;
     
    })
     
}







/*total.reduce(price => {

})*/




//console.log(total)


//gets complete order button to pop up credit-card-modal


