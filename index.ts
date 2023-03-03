enum Choice {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

function play(player1Choice: Choice, player2Choice: Choice): string {
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
const player1Choice = Choice.ROCK;
const player2Choice = Choice.PAPER;
const result = play(player1Choice, player2Choice);

console.log(result); // Output: "Player 2 wins!"
