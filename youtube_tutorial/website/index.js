// console.log(`hello`);
// console.log(`I like to eat apples`);

// window.alert(`I like to eat apples`);
// window.alert(`I like to eat bananas`);

// document.getElementById(`title`).textContent = `Hello World`;
// document.getElementById(`paragraph`).textContent = `This is a paragraph`;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is ${gpa}`);

// let firstName = `John`;
// let lastName = `Doe`;
// let fullName = firstName + ` ` + lastName;
// let email = "Bro123@gmail.com";
// let result = email.length;

// console.log(typeof fullName);
// console.log(`Your name is ${fullName}`);
// console.log(`Your email is ${email}`);
// console.log(`Your email length is ${result}`);

// let online = true;
// let forSale = false;

// console.log(typeof online);
// console.log(`You are online: ${online}`);
// console.log(`Item is for sale: ${forSale}`);

// let fullName = `Alice Bob`;
// let result = fullName.toUpperCase();
// let age = 25;
// let isStudent = true;

// document.getElementById(`p1`).textContent = `Your name is ${fullName}`;
// document.getElementById(`p2`).textContent = `You are ${age} years old`;
// document.getElementById(`p3`).textContent = `Enrolled in course: ${isStudent}`;

// let students = 30;
// students--;
// students = Math.round(students, 2);
// console.log(students);

// let username = window.prompt(`What's your user name?`);
// console.log(username)
// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `hello ${username}`;
//     console.log(username);
// }


// let age = window.prompt(`How old are you?`);
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);
// circumference = 2 * PI * radius;
// document.getElementById("mySubmit").onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + `cm`;
// }

// const decreseBtn = document.getElementById("descreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }


// console.log(Math.PI)
// console.log(Math.E)

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");

// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function() {

//     randomNum1 = Math.floor(Math.random() * (max - min)) + min;
//     randomNum2 = Math.floor(Math.random() * (max - min)) + min;
//     randomNum3 = Math.floor(Math.random() * (max - min)) + min;

//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

// let age = 13;

// if (age >= 18) {
//     console.log(`You are an adult`);
// } else if (age >= 13) {
//     console.log(`You are a teenager`);
// } else {
//     console.log(`You are a child`);
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function() {
    let age = myText.value;
    age = Number(age);
    if (age >= 18) {
        resultElement.textContent = `You are an adult`;
    } else if (age >= 13) {
        resultElement.textContent = `You are a teenager`;
    } else {
        resultElement.textContent = `You are a child`;
    }
}

