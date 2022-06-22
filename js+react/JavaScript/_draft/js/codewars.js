/*
function solution(number) {
    let result = 0;

    for (let i = 1; i < number; i++) {
        if ( (i % 3 == 0) || (i % 5 == 0) ) {
            result += i;
        }
    }

    return result;
}


function createPhoneNumber(numbers) {
    numbers.splice(0, 0, "(");
    numbers.splice(4, 0, ") ");
    numbers.splice(8, 0, "-");

    return numbers.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


// return masked string
function maskify(cc) {
    cc = cc.split("")
    cc = cc.map((elem, index) => {
        return (index < cc.length - 4) ? "#" : elem;
    })

    cc = cc.join("");
    console.log(cc)
}

maskify("4556364607935616")


function alphabetPosition(text) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
    let result = "";


    for (let i = 0; i < text.length; i++) {
        let elem = alphabet.indexOf(text.toLowerCase()[i]);
        if (elem == "-1") continue;

        result += `${elem + 1} `;
    }

    return result.trim();
}

alphabetPosition("The sunset sets at twelve o' clock.");


function toCamelCase(str) {
    if (str.includes("-")) {
        str = str.split("-").map((elem, index) => {
            if (index == 0) return elem;
            elem = elem.split('');
            elem[0] = elem[0].toUpperCase();
            return elem.join("")
        })
        str = str.join("");
    } else if (str.includes("_")) {
        str = str.split("_").map((elem, index) => {
            if (index == 0) return elem;
            elem = elem.split('');
            elem[0] = elem[0].toUpperCase();
            return elem.join("")
        })
        str = str.join("");
    }

    return str
}

toCamelCase("");


String.prototype.toJadenCase = function () {
    return this.split(" ").map(elem => {
        elem = elem.split("");
        elem[0] = elem[0].toUpperCase();
        return elem.join("");
    }).join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
*/

