function gameRoutes(app) {
let goodAnswers = 0;
let isGameOver = false;
let callToAFriendUsed = false;
let callToACrowdUsed = false;
let halfOnHalfUsed = false;

const questions = [
    {
        question: 'Jaki jest najlepszy jezyk programowania wg mnie?',
        answers: ['C++', 'Java', 'Pyhton', 'JavaScript'],
        correctAnswer: 3,
    },
    {
        question: 'Czy ten kurs jest fajny?',
        answers: ['Tak', 'Nie', 'Jest najlepszy!', 'Nie wiem'],
        correctAnswer: 2,
    },
    {
        question: 'Czy lubisz jeść pizze?',
        answers: ['Tak', 'Nie', 'Jestem na diecie', 'Czym jest pizza?'],
        correctAnswer: 0,
    },
];

app.get('/question', (req,res)=>{
    if(goodAnswers===questions.length){
        res.json({
            winner: 'true',
        });
    }
    if(isGameOver){
        res.json({
            loser: 'true',
        });
    }
    else{
        const nextQuestion = questions[goodAnswers];
        const {question, answers} = nextQuestion;

        res.json({
            question,answers,
        });
    }

})

app.post('/answer/:index', (req,res)=>{
    
    const {index} = req.params;

    const currentQuestion = questions[goodAnswers];

    const isGoodAnswer = currentQuestion.correctAnswer === Number(index);

        if(isGoodAnswer){
            goodAnswers++;
        }
        else{
            isGameOver = true;
        }

        if(isGameOver){
            res.json({
                loser: true,
            })
        }

        res.json({
            correct: isGoodAnswer,
            goodAnswers,
        });

})


app.get('/help/friend', (req,res)=>{
    if(callToAFriendUsed) {
        return res.json({
            text: 'To koło ratunkowe było już wykorzystane',
        });
    }

    callToAFriendUsed = true;

    const doesFriendKnowAnswer = Math.random() > 0.5;

    const currentQuestion = questions[goodAnswers];

    res.json({
        text: doesFriendKnowAnswer ? `Wydaje mi sie że odpowiedź to: ${currentQuestion.answers[currentQuestion.correctAnswer]}` : 'hm no nie wiem...'
    })

})





}

module.exports = gameRoutes;