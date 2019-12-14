const points = document.querySelector(".points span");
const question = document.querySelector(".question span");
const result = document.querySelector("#result");
let buttons = document.querySelectorAll("button");
buttons = [...buttons];
const gameBoard = document.querySelector("#gameBoard");

function fillQuestionElements(data){
    if(data.winner == "true"){
        result.innerText = "WYGRAŁEŚ!";
        gameBoard.style.display = "none";
    }
    if(data.loser == "true"){
        result.innerText = "Przegrałeś!";
        gameBoard.style.display = "none";
    }    
        question.innerText = data.question;
        buttons.forEach((button, index) => button.innerText = data.answers[index]);
        // points.innerText = data.goodAnswers;    
}

function showNextQuestion(){
    fetch('/question', {
        method: 'GET',
    })
    .then(r=>r.json())
    .then(data => fillQuestionElements(data))
}

showNextQuestion();

function handleAnswer(data){
    points.innerText = data.goodAnswers;
    showNextQuestion();
}

function sendAnswer(index){
    fetch(`/answer/${index}`, {
        method: 'POST',
    })
    .then(r=>r.json())
    .then(data=>
        {
            handleAnswer(data)
        });
}

for(const button of buttons){
    button.addEventListener('click', (e)=>{
        const index = e.target.dataset.answer;
        sendAnswer(index);
    })
}