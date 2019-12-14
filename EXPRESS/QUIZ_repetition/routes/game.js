function gameRoute(app){
    let goodAnswers = 0;
    let gameIsOver = false;
    let callToAFriend =false;
    let halfToHalf =false;
    let questionToACrowd =false;

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
            })
        }
        if(gameIsOver){
            res.json({
                loser: 'true',
            })
        }
        else{
            const nextQuestion = questions[goodAnswers];
            const {question, answers} = nextQuestion;

            res.json({
                question, answers, goodAnswers,
            })
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
            gameIsOver = true;
        }

        if(gameIsOver){
            res.json({
                loser: 'true',
            })
        }

        res.json({
            correct: isGoodAnswer,
            goodAnswers,
        })
    })

}

module.exports = gameRoute;