//https://www.youtube.com/watch?v=Mus_vwhTCq0 2:50

const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

//Bad code
function feed(animal) {
    return `Feed ${animal.name} ${animall.meal} kilos of ${anima.diet} `;
}

//Good code
//Object destructuring

export { turtle }

console.log(feed(turtle));