function randomInt(min ,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

function getComputerChoice()
{
    choices=["Rock","Paper","Scissors"];
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