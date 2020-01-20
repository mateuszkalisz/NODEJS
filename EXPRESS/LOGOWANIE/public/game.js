const aLogout = document.querySelector('#logout');
const points = document.querySelector('#points');
const wins = document.querySelector('#wins');
const draws = document.querySelector('#draws');
const losses = document.querySelector('#losses');
const welcome = document.querySelector('#welcome');
const playerChoices = document.querySelectorAll('.wrapper div');
const aiChoiceImg = document.querySelector('.aiChoice');
const span = document.createElement("span");
span.textContent = "";
aiChoiceImg.appendChild(span);

let colorIndex = 0;
let color = "";


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

    let score = 0;
    
    if(userChoice == aiChoice){
        // console.log("remis");
        score = 1;
    }
    else if((userChoice == "first" && aiChoice == "third") || (userChoice == "second" && aiChoice == "first") || (userChoice == "third" && aiChoice == "second")){
        // console.log("wygrales");
        score = 3;
    }
    else{
        // console.log("przegrales");
        score = 0;
    }

    fetch('/whoWin', {
        method: 'POST',
        body: JSON.stringify({
            score,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })



    if(colorIndex%2 == 0){
        color = 'red';
        colorIndex++;
    }
    else{
        color = 'blue';
        colorIndex++;
    }

    // console.log(color);

    span.style.color = color;

    if(aiChoice == "first") span.textContent = "PAPIER";
    else if(aiChoice == "second") span.textContent = "NOŻYCE";
    else if(aiChoice == "third") span.textContent = "KAMIEŃ";

    loadSummary();
}


playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', ()=>{
    whoWin(playerChoice);
}))



