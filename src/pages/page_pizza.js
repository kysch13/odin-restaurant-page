import pizza_deluxe from "../img/pizza_deluxe.jpeg";
import pizza_hawaiian from "../img/pizza_hawaiian.jpg";
import pizza_veggie from "../img/pizza_veggie.png";
import pizza_greek from "../img/pizza_greek.jpg";
import pizza_chicken from "../img/pizza_chicken.jpg";
import pizza_roastveggie from "../img/pizza_roastveggie.png";

const menuCard = function (img, name, desc, price) {
    const card = elementMaker('div', 'menu-card');
    const cardImg = elementMaker('div', 'menu-card-img');
    cardImg.style.backgroundImage = `url('${img}')`;
    const cardText = elementMaker('div', 'menu-card-text');
    const h3 = elementMaker('h3');
    h3.innerText = name;
    const p = elementMaker('p');
    p.innerText = desc;
    const priceBlock = elementMaker('div', 'menu-price');
    priceBlock.innerText = price;

    card.appendChild(cardImg);
    card.appendChild(cardText);
    cardText.appendChild(h3);
    cardText.appendChild(p);
    cardText.appendChild(priceBlock);

    return card;
}

const elementMaker = function(type, ...cssClasses) {
    const el = document.createElement(type);
    cssClasses.forEach((cssClass) => {
        el.classList.add(cssClass);
    });
    return el;
}

const pagePizza= function() {
    const content = document.getElementById('content');
    const innerContainer = elementMaker('div', 'inner-container');
    const h2 = elementMaker('h2');
    h2.innerText = 'Pizzas';
    document.title = 'Pizzahouse | Pizza';
    const menuCards = elementMaker('div', 'menu-cards');
    const menu = [
        {img: pizza_deluxe, name:'Deluxe', desc: 'Pepperoni, Bacon, Mushroom, Green Pepper, Extra Cheese', price: '$20.45'},
        {img: pizza_hawaiian, name:'Hawaiian', desc: 'Ham, Bacon, Pineapple, Extra Cheese', price: '$22.45'},
        {img: pizza_veggie, name:'Veggie', desc: 'Tomato, Olives, Mushroom, Green Pepper, Onion', price: '$18.45'},
        {img: pizza_greek, name:'Greek', desc: 'Tomato, Black Olives, Feta, Red Onion, Oregano', price: '$20.45'},
        {img: pizza_chicken, name:'Chicken', desc: 'Grilled Chicken, BBQ Sauce, Red Pepper, Red Onion', price: '$24.95'},
        {img: pizza_roastveggie, name:'Roast Veggie', desc: 'Assorted Roasted Veggies, Asiago Cheese', price: '$18.45'},
    ]
    const menuElements = [];
    menu.forEach(pizza => {
        menuElements.push(menuCard(pizza.img, pizza.name, pizza.desc, pizza.price));
    });
    content.appendChild(innerContainer);
    innerContainer.appendChild(h2);
    innerContainer.appendChild(menuCards);
    menuElements.forEach(card => {
        menuCards.appendChild(card);
    })
};

export {pagePizza};