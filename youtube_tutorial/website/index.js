const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "apple1", color: "red1", calories: 96},
    {name: "apple2", color: "red2", calories: 97},
    {name: "apple3", color: "red3", calories: 98},
]


fruits.push({name: "apple4", color: "red4", calories: 99})
// fruits.pop()
// fruits.splice(1, 3)

// fruits.forEach(fruit => console.log(fruit.calories));
// const fruitNames = fruits.map(fruit => fruit.name)
// const yellowFruits = fruits.filter(fruit => fruit.color == 'red2')
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit: max);
const minFruit = fruits.reduce((min, fruit) => 
    fruit.calories < min.calories ?
    fruit: min);

console.log(minFruit)