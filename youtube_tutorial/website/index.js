// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }

// message = "goodbye";
// outer()


// function increment() {
//     let count = 0;
//     count++;
//     console.log(`Count increased to ${count}`);
// }
// increment();
// increment();
// increment();


// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount() {
//         return count;
//     }
//     return {increment, getCount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.count)
// console.log(`The current count is ${counter.getCount()}`)


let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
}

function getScore() {
    return score;
}
score = 10;
increaseScore(5);
increaseScore(6);

console.log(`The final score is ${getScore()}pts`)


function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();

game.increaseScore(5);
game.increaseScore(6);

console.log(`The final score is ${game.getScore()}pts`)