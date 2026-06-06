// let age = 21;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// let finalAmount = purchaseAmount - discount;
// console.log(finalAmount);

// let day = 1;

// switch(day) {
//     case 1:
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// let testScore = 92;
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
//         break;
// }
// console.log(letterGrade);

// let userName = "BroCode  ";
// userName.charAt(0);
// console.log(userName.charAt(0));
// console.log(userName.charAt(1));
// console.log(userName.indexOf("o"));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.includes("Code"));
// console.log(userName.includes("code"));
// console.log(userName.startsWith("Bro"));
// console.log(userName.endsWith("Code"));

// let phoneNumber = "123-456-7890";
// console.log(phoneNumber.split("-"));
// console.log(phoneNumber.replaceAll("-", "/"));
// console.log(phoneNumber.padStart(15, "0"));

// const fullName = "Bro Code";
// const firstName = fullName.slice(0, 3);
// console.log(firstName);
// const lastName = fullName.slice(4);
// console.log(lastName);
// const fullName2 = firstName + " " + lastName;
// console.log(fullName2);
// const fullName3 = fullName.replace("Bro", "John");
// console.log(fullName3);
// const fullName4 = fullName.replaceAll("o", "a");
// console.log(fullName4);

// const email = "Brol@gmail.com";
// console.log(email.substring(0, 3));
// console.log(email.slice(0, email.indexOf("@")));
// console.log(email.slice(email.indexOf("@") + 1));

// let userName = window.prompt("Enter your name");
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1).toLowerCase();
// userName = letter + extraChars;
// console.log(userName);


// const temp = 20;

// if(temp > 0 && temp < 30) {
//     console.log("The weather is good");
// } else if(temp >= 30 && temp < 40) {
//     console.log("The weather is hot");
// } else if(temp >= 40 && temp < 50) {
//     console.log("The weather is very hot");
// } else {
//     console.log("The weather is cold");
// }

// const PI = 3.14;

// if (PI === "3.14") {
//     console.log("PI is 3.14");
// } else {
//     console.log("PI is not 3.14");
// }

// let userName = "";
// while (userName === "" || userName === null) {
//     userName = window.prompt("Enter your name");
// }
// console.log("Hello", userName);


// let userName = "";
// do {
//     userName = window.prompt("Enter your name");
// } while (userName === "" || userName === null) 
// console.log("Hello", userName);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");
//     if (username === "admin" && password === "123") {
//         loggedIn = true;
//     } else {
//         console.log("Invalid username or password");
//     }
// }
// console.log("Logged in successfully");

// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
// }
// console.log("Happy New Year");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0;
let guess;
let running = true;

console.log(answer);
while (running) {
    guess = window.prompt("Enter your guess");
    if (Number(guess) === answer) {
        console.log("You guessed it");
        running = false;
    }
    attempts++;
    if (guess < answer) {
        window.alert("Too low");
    } else if (guess > answer) {
        window.alert("Too high");
    } else {
        window.alert("Invalid guess");
    }
}
console.log(`You guessed it in ${attempts} attempts`);



