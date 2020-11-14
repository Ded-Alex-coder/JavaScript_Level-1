class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const hts = new Product('hts"', 100);
const iphone = new Product('iphone', 1000);
const samsung = new Product('samsung', 500);
const BasketTT = [hts, iphone, samsung]
console.log(hts);
console.log(iphone);
console.log(samsung);
console.log(BasketTT)
// BasketTT.prototype.forEach.call(o => {
//     console.log(name)
// })

class Cart {
    constructor() {
        const basketBlock = document.querySelector('.content');
        let Block = document.createElement('div');
        Block.classList.add('prices');
        basketBlock.appendChild(Block);

        const pricesText = document.querySelector('.prices');
        let text = document.createElement('h2');
        text.innerText = 'Корзина';
        text.classList.add('heading');
        pricesText.appendChild(text);
    }

    onClick() {
        const catalogBlock = document.querySelector('.prices');
        catalogBlock.classList.toggle('prices-click');

        const catalog = document.querySelector('.content');
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
const MyBasketLink = document.querySelector('#navWrap');
MyBasket.render(MyBasketLink);

class List {


    onClick() {
        const catalog = document.querySelector('.catalog');
        catalog.classList.toggle('catalog-click');
    }

    render(blockToRender) {
        const link = document.createElement('a')
        link.innerText = 'Каталог';
        link.setAttribute('href', '#');
        link.classList.add('link');
        blockToRender.insertBefore(link, blockToRender.children[0]);
        link.addEventListener('click', () => {
            this.onClick()
        })
    }
}

const MyCatalog = new List();
const MyCatalogLink = document.querySelector('#navWrap');
MyCatalog.render(MyCatalogLink);



// console.log(MyBasket);
// console.log(Paint);
// console.log(Brush);
// console.log(Solvent);

// const prices = document.querySelector('.prices');
// let text = document.createElement('h2');
// text.innerText = 'Корзина';
// text.classList.add('.heading');
// prices.appendChild(text);

// const catalogBlock = document.querySelector('#basket');
// catalogBlock.classList.add('.prices_block');

// const catalog = document.querySelector('#basket');
// for (let i = 0; i < 3; i++) {
//     let block = document.createElement('div');
//     block.classList.toggle('.crust');
//     catalog.appendChild(block);
// };
// let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }, { name: 'Растворитель', price: 150 }];
// const item = document.querySelector('.crust');
// Basket.forEach(link => {
//     const linkElement = document.createElement('p');
//     linkElement.innerText = link.name;
//     item.appendChild(linkElement);
// });

// const item_2 = document.querySelector('#basket').children[1];
// Basket.forEach(link => {
//     const linkElement = document.createElement('p');
//     linkElement.innerText = `${link.price} руб`;
//     linkElement.innerText = `цена ${link.price} руб`;
//     item_2.appendChild(linkElement);
// });

// const item_3 = document.querySelector('#basket').lastChild;
// let total = Basket.reduce(function (acc, curvalue) {
//     return acc + curvalue.price;
// }, 0);
// const linkElement = document.createElement('p');
// linkElement.innerText = `Общая сумма заказа: ${total} руб`;
// item_3.appendChild(linkElement);


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
