const menu = ['Home', 'About', 'Basket'];

const nav = document.querySelector('nav');

menu.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.innerText = link;
    linkElement.setAttribute('href', '#');
    linkElement.classList.add('link');
    nav.appendChild(linkElement);
});

const prices = document.querySelector('.prices');
let text = document.createElement('h2');
text.innerText = 'Корзина';
text.classList.add('heading');
prices.appendChild(text);

const catalog = document.querySelector('.prices_block');
for (let i = 0; i < 3; i++) {
    let block = document.createElement('div');
    block.classList.toggle('crust');
    catalog.appendChild(block);
};


let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }, { name: 'Расстворитель', price: 150 }];
const item = document.querySelector('.prices_block').firstChild;
Basket.forEach(link => {
    const linkElement = document.createElement('p');
    linkElement.innerText = link.name;
    item.appendChild(linkElement);
});

const item_2 = document.querySelector('.prices_block').childNodes[1];
Basket.forEach(link => {
    const linkElement = document.createElement('p');
    linkElement.innerText = `${link.price} руб`;
    linkElement.innerText = `цена ${link.price} руб`;
    item_2.appendChild(linkElement);
});

const item_3 = document.querySelector('.prices_block').lastChild;
let total = Basket.reduce(function (acc, curvalue) {
    return acc + curvalue.price;
}, 0);
const linkElement = document.createElement('p');
linkElement.innerText = `Общая сумма заказа:  ${total} руб`;
item_3.appendChild(linkElement);


function paragraph1() {
    const board = document.querySelector('.board');
    let color = true;
    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++) {

            if (j == 0)
                color = !color;

            let block = document.createElement('div');

            if (color)
                block.classList.add('block', 'black');
            else
                block.classList.add('block', 'white');

            board.appendChild(block);
            color = !color;
        }

    }

}
paragraph1();

// function paragraph2() {

//     let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }, { name: 'Расстворитель', price: 150 }];

//     let total = Basket.reduce(function (acc, curvalue) {
//         return acc + curvalue.price;
//     }, 0);

//     console.log('Товары в корзине:');
//     Basket.forEach(item => {
//         console.log(`Товар ${item.name} с ценой ${item.price}`)
//     });

//     console.log(`Количество товаров: ${Basket.length}`)
//     console.log(`Общая сумма заказа:  ${total}`)
// }
// paragraph2();