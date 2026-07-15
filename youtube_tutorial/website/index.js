// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ['karate', 'jellyfishing', 'cooking'],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.address.city);

// for (const property in person.address) {
//     console.log(person.address[property])
// }

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conh St.", "a", "b");
const person2 = new Person("Patrick", 12, "srere", "c", "d");
const person3 = new Person("Patrick", 12, "sr232e", "f", "g");

console.log(person1.address.city)
console.log(person2.address.city)
