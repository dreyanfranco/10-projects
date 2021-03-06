const quizData = [
    {
        question: 'How old is Drey?',
        a: '10',
        b: '17',
        c: '28',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming languague in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the last player to win a golden boot?',
        a: 'Leo Messi',
        b: 'Luka Modric',
        c: 'Cristiano Ronaldo',
        d: 'Zlatan Ibrahimovic',
        correct: 'b' 
    }, {
        question: 'What is the capital of Spain?',
        a: 'Madrid',
        b: 'Maracaibo',
        c: 'Roma',
        d: 'Barcelona',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
    let answer = undefined;

    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions.</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});


