import drinks_redwine from "../img/drinks_redwine.jpg";
import drinks_whitewine from "../img/drinks_whitewine.jpg";
import drinks_cocktails from "../img/drinks_cocktails.jpg";


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

const pageDrinks = function() {
    const content = document.getElementById('content');
    const innerContainer = elementMaker('div', 'inner-container');
    const h2 = elementMaker('h2');
    h2.innerText = 'Drinks';
    const menuCards = elementMaker('div', 'menu-cards');
    const menu = [
        {img: drinks_redwine, name:'Red Wine', desc: 'Choose from a selection of fine red wines', price: 'from $11.49'},
        {img: drinks_whitewine, name:'White Wine', desc: 'Choose from a selection of fine white wines', price: 'from $11.49'},
        {img: drinks_cocktails, name:'Cocktails', desc: 'Enjoy your favourite cocktails from our well stocked bar', price: 'from $6.49'},
    ]
    const menuElements = [];
    menu.forEach(drink => {
        menuElements.push(menuCard(drink.img, drink.name, drink.desc, drink.price));
    });
    content.appendChild(innerContainer);
    innerContainer.appendChild(h2);
    innerContainer.appendChild(menuCards);
    menuElements.forEach(card => {
        menuCards.appendChild(card);
    })
};

export {pageDrinks};