enum Choice {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

function isValidChoice(choice: string): choice is Choice {
  return Object.values(Choice).includes(choice as Choice);
}

function generateRandomChoice(): Choice {
  const choices = Object.values(Choice);
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex] as Choice;
}

function play(player1Choice: Choice, player2Choice: Choice): string {
  if (!isValidChoice(player1Choice) || !isValidChoice(player2Choice)) {
    throw new Error('Invalid choice');
  }

  if (player1Choice === player2Choice) {
    return 'It\'s a tie!';
  }

  if (
    (player1Choice === Choice.ROCK && player2Choice === Choice.SCISSORS) ||
    (player1Choice === Choice.PAPER && player2Choice === Choice.ROCK) ||
    (player1Choice === Choice.SCISSORS && player2Choice === Choice.PAPER)
  ) {
    return 'Player 1 wins!';
  }

  return 'Player 2 wins!';
}

// Usage:
const player1Choice = generateRandomChoice();
const player2Choice = generateRandomChoice();
const result = play(player1Choice, player2Choice);

console.log(`Player 1 chose ${player1Choice}`);
console.log(`Player 2 chose ${player2Choice}`);
console.log(result); // Output: "Player 2 wins!" (pode ser diferente, dependendo das escolhas aleatórias)