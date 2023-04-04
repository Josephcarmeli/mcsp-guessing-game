// Define function to generate a random integer between 1 and n
function randomInt(n) {
    return Math.floor(Math.random() * n) + 1;
  }
  
  // Prompt user for their name
  let name = prompt("What is your name?");
  
  // Initialize variables for playing again and tracking player scores
  let playAgain = "Y";
  let people = {};
  
  // Start the game loop
  while (playAgain === "Y") {
    // Generate a new secret number and reset the counters and arrays
    let secretNumber = randomInt(43);
    let counter = 0;
    let arrayOfNumbers = [];
  
    // Check if the player has played before and set their score to Infinity if not
    if (!people.hasOwnProperty(name)) {
      people[name] = Infinity;
    }
  
    // Start the guessing loop
    while (true) {
      // Prompt the user to enter a guess and convert it to a number
      let input = prompt(`Guess a number, ${name}!`);
      let number = Number(input);
      
      // Check if the user clicked cancel or closed the prompt
      if (input === null) {
        alert(`Oh no, ${name} is a quitter!`);
        break;
      } else {
        // Increment the guess counter and add the guess to the array
        counter++;
        arrayOfNumbers.push(number);
      }
      
      // Check if the guess is not a number or is an empty string
      if (!Number.isInteger(number) || input === "") {
        alert(`Please enter an integer, ${name}!`);
      } else {
        // Check if the guess is correct and handle the outcome accordingly
        if (number === secretNumber) {
          // Get the player's previous score and compare it to the current score
          let prevScore = people[name];
          
          if (counter < prevScore) {
            // If the current score is better than the previous score, congratulate the player and update their score
            alert(`That's correct, ${name}! And you beat your previous attempt by ${prevScore - counter} fewer guesses!`);
          } else if (counter > prevScore) {
            // If the current score is worse than the previous score, let the player know and keep their previous score
            alert(`That's correct, ${name}, but you did worse in your last game by ${counter - prevScore} more guesses.`);
          } else {
            // If the current score is the same as the previous score, let the player know they tied their previous attempt
            alert(`That's correct, ${name}! And you tied your previous attempt!`);
          }
          
          // Update the player's score and ask if they want to play again
          people[name] = counter;
          playAgain = prompt(`${name}, would you like to play again? If yes, type "Y". If no, type "N".`);
          playAgain = playAgain.toUpperCase();
          break;
        } else if (number < secretNumber) {
          // If the guess is too low, prompt the player to guess higher
          alert(`Guess higher, ${name}!`);
        } else {
          // If the guess is too high, prompt the player to guess lower
          alert(`Guess lower, ${name}!`);
        }
      }
    }
  }