const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    console.log("Player choice: " + playerChoice);

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log("Computer choice: " + computerChoice);
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ( 
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }   


}