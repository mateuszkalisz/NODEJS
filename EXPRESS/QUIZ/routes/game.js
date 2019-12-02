function gameRoutes(app) {
let goodAnwers = 0;
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
    if(goodAnwers===questions.length){
        res.json({
            winner: 'true',
        });
    }
    else{
        const nextQuestion = questions[goodAnwers];
        const {question, answers} = nextQuestion;

        res.json({
            question,answers,
        });
    }

})

app.post('/answer/:index', (req,res)=>{
    const {index} = req.params;

    const currentQuestion = questions[goodAnwers];
    console.log(questions);


        res.json({
            correct: currentQuestion.correctAnswer === Number(index) ? true : false
        });

})

}

module.exports = gameRoutes;