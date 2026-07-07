// class MathUtil {
//     static PI = 3.14159;
    
//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static getCircumference(radius) {
//         return 2 * MathUtil.PI * radius;
//     }

//     static getArea(radius) {
//         return MathUtil.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

class User {
    static userCount = 0;
    constructor(name) {
        this.name = name;
        User.userCount++;
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user1 = new User('John');
const user2 = new User('Jane');
const user3 = new User('Jim');
console.log(user1.name);
console.log(user2.name);
console.log(user3.name);
console.log(user1.userCount);
console.log(user2.userCount);
console.log(user3.userCount);
console.log(User.userCount);
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount()