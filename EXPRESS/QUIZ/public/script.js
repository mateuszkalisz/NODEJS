const question = document.querySelector('#question');
let buttons = document.querySelectorAll('button');
buttons = [...buttons];

const gameboard = document.querySelector('#game-board');
const h2 = document.querySelector('h2');

const tip = document.querySelector('#tip');

function fillQuestionElements(data) {

    if(data.winner === 'true'){
        gameboard.style.display = 'none';
        h2.innerText = 'WYGRAŁEŚ/AŚ!!!';
        return;
    }
    if(data.loser === 'true'){
        gameboard.style.display = 'none';
        h2.innerText = 'PRZEGRAŁEŚ/AŚ!!! :('
        return;
    }

    question.innerText = data.question;

    // for(let i=0; i<buttons.length; i++){
    //     buttons[i].innerText = data.answers[i];
    // }
    buttons.forEach((button,index)=>{
        button.innerText = data.answers[index];
    })
}

function showNextQuestion() {
    fetch('/question', {
        method: 'GET',
        
    })
    .then(r => r.json())
    .then(data => fillQuestionElements(data));
}

showNextQuestion();


const goodAnswersSpan = document.querySelector("#good-answers");

function handleAnswerFeedback(data){
    goodAnswersSpan.innerText = data.goodAnswers;
    showNextQuestion();
}

function sendAnswer(answerIndex){
    fetch(`/answer/${answerIndex}`, {
        method: 'POST',
        
    })
    .then(r => r.json())
    .then(data => {
        handleAnswerFeedback(data);
    });
}

for(const button of buttons){
    button.addEventListener('click', (e)=>{
        const answerIndex = e.target.dataset.answer;
        sendAnswer(answerIndex);
    })
}

function callToAFriend(){
    fetch(`/help/friend`, {
        method: 'GET',
        
    })
    .then(r => r.json())
    .then(data => {
        tip.innerText = data.text;
    });
}

document.querySelector('#callToAFriend').addEventListener('click', callToAFriend);