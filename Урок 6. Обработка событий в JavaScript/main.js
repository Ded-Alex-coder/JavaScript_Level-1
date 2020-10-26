class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const Paint = new Product('Краска "Белая"', 81);
const Brush = new Product('Кисть', 135);
const Solvent = new Product('Расстворитель', 150);
const BasketTT = [Paint, Brush, Solvent]
console.log(Paint);
console.log(Brush);
console.log(Solvent);
console.log(BasketTT)
// BasketTT.prototype.forEach.call(o => {
//     console.log(name)
// })

class Cart {

    onClick() {
        const prices = document.querySelector('.prices');
        let text = document.createElement('h2');
        text.innerText = 'Корзина';
        text.classList.add('heading');
        prices.appendChild(text);

        const catalogBlock = document.querySelector('#basket');
        catalogBlock.classList.add('prices_block');

        const catalog = document.querySelector('#basket');
        for (let i = 0; i < 3; i++) {
            let block = document.createElement('div');
            block.classList.toggle('crust');
            catalog.appendChild(block);
        };
        console.log('Ура')
    }

    render(blockToRender) {
        const link = document.createElement('a')
        link.innerText = 'Корзина';
        link.setAttribute('href', '#');
        link.classList.add('link');
        blockToRender.appendChild(link);
        link.addEventListener('click', () => {
            this.onClick()
        })
    }
}

const MyBasket = new Cart();
const MyBasketLink = document.querySelector('nav');
MyBasket.render(MyBasketLink);


class Home extends Cart {
    constructor() {
        super()
    }

    onClick() {
        const catalog = document.querySelector('body');
        let text = document.createElement('p');
        text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim nihil laboriosam est error deleniti sunt cum, perferendis magnam dignissimos alias ad illo officia rem suscipit accusantium totam adipisci soluta.'
        text.classList.add('heading');
        catalog.insertBefore(text, catalog.children[1]);
    }

    render(blockToRender) {
        const link = document.createElement('a')
        link.innerText = 'Главная';
        link.setAttribute('href', '#');
        link.classList.add('link');
        blockToRender.insertBefore(link, blockToRender.children[0]);
        link.addEventListener('click', () => {
            this.onClick()
        })
    }
}

const MyHome = new Home();
const MyHomeLink = document.querySelector('nav');
MyHome.render(MyHomeLink);


class List extends Cart {
    constructor() {
        super()
    }

    onClick() {
        const catalog = document.querySelector('body');
        let div = document.createElement('div');
        div.classList.toggle('.catalog_block');
        catalog.insertBefore(div, catalog.children[2]);

        const Text = document.querySelector('.catalog_block');
        let text = document.createElement('h2');
        text.innerText = 'Каталог товаров'
        text.classList.add('heading');
        Text.appendChild(text);
    }

    render(blockToRender) {
        const link = document.createElement('a')
        link.innerText = 'Каталог';
        link.setAttribute('href', '#');
        link.classList.add('link');
        blockToRender.insertBefore(link, blockToRender.children[1]);
        link.addEventListener('click', () => {
            this.onClick()
        })
    }
}

const MyCatalog = new List();
const MyCatalogLink = document.querySelector('nav');
MyCatalog.render(MyCatalogLink);

// console.log(MyBasket);
// console.log(Paint);
// console.log(Brush);
// console.log(Solvent);

const prices = document.querySelector('.prices');
let text = document.createElement('h2');
text.innerText = 'Корзина';
text.classList.add('heading');
prices.appendChild(text);

const catalogBlock = document.querySelector('#basket');
catalogBlock.classList.add('prices_block');

const catalog = document.querySelector('#basket');
for (let i = 0; i < 3; i++) {
    let block = document.createElement('div');
    block.classList.toggle('crust');
    catalog.appendChild(block);
};
let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }, { name: 'Расстворитель', price: 150 }];
const item = document.querySelector('.crust');
Basket.forEach(link => {
    const linkElement = document.createElement('p');
    linkElement.innerText = link.name;
    item.appendChild(linkElement);
});

const item_2 = document.querySelector('#basket').children[1];
Basket.forEach(link => {
    const linkElement = document.createElement('p');
    linkElement.innerText = `${link.price} руб`;
    linkElement.innerText = `цена ${link.price} руб`;
    item_2.appendChild(linkElement);
});

const item_3 = document.querySelector('#basket').lastChild;
let total = Basket.reduce(function (acc, curvalue) {
    return acc + curvalue.price;
}, 0);
const linkElement = document.createElement('p');
linkElement.innerText = `Общая сумма заказа: ${total} руб`;
item_3.appendChild(linkElement);


// function paragraph2() {

//     let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }, { name: 'Расстворитель', price: 150 }];

//     let total = Basket.reduce(function (acc, curvalue) {
//         return acc + curvalue.price;
//     }, 0);

//     console.log('Товары в корзине:');
//     Basket.forEach(item => {
//         console.log(`Товар ${ item.name } с ценой ${ item.price } `)
//     });

//     console.log(`Количество товаров: ${ Basket.length } `)
//     console.log(`Общая сумма заказа: ${ total } `)
// }
// paragraph2();
