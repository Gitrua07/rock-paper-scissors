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
        gameResult.textContent = "GAME WON";
        //otherwise if humanScore is less than computerScore then computer wins
    } else if (humanScore < computerScore) {
        gameResult.textContent = "GAME OVER";
        //otherwise noone wins
    } else {
        gameResult.textContent = "TIE GAME";
    }

    result.replaceChild(gameResult, result.lastChild);
}

//creates a function called playGame
function playGame(humanSelection) {
    let result = document.querySelector('#results');
    let yourScoreClass = document.querySelector('#your-score');
    let computerScoreClass = document.querySelector('#computer-score');
    let resultsAct = document.querySelector('#results-act');

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
        let winner = document.createElement('p');
        let humanAct = document.createElement('span');
        let compAct = document.createElement('span');

        // if computerChoice is rock and humanChoice is scissors
        // OR
        // if computerChoice is paper and humanChoice is rock
        // OR
        // if computerChoice is scissors and humanChoice is paper
        if ((computerAction == "Rock" && humanAction == "Scissors")
            || (computerAction == "Paper" && humanAction == "Rock")
            || (computerAction == "Scissors" && humanAction == "Paper")) {
            //winner is computerChoice
            winner.textContent = "LOST ROUND"
            computerScore = computerScore + 1;
            //else if computerChoice is not equal to humanChoice
        } else if (computerAction != humanAction) {
            //winner is humanChoice
            winner.textContent = `WON ROUND`;
            humanScore = humanScore + 1;
        } else {
            winner.textContent = `TIE ROUND`;
        }

        humanAct.textContent = `${humanAction}`;
        compAct.textContent = `${computerAction}`;
        
        if(resultsAct.innerHTML != ''){
            resultsAct.innerHTML = '';
        }

        resultsAct.appendChild(humanAct);
        resultsAct.appendChild(compAct);

        if(result.innerHTML === ''){
            result.appendChild(winner);
        }else{
            result.replaceChild(winner, result.lastChild);
        }

        yourScoreClass.textContent = humanScore;
        computerScoreClass.textContent = computerScore;

        if(humanScore >= 5){
            getResult(humanScore, computerScore, result);
            humanScore = 0;
            computerScore = 0;
            return;
        }

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