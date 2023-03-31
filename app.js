function randomInt(n) {
    return Math.floor(Math.random() * n) + 1;
}

let name = prompt("What is your name");
let playAgain = "Y";

while (playAgain === "Y") {
    let secretNumber = randomInt(44);
    let counter = 0;
    let arrayOfNumbers = [];

    while (true) {
        let input = prompt(`Guess a number ${name}`);
        let number = Number(input);
        if (input === null) {
            alert(`Ohhhhh ${name} is a quiter`);
            break;
        } else {
            counter++;
            arrayOfNumbers.push(number);
        }
        if (!Number.isInteger(number) || input === "") {
            alert(`${name}, Enter an integer`);
        } else {
            if (number === secretNumber) {
                alert(`Congrats ${name}, it took you ${counter} guesses! The numbers you guessed were ${arrayOfNumbers}`);
                playAgain = prompt(`${name}, Would you like to play again? If Yes type "Y" if no type "N".`);
                playAgain = playAgain.toUpperCase();
                break;
            } else if (number < secretNumber) {
                alert(`${name}, Guess higher!`);
            } else {
                alert(`${name}, Guess lower!`);
            }
        }
    }
}