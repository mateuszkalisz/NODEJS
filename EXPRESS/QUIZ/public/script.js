const question = document.querySelector('#question');
let buttons = document.querySelectorAll('button');
buttons = [...buttons];

function fillQuestionElements(data) {
    question.innerText = data.question;
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

function sendAnswer(answerIndex){
    fetch(`/answer/${answerIndex}`, {
        method: 'POST',
        
    })
    .then(r => r.json())
    .then(data => 
        {fillQuestionElements(data)
    });
}

for(const button of buttons){
    button.addEventListener('click', (e)=>{
        const answerIndex = e.target.dataset.answer;
        sendAnswer(answerIndex);
    })
}