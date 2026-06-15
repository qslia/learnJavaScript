// let fruits = ["apple", "banana", "cherry"];

// fruits[0] = "orange";
// fruits.push("pear");
// fruits.pop()
// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits);

// const matrix = [[1,2,3], [4,5,6], [7,8,9]];

// for (let row of matrix) {
//     const rowString = row.join(' ');
//     console.log(rowString);
// }

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers); // spread operator
// let minimum = Math.min(...numbers);
// console.log(maximum, minimum);

// let userName = "John";
// let letters = [...userName];
// console.log(letters);

// let fruits = ["apple", "banana", "cherry"];
// let newFruits = [...fruits, "orange", "pear"];
// console.log(newFruits);

// function openFridge(...foods) {
//     console.log(foods);
// }

// function getFoods(...foods) {
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "salad";
// const food4 = "soda";

// openFridge(food1, food2, food3, food4);
// const foods = getFoods(food1, food2, food3, food4);
// console.log(foods);

// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(getAverage(1, 2, 3, 4, 5));

// function combineString(...strings) {
//     return strings.join(" ");
// }

// console.log(combineString("Mr.", "Spongbob", "Squarepants"));

// spread = expands an iterable into separate elements
// rest = packs arguments into an array

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor((Math.random() * 6)) + 1;
        values.push(value);
        //If the image fails to load → User sees "Dice 3" instead
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`); 
        
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
