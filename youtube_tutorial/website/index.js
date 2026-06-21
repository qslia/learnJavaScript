// function hello() {
//     console.log("Hello");
// }
// hello();

// const hello = function() {
//     console.log("hello")
// }

// hello();


// const hello = () => console.log("hello")

// hello();


// const hello = (name) => console.log(`hello ${name}`)

// hello("bro");

// const hello = (name, age) => {
//     console.log(`hello ${name}`)
//     console.log(`You are ${age} years old`);
// }

// hello("bro", 25);

// setTimeout(() => console.log("hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
console.log(cubes);
console.log(squares);
console.log(evenNums);