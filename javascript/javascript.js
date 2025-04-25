  //create a variable called humanScore initialized to 0
  let humanScore = 0;

  //create a variable called computerScore initialized to 0
  let computerScore = 0;

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
function getResult(humanScore, computerScore, result) {

    let gameResult = document.createElement('p');
    //if humanScore is more than computerScore then human wins
    if (humanScore > computerScore) {
        gameResult.textContent = `GAME WON: Your Score: ${humanScore} || Computer Score: ${computerScore}`;
        //otherwise if humanScore is less than computerScore then computer wins
    } else if (humanScore < computerScore) {
        gameResult.textContent = `GAME OVER: Your Score: ${humanScore} || Computer Score: ${computerScore}`;
        //otherwise noone wins
    } else {
        gameResult.textContent = `TIE GAME: Your Score: ${humanScore} || Computer Score: ${computerScore}`;
    }

    result.replaceChild(gameResult, result.lastChild);
}

//creates a function called playGame
function playGame(humanSelection) {
    let result = document.querySelector('#results');

    //create a function called playRound which has two
    // parameters humanChoice and computerChoice
    function playRound(humanChoice, computerChoice) {
        
        if(humanScore >= 5){
            getResult(humanScore, computerScore, result);
            humanScore = 0;
            computerScore = 0;
            return;
        }
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
        let winner = document.createElement('p');

        // if computerChoice is rock and humanChoice is scissors
        // OR
        // if computerChoice is paper and humanChoice is rock
        // OR
        // if computerChoice is scissors and humanChoice is paper
        if ((computerAction == "Rock" && humanAction == "Scissors")
            || (computerAction == "Paper" && humanAction == "Rock")
            || (computerAction == "Scissors" && humanAction == "Paper")) {
            //winner is computerChoice
            winner.textContent = `LOST ROUND - You: ${humanAction} || Computer: ${computerAction}`;
            computerScore = computerScore + 1;

            //else if computerChoice is not equal to humanChoice
        } else if (computerAction != humanAction) {
            //winner is humanChoice
            winner.textContent = `WON ROUND - You: ${humanAction} || Computer: ${computerAction}`;
            humanScore = humanScore + 1;
        } else {
            winner.textContent = `TIE ROUND - You: ${humanAction} || Computer: ${computerAction}`;
        }

        result.replaceChild(winner, result.lastChild);
    }

    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanScore);

}

let btn = document.querySelector('#buttons');
btn.addEventListener('click', (event) => {
    let target = event.target;
    playGame(target.id);
});