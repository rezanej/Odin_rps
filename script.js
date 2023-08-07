function randomInt(min ,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

function getComputerChoice()
{
    choices=["rock","paper","scissors"];
    return choices[randomInt(0,choices.length)]
}
function playerSelection()
{
    let inp=prompt("Enter from(rock,paper,scissors):").toLowerCase();
    if(inp==="rock"||inp==="paper"||inp==="scissors")
    {
        return inp;
    }
    else{
        //raise error .for now i will consider that input is allways right;
    }
}
function playRound(computerChoice,playerChoice)
{
    // if player wins return 1 if draw 0 and computer -1
    if(computerChoice===playerChoice)
    {
        return 0;
    }
    else if(computerChoice==="rock" && playerChoice==="paper"){
        return 1;
    }
    else if(computerChoice==="rock" && playerChoice==="scissors"){
        return -1;
    }
    else if(computerChoice==="paper" && playerChoice==="rock"){
        return -1;
    }
    else if(computerChoice==="paper" && playerChoice==="scissors"){
        return 1;
    }
    else if(computerChoice==="scissors" && playerChoice==="paper"){
        return 1;
    }
    else if(computerChoice==="scissors" && playerChoice==="rock"){
        return 1;
    }
    else if(computerChoice==="rock" && playerChoice==="scissors"){
        return -1;
    }
}
let round=1;
let computerWin=0;
let playerWin=0;


function makeRound(result,playerChoice,computerChoice)
{
    const results=document.querySelector('.results');
    const divRound=document.createElement('div');
    divRound.classList.add("round");

    const roundNumber=document.createElement('h3');
    roundNumber.textContent=`Round ${round++}`;

    divRound.appendChild(roundNumber);

    const divRoundInfo=document.createElement('div');
    divRoundInfo.classList.add("roundInfo");
    divRound.appendChild(divRoundInfo);

    const pYou=document.createElement('p');
    const pWinner=document.createElement('p');
    const pComputer=document.createElement('p');

    pYou.textContent=`You: ${playerChoice}`;
    pComputer.textContent=`Computer: ${computerChoice}`;
    if(result===1)
    {
        pWinner.textContent='   You Win!   ';
    }
    else if(result===-1){
        pWinner.textContent='Computer Wins!';
    
    }
    else{
        pWinner.textContent="Draw!"
    }
    divRoundInfo.appendChild(pYou);
    divRoundInfo.appendChild(pWinner);
    divRoundInfo.appendChild(pComputer);
    results.appendChild(divRound);
}

function isDone(){
    if(playerWin>=5)
    {
        document.querySelector('.result-final h2').textContent='YOU Win!!!';
        return true;
    }
    else if(computerWin>=5)
    {
        document.querySelector('.result-final h2').textContent='Computer Wins!!!';
        return true;

    }
    else return false;
}
function updateWins()
{
    document.querySelector('.result #you').textContent=`You: ${playerWin}`;
    document.querySelector('.result #computer').textContent=`Computer: ${computerWin}`;
}
function disableButtons()
{
    const buttons=document.querySelectorAll('.button');
    buttons.forEach((button)=>{
        button.setAttribute('disabled',"true");
    })
}
function game(playerChoice)
{
    
    if(!isDone()){
    let computerChoice=getComputerChoice();
    result=playRound(computerChoice,playerChoice);
    if(result===1){
        makeRound(result,playerChoice,computerChoice)
        playerWin++;
    }
    else if(result===-1)
    {
        makeRound(result,playerChoice,computerChoice)
        computerWin++;
    }
    else{
        makeRound(result,playerChoice,computerChoice)
    }
    updateWins();
    }
    else{
        disableButtons();
    }
   
}

function buttonPressed(value)
{
    game(value)
}
function addButtonsEvent(){
    
    let buttons=document.querySelectorAll(".button");
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{buttonPressed(button.getAttribute('value'))})
    })
}

addButtonsEvent();