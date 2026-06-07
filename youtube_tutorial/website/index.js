// function happyBirthday() {
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear you!");
//     console.log("Happy Birthday to you!");
// }

// happyBirthday();
// function1()

// function function1() {
//     let x = 1;
//     console.log(x);
// }

// function function2() {
//     let y = 3;
//     console.log(x);
// }

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", convert);

function convert() {
    const temperature = parseFloat(textBox.value);
    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number";
        return;
    }
    if (toFahrenheit.checked) {
        const fahrenheit = (temperature * 9/5) + 32;
        result.textContent = `${temperature}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (toCelsius.checked) {
        const celsius = (temperature - 32) * 5/9;
        result.textContent = `${temperature}°F = ${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = "Select a unit";
    }
}