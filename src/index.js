import "./css/fonts.css";
import "./css/styles.css";
import { pageHome } from "./pages/page_home.js";
import { pagePizza } from "./pages/page_pizza.js";

pageHome();

const navigation = document.querySelector('nav');
navigation.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        loadPage(e.target.innerText);
    }
})

const loadPage =  function(page) {
    const content = document.getElementById('content');
    content.innerText = '';
    switch (page) {
        case 'Pizza': 
            pagePizza();
            break;
        case 'Pasta':
            pageHome();
            break;
    }
}