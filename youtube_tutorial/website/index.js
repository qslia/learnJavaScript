const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    country: "USA",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    zip: "12345",
    state: "NY",
    country: "USA",
    isEmployee: true,
    sayHello: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
}
const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    city: "Los Angeles",
    country: "USA",
    email: "jane.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    zip: "12345",
    state: "CA",
    country: "USA",
    isEmployee: false,
    sayHello: () => {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    } // Arrow functions don't have their own this binding
}

console.log(person1.firstName);
console.log(person2.firstName);
console.log(person1.sayHello());
console.log(person2.sayHello());