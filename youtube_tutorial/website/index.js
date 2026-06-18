// hello(leave);

// function hello(callback) {
//     console.log("hello");
//     callback();

// }

// function leave() {
//     console.log("Leave!");
// }

// function goodbye() {
//     console.log("goodbye!");
// }

sum(displayPage, 1 , 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}