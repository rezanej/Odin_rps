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

function game()
{
    let computerWin=0;
    let playerWin=0;
    
    let playerChoice=playerSelection();
    let computerChoice=getComputerChoice();
    result=playRound(computerChoice,playerChoice);
    if(result===1){
        console.log("You Won! "+ playerChoice+" beats"+" "+computerChoice);
        playerWin++;
    }
    else if(result===-1)
    {
        console.log("You Lose! "+ computerChoice+" beats"+" "+playerChoice);
        computerWin++;
    }
    else{
        console.log("Draw! both choices were: "+playerChoice);
    }
    
    
    console.log("Result: ")
    console.log("Player Win: "+playerWin)
    console.log("Computer Win: "+computerWin)
    console.log("Draw: "+(5-computerWin-playerWin))
    
}
function buttonPressed(value)
{
    console.log(value);
}
function addButtonsEvent(){
    
    let buttons=document.querySelectorAll(".button");
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{buttonPressed(button.getAttribute('value'))})
    })
}

addButtonsEvent();