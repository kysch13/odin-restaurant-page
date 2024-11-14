import "./css/fonts.css";
import "./css/styles.css";
import { pageHome } from "./pages/page_home.js";
import { pagePizza } from "./pages/page_pizza.js";
import { pagePasta } from "./pages/page_pasta.js";
import { pageDrinks } from "./pages/page_drinks.js";

pageHome();

const navigation = document.querySelector('nav');
navigation.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        loadPage(e.target.innerText);
    }
})

const logo = document.getElementById('main-logo');
logo.addEventListener('click', (e) => {
    if (e.target.id === 'main-logo') {
        clearContent();
        pageHome();
    }
})

const clearContent = function() {
    const content = document.getElementById('content');
    content.innerText = '';
}


const loadPage =  function(page) {
    clearContent();
    switch (page) {
        case 'Pizza': 
            pagePizza();
            break;
        case 'Pasta':
            pagePasta();
            break;
        case 'Drinks':
            pageDrinks();
            break;
    }
}