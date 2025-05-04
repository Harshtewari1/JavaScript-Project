let startBtn = document.querySelector("#start-btn");
let startScreen = document.querySelector("#start-screen");
let quizScreen = document.querySelector("#quiz-screen");
let nextBtN = document.querySelector("#next-btn");
let quesText = document.querySelector("#question-text");
let timer = document.querySelector("#timer");
let optList = document.querySelector("#option-list");
let opt = document.querySelector("#option");
let resultScreen = document.querySelector("#result-screen");
let tryAgain = document.querySelector("#restart-btn");
let fullScore = document.querySelector("#score")


let score = 0;
let currentQuestion = 0;
let timeleft = 15;
let timerInterval;

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Leveler"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Digital Ordinance Model",
            "Desktop Object Management"
        ],
        correct: "Document Object Model"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "Number",
            "Boolean",
            "Float",
            "String"
        ],
        correct: "Float"
    },
    {
        question: "Which method is used to select an element in JavaScript?",
        options: [
            "document.select()",
            "document.getElement()",
            "document.getElementById()",
            "document.queryTag()"
        ],
        correct: "document.getElementById()"
    }
];


startBtn.addEventListener("click", function () {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    
    ques();
    
})


function ques() {
    quesText.innerHTML = questions[currentQuestion].question;
    optList.innerHTML = "";

    const oldOptions = document.querySelectorAll(".option");
    oldOptions.forEach(option => {
        option.classList.remove("correct", "incorrect");
        option.style.pointerEvents = "auto";
    });

    questions[currentQuestion].options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.classList.add("option");

        li.addEventListener("click", function () {
            checkAnswer(li, option)
            clearInterval(timerInterval);
        })

        optList.appendChild(li);
    });

    startTimer();
    
}

function checkAnswer(selectedOption, selectedText) {
    const correctAns = questions[currentQuestion].correct;

    const allOption = document.querySelectorAll(".option");

    if (selectedText === correctAns) {
        selectedOption.classList.add("correct");
        score++;
    } else {
        selectedOption.classList.add("incorrect");

        allOption.forEach(option => {
            if (option.innerText === correctAns) {
                option.classList.add("correct");
            }
        });
    }
    
    setTimeout(() => {
        allOption.forEach(option => {
            option.style.pointerEvents = "none";
        });
        nextBtN.classList.remove("hidden")
    }, 100); 
}


nextBtN.addEventListener("click", function () {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        ques();
        nextBtN.classList.add("hidden");
        clearInterval(timerInterval); 
    } else {
        showScore();
        clearInterval(timerInterval); 
    }
})

function showScore() {
    quizScreen.classList.add("hidden");       
    resultScreen.classList.remove("hidden"); 
    fullScore.innerText = score;              
}

tryAgain.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    ques();
})


function startTimer() {
    timeleft = 15;
    timer.innerHTML = timeleft;

    timerInterval = setInterval(() => {
        timeleft--;
        timer.innerHTML = timeleft;

        if (timeleft == 0) {
            clearInterval(timerInterval);
            autoLock();
        }
    },1000)
}

function autoLock() {
    const correctAns = questions[currentQuestion].correct;
    const allOption = document.querySelectorAll(".option");
    allOption.forEach(option => {
        if (option.innerText === correctAns) {
            option.classList.add("correct");
        }
        option.style.pointerEvents = "none";
    });
    nextBtN.classList.remove("hidden");
}






    





