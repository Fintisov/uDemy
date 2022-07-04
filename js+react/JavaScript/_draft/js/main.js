"use strict"
const btn = document.querySelector(".main__btn");

/*

// !* Задание на урок 23 *!

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }

    // Не трогаем
    return arrayOfNumbers;
}


// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result)
    // Не трогаем
    return result;
}

firstTask();

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data)
    // Не трогаем
    return data;
}

secondTask()

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let a = 0;
    for (let i = data.length - 1; i >= 0 ; i--) {
        result[a] = data[i];
        a++;
    }

    console.log(data);
    console.log(result);

    // Не трогаем
    return result;
}

thirdTask()

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j <= lines - i; j++) {
        result += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*";
    }

    result += "\n"
}

console.log(result);


// Место для первой задачи
function sayHello(name) {
    return `Привет,${name}!`;
}


// Место для второй задачи
function returnNeighboringNumbers(num) {
    return `${num - 1} ${num} ${num + 1}`;
}

// Место для третьей задачи
function getMathResult(num, count) {
    let result = "";
    const numStart = num;

    if (count > 0 && typeof count === "number") {
        for (let i = 1; i <= count; i++) {
            result += `${num * i}`;
            if (i < count) result += "---";
        }
    } else {
        result = num;
    }
    return (result);
}

console.log(getMathResult(10, 5));


// Место для первой задачи

function calculateVolumeAndArea(arg) {
    let v = arg * arg * arg;
    let s = 6 * arg * arg;
    let result = "При вычислении произошла ошибка";

    if (typeof (arg) === "number" && Number.isInteger(arg) && arg > 0) {
        result = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    }

    return result;
}


// Место для второй задачи
function getCoupeNumber(arg) {
    let result = 0;

    if (typeof (arg) === "number" && Number.isInteger(arg) && arg > 0 && arg < 36) {
        for (let i = 0; i < arg; i += 4) result++;
    } else if (arg === 0 || arg >= 36) {
        result = "Таких мест в вагоне не существует"
    } else {
        result = "Ошибка. Проверьте правильность введенного номера места";
    }

    return result;
}

getCoupeNumber(-10)

// Место для первой задачи
function getTimeFromMinutes(arg) {
    let hour = 0;
    let minuts = 0;

    if (arg < 0 || typeof(arg) !== "number" || !Number.isInteger(arg)) {
        return "Ошибка, проверьте данные";
    }

    for (let i = 0; i <= arg; i += 60) {
        if (i > 59) hour++;
        minuts = arg - i;
    }

    let hourLastNum = String(hour)[String(hour).length - 1];

    if (hourLastNum == 1) {
        return `Это ${hour} час и ${minuts} минут`;
    } else if (hourLastNum >= 2 && hourLastNum <= 4) {
        return `Это ${hour} часа и ${minuts} минут`;
    } else {
        return `Это ${hour} часов и ${minuts} минут`;
    }

}


// Место для второй задачи
function findMaxNumber(a, b, c, d) {


    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || typeof d !== "number") {
        return 0;
    }

    return Math.max(a, b, c, d);

}

console.log(findMaxNumber(15, 10, 250, 94));


function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

function first(arg, func) {
    console.log(arg);
    func();
}

first("арг-1", function () {
    console.log("арг-2")
})


const obj = {
    a1 : 1,
    a2 : 2,
    a3 : {
        b1 : 11,
        b2 : 22,
    },
    a4 : 4
}

for (let key in obj) {
    //проверка на вложенность
    if (typeof obj[key] === "object") {
        for (let i in obj[key]) {
            console.log( `свойство ${i} имеет значение ${obj[key][i]}`)
        }
    } else {
        console.log( `свойство ${key} имеет значение ${obj[key]}`)
    }
}

function first (arg, func) {
    console.log(arg);
    func();

}

first("арг-1", function () {

    console.log("арг-2")

})

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        const {age} = obj;
        const {languages} = obj.skills;

        return `Мне ${age} и я владею языками: ${languages.join(" ").toUpperCase()} `;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
//P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

//2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

function showProgrammingLangs(plan) {
    let result = "";
    let {programmingLangs} = plan.skills;

    if (Object.keys(programmingLangs)) {
        for (let key in programmingLangs) {
            result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        }
    }

    console.log(result)
    return result;
}

showProgrammingLangs(personalPlanPeter);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
function showFamily(arr) {
    if (arr.length) {
        return `Семья состоит из: ${arr.join(" ")} `;
    }

    return `Семья пуста`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(elem => {
        console.log(elem.toLowerCase())
    })
}


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!";
    }

    return str.split("").reverse().join("");
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = "";
    result = (!arr.length) ? "Нет доступных валют" : `Доступные валюты:\n`;

    arr.forEach(elem => {
        if (elem != missingCurr) {
            result += `${elem}\n`;
        }
    })

    return result
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], ""));


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();

    let a = [];
    let b = [];
    let c = [];
    let rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i])
        } else if (i >= 3 && i < 6) {
            b.push(arr[i])
        } else if (i >= 6 && i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i])
        }
    }
    if (rest.length > 0) {
        rest = rest.join(", ");
    } else {
        rest = "-"
    }

    return [a, b, c, `Оставшиеся студенты: ${rest}`]
}

console.log(sortStudentsByGroups(students));


function createCounter() {
    let count = 0

    const myFunc = function () {
        count = count + 1 ;
        return count;
    }

    return myFunc;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

// console.log(isOpen(restorantData.openNow));


function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + parseInt(sDish.price, 10) < parseInt(average, 10)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

//---------

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    return copy;
}

console.log(transferWaitors(restorantData));


// перевернуть массив
const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < foo.length; i++) {

}

console.log(foo);


//===== рекурсия ====

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        x *= pow(x, n - 1);
        return x;
    }
}

console.log(pow(2, 3));

//--------------- Перебор массива или объекта с помощью рекурсии ------------------

let student = {
    js: [{
        name: "John",
        progress: 10
    }, {
        name: "Ivan",
        progress: 40
    }],
    html: {
        basic: [{
            name: "Peter",
            progress: 25
        }, {
            name: "Ann",
            progress: 15
        }, {
            name: "Alex",
            progress: 10
        }
        ],
        pro: [{
            name: "Sam",
            progress: 50
        }],
    }
}

function getMiddleResult(data) {
    if (Array.isArray(data)) {
        let total = 0;

        data.forEach(elem => {
            total += elem.progress;
        })

        return [total, data.length];
    } else {
        let result = [0, 0];

        for (let item of Object.values(data)) {
            let subResult = getMiddleResult(item);
            result[0] += subResult[0];
            result[1] += subResult[1];
        }

        return result
    }
}

console.log(getMiddleResult(student));

//---------

function factorial(n) {
    if (typeof n !== "number" || !Number.isInteger(n)) {
        return "Введено не корректное значение."
    } else if (n <= 0) {
        return 1
    }

    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(5)

//---------

function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;
        console.log(result);

        if (result.length === summary) {
            n = i;
            break;
        }
    }

    return n;
}
amountOfPages(25)

*/

