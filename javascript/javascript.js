//create a function called getComputerChoice
function getComputerChoice() {

    //create a variable called computer_action
    let computerAction;

    //generate a number between 0 to 2
    //insert into the variable random_action
    let randomAction = Math.floor(Math.random() * 3) + 1;

    //if random_number is 0:
    if (randomAction == 1) {
        //assign the value "rock" to computer_action
        computerAction = "Rock";
        //else if random_number is 1:
    } else if (randomAction == 2) {
        //assign the value "paper" to computer_action
        computerAction = "Paper";
        //else if random_number is 2:
    } else {
        //assign the value "scissors" to computer_action
        computerAction = "Scissors";
    }

    //return computer_action value
    return computerAction;

}

//create a function called getHumanChoice
function getHumanChoice() {

    //prompt user to input an answer into human_action
    let humanAction = prompt();

    //return human_action value
    return humanAction;
}

//creates a function called playGame
function playGame() {
    //create a variable called humanScore initialized to 0
    let humanScore = 0;

    //create a variable called computerScore initialized to 0
    let computerScore = 0;

    //create a function called playRound which has two
    // parameters humanChoice and computerChoice
    function playRound(humanChoice, computerChoice) {
        //make humanChoice and computerChoice all lowercase with uppercase first letter
        let humanAction;
        let computerAction;
        let lowerCaseLetter = humanChoice.toLowerCase();
        let firstLetter = humanChoice[0].toUpperCase();
        let sliceLetter = lowerCaseLetter.slice(1);
        humanAction = firstLetter + sliceLetter;

        lowerCaseLetter = computerChoice.toLowerCase();
        firstLetter = computerChoice[0].toUpperCase();
        sliceLetter = lowerCaseLetter.slice(1);
        computerAction = firstLetter + sliceLetter;

        //create a variable called winner
        let winner;

        // if computerChoice is rock and humanChoice is scissors
        // OR
        // if computerChoice is paper and humanChoice is rock
        // OR
        // if computerChoice is scissors and humanChoice is paper
        if ((computerAction == "Rock" && humanAction == "Scissors")
            || (computerAction == "Paper" && humanAction == "Rock")
            || (computerAction == "Scissors" && humanAction == "Paper")) {
            //winner is computerChoice
            winner = "Computer";

            //else if computerChoice is not equal to humanChoice
        } else if (computerAction != humanAction) {
            //winner is humanChoice
            winner = "Human";
        }

        //if winner is humanChoice
        if (winner == "Human") {
            //output "You win! 'humanChoice' beats 'computerChoice'."
            console.log(`You win! ${humanAction} beats ${computerAction}.`);
            //humanScore is incremented
            humanScore = humanScore + 1;
            //if winner is computerChoice
        } else if (winner == "Computer") {
            //output "You lose! 'computerChoice beats 'humanChoice'."
            console.log(`You lose! ${computerAction} beats ${humanAction}.`);
            //computerScore is incremented
            computerScore = computerScore + 1;
        } else {
            console.log(`Noone wins! Both are ${humanAction}.`);
        }
    }

    //loop five times
    for (let i = 0; i < 5; i++) {
        //run getComputerChoice
        let computerSelection = getComputerChoice();
        //run getHumanChoice
        let humanSelection = getHumanChoice();
        //call playRound
        playRound(humanSelection, computerSelection);
    }

    //if humanScore is more than computerScore then human wins
    if (humanScore > computerScore){
        console.log(`You win the game! You won ${humanScore} out of 5 matches.`);
    //otherwise if humanScore is less than computerScore then computer wins
    }else if (humanScore < computerScore){
        console.log(`You lose! The computer won ${computerScore} out of 5 matches.`)
    //otherwise noone wins
    }else{
        console.log(`Noone wins! There is a tie.`);
    }

}

//Message to run playGame in console
console.log("Write 'playGame()' to begin game.");