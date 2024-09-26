const questions = [
    {
        question: "which is the big animal in Africa ?",
        answers: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: false },
            { text: "elephant", correct: true },
            { text: "girafe", correct: false },    
        ]
    },
    {
        question: "which is the big city in Africa ?",
        answers: [
            { text: "brazzaville", correct: false },
            { text: "marocco", correct: false },
            { text: "libreville", correct: false },
            { text: "kinshasha", correct: true },    
        ]
    },
    {
        question: "which is the small country in Africa ?",
        answers: [
            { text: "congo", correct: false },
            { text: "reunion island", correct: true },
            { text: "namibia", correct: false },
            { text: "kenya", correct: false },    
        ]
    },
    {
        question: "which is the device of congo brazzaville ?",
        answers: [
            { text: "cfa", correct: true },
            { text: "euro", correct: false },
            { text: "dollar", correct: false },
            { text: "dinar", correct: false },    
        ]
    },
    {
        question: "who is the best soccer player of Africa ?",
        answers: [
            { text: "Eto'o", correct: true },
            { text: "Drogba", correct: false },
            { text: "Ayu", correct: false },
            { text: "Dembele", correct: false },    
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nexButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nexButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumero = currentQuestionIndex + 1
    questionElement.innerHTML = questionNumero + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)

        //answers clickable
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    nexButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function selectAnswer(e) {
    const selectBtn = e.target 
    const isCorrect = selectBtn.dataset.correct === "true"

    if (isCorrect) {
        selectBtn.classList.add("correct")
        score ++
    }
    else {
         selectBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nexButton.style.display = "block"
}

function showScore() {
    resetState()
    questionElement.innerHTML = "Votre scrore " + score + " / " + questions.length + "!"
    nexButton.innerHTML = "play again"
    nexButton.style.display = "block"
}
function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        resetState()
        showQuestion()
    } else {
        showScore()
    }
}


nexButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    }
    else {
        startQuiz()
    }
})


startQuiz()
