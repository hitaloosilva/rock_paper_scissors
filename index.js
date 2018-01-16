let computerScore = 0;
let humanScore = 0;
const h4 = document.querySelector('#score');
const h2 = document.querySelector('h4');
const playerSelection = document.getElementById('player_selection');
  const computerSelection = document.getElementById('computer_selection');

function reset(){ 
 humanScore = 0;
 computerScore = 0;
 setScore(); 
 h2.textContent = "";
 showButtons();
 setIcon(playerSelection, '', false);
 setIcon(computerSelection, '', false); 
}

function buttonReset(){
  document.querySelector('#reset').addEventListener('click', reset)
}

function playRound(human, computer) {
  const content = document.getElementById('message');  
  setIcon(playerSelection, human, true);
  setIcon(computerSelection, computer, false);

  if (computerScore == 5 || humanScore == 5){
    hideButtons();
    return;
  }
  else if (human === computer){
    content.textContent = `tie`;
    setScore();
  }
  else if (human == "rock" && computer == "scissors") {
    content.textContent = `You win, rock beats scissors!`;
    humanScore += 1;
    setScore();
  }
  else if (human == "paper" && computer == "rock") {
    content.textContent = `You win, paper beats rock!`;
    humanScore += 1;
    setScore();
  }
  else if (human == "scissors" && computer == "paper") {
    content.textContent = `You win, scissors beats paper!`;
    humanScore += 1;
    setScore();
  }
  else {
    content.textContent = `You lose, ${computer} beats ${human}!`;
    computerScore += 1;
    setScore();
  }
  if (computerScore == 5){
    setScore();   
    hideButtons();   
    content.textContent = 'Computer wins!';

  }
  else if (humanScore == 5){  
    hideButtons(); 
    content.textContent = 'You win!';

  }
}

function setIcon(element, clazz, flip){
  var finalClass = "elements selection";
  if(clazz != ''){
    finalClass += " icone icone_" + clazz;
  }
  if(flip == true){
     finalClass += " player_icone_side";
  }  
  element.className = finalClass;
}

function computerChoice() {
  let choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)]
}

function setScore(){
  h4.textContent = `${humanScore} X ${computerScore}`;
}

function hideButtons(){
  const buttonsDiv = document.getElementById('buttons');
  buttonsDiv.style.visibility = 'hidden'; 
}

function showButtons(){
  const buttonsDiv = document.getElementById('buttons');
  buttonsDiv.style.visibility = 'visible'; 
}

function game(){  
  document.getElementById('start').id = 'two';
  showButtons();
  setScore();
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
     playRound(button.id, computerChoice())
   });
  });
}

function startGame(){
  document.querySelector('#start').addEventListener('click', game);
}

hideButtons();
buttonReset();
startGame();
