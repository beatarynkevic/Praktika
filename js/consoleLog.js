// https://www.youtube.com/watch?v=Mus_vwhTCq0
const foo = {
    name: 'tom',
    age: 30,
    nervouse: false
};

const bar = {
    name: 'jerry',
    age: 40,
    nervouse: false
};

const baz = {
    name: 'tom',
    age: 50,
    nervouse: true
};

//bad code
console.log(foo);
console.log(bar);
console.log(baz);

//good code
console.log({ foo, bar, baz });

//console.table(...)
console.table([foo, bar, baz]);