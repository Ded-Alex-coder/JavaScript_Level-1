
// var a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // 2     Применен унарный оператор инкрементрирования в префиксной форме (теперь а = 2)
// d = b++; console.log(d);           // 1     Применен унарный оператор инкрементрирования в постфиксной форме (Сперва присвоила значению d = 1, а после увеличило свое значение на 1)
// c = (2+ ++a); console.log(c);      // 5     т к а уже равняется 2 и применен в префиксной форме, то выражение выглядит как 2 + 3
// d = (2+ b++); console.log(d);      // 4     b = 2, но т к в постфиксной форме, то сперва идет 2 + 2 , а после b увеличивается на 1
// console.log(a);                    // 3     После применения унарных операторов и присваивание значений через "var", пременные меняли свое значение на 1.
// console.log(b);                    // 3   


// var a = 2;
// var x = 1 + (a *= 2);
//             //  "*=" означает возвести в степень, равную ... дальнейшему числу. Получаем 2 во второй степени = 4. Прибавляем 1 и ответ 5
// console.log(x);

a = +prompt ('Введите число а');
b = +prompt ('Введите число b');
if (a >= 0 && b >= 0) {
    alert(`Разность чисел ${a - b}`);
    console.log(`Разность чисел ${a - b}`);
} else if (a < 0 && b < 0){
    alert(`Произведение чисел ${a * b}`);
    console.log(`Произведение чисел ${a * b}`);
} else{
    alert(`Сумма чисел ${a + b}`);
    console.log(`Сумма чисел ${a + b}`);
}    


var a = +prompt ('Введите число а');
    switch (a) {
        case 0:
            console.log("0");
        case 1:
            console.log("1");
        case 2:
            console.log("2");
        case 3:
            console.log("3");
        case 4:
            console.log("4");
        case 5:
            console.log("5");
        case 6:
            console.log("6");
        case 7:
            console.log("7");
        case 8:
            console.log("8");
        case 9:
            console.log("9");
        case 10:
            console.log("10");
        case 11:
            console.log("11");
        case 12:
            console.log("12");
        case 13:
            console.log("13");
        case 14:
            console.log("14");
        case 15:
            console.log("15");
                    
}      


var a = +prompt ('Введите число а');
var b = +prompt ('Введите число b');
                
function operation1(a, b) {
    return a + b;
}
let result1 = operation1(a, b);
console.log(`Сложение = ${result1}`);
                
function operation2(a, b) {
    return a - b;
}
let result2 = operation2(a, b);
console.log(`Вычитание = ${result2}`);
                
function operation3(a, b) {
    return a / b;
}
let result3 = operation3(a, b);
console.log(`Деление = ${result3}`);
                
function operation4(a, b) {
    return a * b;
} 
let result4 = operation4(a, b);
console.log(`Умножение = ${result4}`);
  


let arg1 = +prompt ('Введите число 1');
let arg2 = +prompt ('Введите число 2');
let operation = prompt('Введите нужную операцию ("сложение", "вычитание", "деление", "умножение")')

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':            
        function operation1(arg1, arg2) {
                return arg1 + arg2;
            }
            let result1 = operation1(arg1, arg2);
            alert(`Сложение = ${result1}`);
            console.log(`Сложение = ${result1}`);      
            break;                 
        case 'вычитание':
            function operation2(arg1, arg2) {
                return arg1 - arg2;
            }
            let result2 = operation2(arg1, arg2);
            alert(`Вычитание = ${result2}`);
            console.log(`Вычитание = ${result2}`);            
            break;
        case 'деление':
            function operation3(arg1, arg2) {
                return arg1 / arg2;
            }
            let result3 = operation3(arg1, arg2);
            alert(`Деление = ${result3}`);
            console.log(`Деление = ${result3}`);            
            break;
        case 'умножение':
            function operation4(arg1, arg2) {
                return arg1 * arg2;
            }
            let result4 = operation4(arg1, arg2);
            alert(`Умножение = ${result4}`);
            console.log(`Умножение = ${result4}`);           
            break;
    }    
}
mathOperation(arg1, arg2, operation);  
 

let val = +prompt ('Введите число');
let pow = +prompt ('Введите степень');

function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1));
}
alert(power(val, pow));
console.log(power(val, pow));