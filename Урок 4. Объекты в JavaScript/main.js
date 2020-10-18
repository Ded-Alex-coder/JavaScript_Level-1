function paragraph1() {

    const numberObj = {
        hundreds: 0,
        tens: 0,
        units: 0,
    };
    let number = +prompt('Введите число от 0 до 999');
    numberObj.number = number;

    if (number <= 9) {
        numberObj.units = number;
    } else
        if (number <= 999) {
            for (let value in numberObj) {
                numberObj.hundreds = Math.floor(number / 100 % 10);
                numberObj.tens = Math.floor(number / 10 % 10);
                numberObj.units = Math.floor(number % 10);
            }
        } else {
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
    console.log(numberObj);
}
paragraph1();


function paragraph2() {

    let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }, { name: 'Расстворитель', price: 150 }];
    let BasketName = [];
    let count = 0;

    let total = Basket.reduce(function (acc, curvalue) {
        return acc + curvalue.price;
    }, 0);

    console.log('Товары в корзине:');
    for (let value of Basket) {
        BasketName.push(value.name)
    };
    BasketName.forEach((elem) => {
        console.log(elem);
        count++;
    })
    console.log(`Колличество товаров в корзине: ${count}`);
    console.log(`Общая сумма заказа:  ${total}`)
}
paragraph2();