const aLogout = document.querySelector('#logout');
const points = document.querySelector('#points');
const wins = document.querySelector('#wins');
const draws = document.querySelector('#draws');
const losses = document.querySelector('#losses');
const welcome = document.querySelector('#welcome');
const playerChoices = document.querySelectorAll('.wrapper div');


function loadSummary(){

    fetch('/summary', {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        points.textContent = data.points;
        wins.textContent = data.wins;
        draws.textContent = data.draws;
        losses.textContent = data.losses;
        welcome.textContent = data.name;
    });
}

loadSummary();


aLogout.addEventListener('click', function(){

    fetch('/logout', {
        method: 'POST',
        body: JSON.stringify({
            logout: true,
        }),
        headers:
        {'Content-Type':'application/json'}
    })
})


function whoWin(playerChoice){

    let possibilities = [
        {
            id: 1,
            name: 'paper',
            choice: 'first'
        },
        {
            id: 2,
            name: 'scissors',
            choice: 'second'
        },
        {
            id: 3,
            name: 'stone',
            choice: 'third'
        }
    ];

    let randomChoice = [];

    const index = Math.floor(Math.random()*(possibilities.length-1));
    randomChoice.push(possibilities[index]);
    possibilities.splice(index, 1);

    const aiChoice = randomChoice[0].choice;

    const userChoice = playerChoice.className;
    
    if(userChoice == aiChoice){
        console.log("remis");
    }
    else if((userChoice == "first" && aiChoice == "third") || (userChoice == "second" && aiChoice == "first") || (userChoice == "third" && aiChoice == "second")){
        console.log("wygrales");
    }
    else{
        console.log("przegrales");
    }
}



playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', ()=>{
    whoWin(playerChoice);
}))



