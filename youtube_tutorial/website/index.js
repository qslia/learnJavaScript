const myCheckBox = document.getElementById('myCheckbox');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');
const mySubmit = document.getElementById('mySubmit');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const paypalBtn = document.getElementById('paypalBtn');



mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = 'You are subscribed';
    } else {
        subResult.textContent = 'You are not subscribed';
    }

    if (visaBtn.checked) {
        paymentResult.textContent = 'You are using Visa';
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = 'You are using MasterCard';
    } else if (paypalBtn.checked) {
        paymentResult.textContent = 'You are using Paypal';
    } else {
        paymentResult.textContent = 'You are not using any card';
    }
}

