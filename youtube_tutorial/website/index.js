// function sayHello() {
//     window.alert("hello")
// }
// setTimeout(sayHello, 1000)
// const timeoutId = setTimeout(() => {
//     window.alert("hello2")
// }, 2000);

// clearTimeout(timeoutId);


let timeoutId;
function startTimer() {
    timeoutId = setTimeout(() => window.alert("hello"), 3000)
    console.log("STARTER");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEAR");
}
