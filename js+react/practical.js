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
*/
