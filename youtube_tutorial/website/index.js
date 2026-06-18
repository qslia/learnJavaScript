//  let numbers = [1, 2, 3, 4, 5];

//  numbers.forEach(square)
//  numbers.forEach(display);

//  function double(element, index, array) {
//     array[index] = element * 2;
//  }

//  function triple(element, index, array) {
//     array[index] = element * 3;
//  }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2)
// }

//  function display(element) {
//     console.log(element);
//  }

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function display(element) {
    console.log(element);
}