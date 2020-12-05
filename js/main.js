const txt = 'abcdefgh';
const postion = txt.indexOf("c");

console.log(postion);

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const pirmas = 'a';
const antras = 'b';
if (pirmas > antras) {
    console.log(`${pirmas} yra daugiau nei ${antras}`);
} else
    if (pirmas < antras) {
        console.log(`${pirmas} yra maziau nei ${antras}`);
    } else {
        console.log(`${pirmas} ir ${antras} yra ligus`);
    }
console.log(`${pirmas} pagal ascii yra 97 skaicius, o ${antras} yra 98`);

// function declarations
function name(a, b) {
    return a * b;
}
const x = name(2, 3);
console.log(x);

// function expressions
const name2 = function (a, b) { return a * b };
const x2 = name2(2, 3);
console.log(x2);

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(5));

console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);