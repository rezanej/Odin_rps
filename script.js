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

for (let count = 0; count < 10; count++) {
    let a=getComputerChoice();
    let b=getComputerChoice();
    console.log("computer 1: "+a+" computer 2: "+b);
    console.log("result: "+playRound(a,b));
    
}