/*
function isPangram(string) {
    let str = string.toLowerCase().split(" ").join("").split("");
    return new Set(str).size === 26;
}

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    string = string.toLowerCase();

    return alphabet.every(elem => {
        return string.indexOf(elem) !== -1
    })
}

isPangram("The quick brown fox jumps over the lazy dog");

function deepCount(a) {
    let count = 0;

    a.forEach(elem => {
        count++;
        if (Array.isArray(elem)) {
            count += deepCount(elem);
        }
    })

    return count;
}

console.log(deepCount(
    [1, 2,
        [6, 7,
            [9, 10, 11]
        ],
        4, 5,
    ]
));

document.querySelector(".main").addEventListener("click", e => {
    console.log(e)
})

 */

//__ рекурсивный setTimeout / setInterval __

/*
btn.addEventListener("click", () => {
    let i = 0;
    let id = setTimeout(function log() {
        i++
        if (i == 5) {
            clearInterval(id);
        } else {
            console.log(i)
            id = setTimeout(log, 500);
        }
    }, 500);
})
*/

//__ Анимация квадратика __
// lesson-64

/*
btn.addEventListener("click", () => {
    const cube = document.querySelector(".cube");
    let pos = 0,
        check = true;

    setTimeout(myAnimationBottom, 10);

    function myAnimationBottom() {
        if (check && pos < 300) {
            pos++
            cube.style.top = `${pos}px`;
            cube.style.left = `${pos}px`;
        } else if (pos == 300) {
            check = false;
            pos--;
            cube.style.top = `${pos}px`;
            cube.style.left = `${pos}px`;
        } else if (pos == 0) {
            check = true;
            pos++;
            cube.style.top = `${pos}px`;
            cube.style.left = `${pos}px`;
        } else {
            pos--;
            cube.style.top = `${pos}px`;
            cube.style.left = `${pos}px`;
        }
        setTimeout(myAnimationBottom, 5);
    }
})*/

/*
let map = new WeakMap();


function cache(person) {
    if (!map.has(person)) {
        map.set(person, new Date().getFullYear());
    }
    console.log(map.get(person))
    return map.get(person);
}

let a1 = {name: "Anna"};
let a2 = {name: "Max"};

cache(a1);
cache(a2);

console.log(map)


const box = document.querySelector(".box1");

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords)
})

observer.observe(box, {
    childList: true,
});

 */

/*
function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}

const ivan = new User("ivan", 25);
console.log(ivan);
*/

class Rectangle { // создаем класс
    constructor(width, height) { // задаем базовые параметры
        this.width = width;
        this.height = height;
    }

    calcArea() { // задаем метод
        return this.width * this.height;
    }
}

const square = new Rectangle(100, 20); // создаем объект на основе класса
console.log(square); // будет объект square
console.log(square.calcArea()); // 2000

class ColoredRectangleWithText extends Rectangle { // Расширяем класс на основе Rectangle
    constructor(width, height, text, color) { // Свойства передаваемые в расширяемый класс
        super(width, height); //Свойства которые вы наследуем из основного класса
        this.text = text;
        this.color = color;
    }

    showMyProps() {
         console.log(`текст: ${this.text}, цвет: ${this.color}`);
    }
}

const divs = new ColoredRectangleWithText(20, 6, "Hello", "#121212");

console.log(divs); // будет объект ColoredRectangleWithText
console.log(divs.calcArea()); //120 (наследуем метод из родителя)
divs.showMyProps(); // текст: Hello, цвет: #121212 (используем свой метод)