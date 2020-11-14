function paragraph1() {
    let number = 0;
    let arr = [];
    while (number <= 100) {
        if (number > 1) {           // число x является простым, если оно больше 1 и при этом делится без остатка только на 1 и на x         
            let result = 2;
            let i = 2;
            while (number % i !== 0) {
                i++;
                result++;
            }
            if (result == number) {
                arr.push(result);
            }
        }
        number++;
    }
    console.log(arr);
}
paragraph1();


function paragraph2() {

    let basketPrice = 0;
    let Basket = [{ name: 'Краска "Белая"', price: 81 }, { name: 'Кисть', price: 135 }];
    Basket.push({ name: 'Расстворитель', price: 150 });
    function countBasketPrice() {
        for (i = 0; i < Basket.length; i++) {
            basketPrice = basketPrice + Basket[i].price;
        }
        return basketPrice;
    }
    console.log('В корзине:');
    for (i = 0; i < Basket.length; i++) {
        console.log(Basket[i].name + ' — ' + Basket[i].price + ' руб');
    }
    console.log('Стоимость заказа: ' + countBasketPrice(Basket) + ' руб');
}
paragraph2();


function paragraph3() {
    for (let i = 0; i < 10; console.log(i++)) { }
}
paragraph3();


function paragraph4() {
    let row = 'x';
    for (let i = 0; i < 20; i++) {
        console.log(row);
        row += 'x';
    }
}
paragraph4();