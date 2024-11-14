import pasta_spaghetti from "../img/pasta_spaghetti.jpg";
import pasta_penne from "../img/pasta_penne.jpg";
import pasta_alfredo from "../img/pasta_alfredo.jpg";
import pasta_pesto from "../img/pasta_pesto.jpg";
import pasta_lasagna from "../img/pasta_lasagna.jpg";
import pasta_ravioli from "../img/pasta_ravioli.jpg";


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

const pagePasta = function() {
    const content = document.getElementById('content');
    const innerContainer = elementMaker('div', 'inner-container');
    const h2 = elementMaker('h2');
    h2.innerText = 'Pastas';
    const menuCards = elementMaker('div', 'menu-cards');
    const menu = [
        {img: pasta_spaghetti, name:'Spaghetti', desc: 'Spaghetti and meatballs pasta dish', price: '$20.45'},
        {img: pasta_penne, name:'Penne', desc: 'Penne pasta in a marinara sauce', price: '$22.45'},
        {img: pasta_alfredo, name:'Fettuccine Alfredo', desc: 'Fettuccine alfredo pasta', price: '$18.45'},
        {img: pasta_pesto, name:'Pesto', desc: 'Basil pesto pasta', price: '$20.45'},
        {img: pasta_lasagna, name:'Lasagna', desc: 'Meat lasagna', price: '$24.95'},
        {img: pasta_ravioli, name:'Ravioli', desc: 'Ravioli pasta with marinara sauce', price: '$18.45'},
    ]
    const menuElements = [];
    menu.forEach(pasta => {
        menuElements.push(menuCard(pasta.img, pasta.name, pasta.desc, pasta.price));
    });
    content.appendChild(innerContainer);
    innerContainer.appendChild(h2);
    innerContainer.appendChild(menuCards);
    menuElements.forEach(card => {
        menuCards.appendChild(card);
    })
};

export {pagePasta};