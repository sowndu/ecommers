const quiz = [
    {
        question: "What is the correct command to create a new React project?",
        options: ["npm create-react-app", "npm create-react-app myReactApp", "npx create-react-apps", "npx create-react-app myReactApp"],
        correct: 3
    },
    {
        question:"What command is used to start the React local development server?",
        options: ["npm start ", "npm run dev ", "npm build ", "npm serve"],
        correct: 0
    },
    {
        question: "What is the default local host port that a React development server uses?",
        options: ["3000  ", "8080  ", "3500  ", "5000  "],
        correct: 0
    },
    {
        question: "To develop and run React code, Node.js is required.",
        options: ["True    ", "False  "],
        correct: 0
    },
    {
        question: "Which operator can be used to conditionally render a React component?",
        options: ["??    ", "||  ", "&&  ", "::  "],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;


// Initialize the quiz
function loadQuestion() {
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('next').style.display = 'none';
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    questionEl.textContent = quiz[currentQuestion].question;
    optionsEl.innerHTML = '';
    
    quiz[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsEl.appendChild(button);
    });

   
}

// Handle answer selection
let selectedAnswer = null;

function selectAnswer(index) {
    selectedAnswer = index;
}

// Submit the selected answer
function submitAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }
 
    
    const feedbackEl = document.getElementById('feedback');
    if (selectedAnswer === quiz[currentQuestion].correct) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = `Incorrect! The correct answer is: ${quiz[currentQuestion].options[quiz[currentQuestion].correct]}`;
        feedbackEl.style.color = "red";
    }
    document.getElementById('next').style.display = 'inline-block';
}

// Load the next question
function nextQuestion() {
    selectedAnswer = null;
    currentQuestion++;
    if (currentQuestion >= quiz.length) {
        displayScore();
    } else {
        loadQuestion();
    }
}

// Display the user's score
function displayScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').textContent = `Your final score is: ${score}/${quiz.length}`;
}


// Start the quiz
loadQuestion();
