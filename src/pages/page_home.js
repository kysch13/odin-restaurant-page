console.log('Hello Pizza!');

const homeFeature = function(section, title, text) {
    const feature = elementMaker('div', 'home-feature');
    const featureImg = elementMaker('div', 'feature-img', section);
    const featureText = elementMaker('div', 'feature-text');
    const h3 = elementMaker('h3');
    h3.innerText = title;
    const p = elementMaker('p');
    p.innerText = text;

    feature.appendChild(featureImg);
    feature.appendChild(featureText);
    featureText.appendChild(h3);
    featureText.appendChild(p);

    return feature;
}

const elementMaker = function(type, ...cssClasses) {
    const el = document.createElement(type);
    cssClasses.forEach((cssClass) => {
        el.classList.add(cssClass);
    });
    return el;
}

const pageHome = function() {
    const content = document.getElementById('content');
    const innerContainer = elementMaker('div', 'inner-container');
    const h2 = elementMaker('h2');
    h2.innerText = 'Features';
    const homeFeatures = elementMaker('div', 'home-features');
    const homeFeaturePizza = homeFeature('pizza', 'Pizza', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum luctus quam, ut dignissim metus molestie a. Nam eleifend id felis in mattis. Morbi tincidunt lectus diam, non malesuada velit porta eu. Mauris risus ex, imperdiet ac iaculis at, posuere ac diam. Nulla at nisi sed nisl hendrerit semper. Morbi accumsan dapibus felis, consequat vestibulum tellus pretium et. Nam dictum justo a risus placerat, eu dapibus diam tempor. In ac luctus lectus, nec posuere tellus. Sed lacinia aliquet eros nec porttitor. Integer sagittis quam nec erat aliquet congue. ');
    const homeFeaturePasta = homeFeature('pasta', 'Pasta', ' Curabitur tempor ut lacus ac tempor. Aliquam viverra ante ac tortor accumsan, et sagittis felis imperdiet. Proin feugiat felis tortor, ut luctus nibh blandit et. Duis nisi diam, dictum id convallis quis, laoreet ac leo. Aenean risus justo, maximus sed tristique vel, varius nec urna. Duis id congue nulla. Etiam interdum magna massa, nec mollis sapien euismod vel. Maecenas aliquam tincidunt consequat. Maecenas eu arcu venenatis, lacinia arcu quis, consectetur arcu. ');
    const homeFeatureDrinks = homeFeature('drinks', 'Drinks', ' Praesent rhoncus egestas hendrerit. Maecenas quis erat lectus. Duis vel fermentum nisi, vitae ornare dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet tortor consequat, luctus leo eget, tristique felis. Aenean rhoncus cursus condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet augue eget congue venenatis. Sed non ultrices elit. Etiam ultricies, dui ac tempor hendrerit, lorem neque aliquam ipsum, eu dictum ex ligula at sapien. ');
    
    content.appendChild(innerContainer);
    innerContainer.appendChild(h2);
    innerContainer.appendChild(homeFeatures);
    homeFeatures.appendChild(homeFeaturePizza);
    homeFeatures.appendChild(homeFeaturePasta);
    homeFeatures.appendChild(homeFeatureDrinks);
};

export {pageHome};