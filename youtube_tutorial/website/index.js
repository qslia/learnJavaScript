// let number = 123456.789;
// number = number.toLocaleString(undefined);

// console.log(number);

let number = 123456.789;
// number = number.toLocaleString("en-US");
// number = number.toLocaleString("hi-IN");
// number = number.toLocaleString("de-DE");

// number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
// number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(number);


