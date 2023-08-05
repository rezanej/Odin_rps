function randomInt(min ,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

function getComputerChoice()
{
    choices=["Rock","Paper","Scissors"];
    return choices[randomInt(0,choices.length)]
}
