// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors)

// const [firstColor, secondColor, thirdColor, ...extra] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extra)

// const person1 = {
//     firstName: "SpongeBob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",

// }

// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// const person2 = {
//     firstName: "SpongeBob2",
//     lastName: "SquarePants2",
//     age: 31,

// }

// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",

}
function displayPerson({firstName, lastName, age, job}) {
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job ${job}`);
}

displayPerson(person1)