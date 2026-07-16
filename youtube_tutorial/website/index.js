const cards = ['A', 2, 3, 4, 5, 'J', 'Q', 'K'];
// cards.sort(() => Math.random() - 0.5);

shuffle(cards);
console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}

