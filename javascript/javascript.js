//create a variable called humanScore initialized to 0
//create a variable called computerScore initialized to 0

//create a function called getComputerChoice
    function getComputerChoice(){

    //create a variable called computer_action
    let computer_action;

    //generate a number between 0 to 2
    //insert into the variable random_action
    let random_action = Math.floor(Math.random() * 3) + 1;
    console.log(random_action);
    //if random_number is 0:
    if (random_action == 1){
        //assign the value "rock" to computer_action
        computer_action = "Rock";
    //else if random_number is 1:
    }else if(random_action == 2){
        //assign the value "paper" to computer_action
        computer_action = "Paper";
    //else if random_number is 2:
    }else{
        //assign the value "scissors" to computer_action
        computer_action = "Scissors";
    }

    //return computer_action value
    return computer_action;

    }

//create a function called getHumanChoice
    function getHumanChoice(){
    //prompt user to input an answer into human_action
    //return human_action value
    }

//create a function called playRound which has two
// parameters humanChoice and computerChoice
    function playRound(humanChoice, computerChoice){
    //make humanChoice and computerChoice all lowercase with uppercase first letter
    //create a variable called winner
    // if computerChoice is rock and humanChoice is scissors
    // OR
    // if computerChoice is paper and humanChoice is rock
    // OR
    // if computerChoice is scissors and humanChoice is paper
        //winner is computerChoice
    //else if computerChoice is not equal to humanChoice
        //winner is humanChoice
    
    //if winner is humanChoice
        //output "You win! 'humanChoice' beats 'computerChoice'."
        //humanScore is incremented
    //if winner is computerChoice
        //output "You lose! 'computerChoice beats 'humanChoice'."
        //computerScore is incremented
    }

//creates a function called playGame
    function playGame(){
    //loop five times
        //run getComputerChoice
        //run getHumanChoice
        //call playRound
    }

    console.log(getComputerChoice());

