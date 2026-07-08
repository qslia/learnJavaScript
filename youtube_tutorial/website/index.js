// class Rectangle {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width must be a positive number.")
//         }
//     }

//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error("Height must be a positive number.")
//         }
//     }

//      get Width() {
//         return `${this._width.toFixed(1)} cm`;
//      }

//      get Height() {
//         return `${this._height} cm`;
//      }

//      get area() {
//         return `${(this._width * this._height).toFixed(1)} cm^2`;
//      }
// }

// const rectangle = new Rectangle(3, 4)

// rectangle.width = -100;
// rectangle.height = "pizza";

// console.log(rectangle.Width);
// console.log(rectangle.Height);
// console.log(rectangle.area)


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }
    get firstName() {
        return this._firstName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person('barry', "allen", 12);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);