const configScreen = document.getElementById('config-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const quizConfigForm = document.getElementById('quiz-config');
const categorySelect = document.getElementById('category');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

// Charger les catégories depuis l'API
async function loadCategories() {
    const response = await fetch('https://opentdb.com/api_category.php');
    const data = await response.json();
    data.trivia_categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Générer le quiz
quizConfigForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const numQuestions = document.getElementById('num-questions').value;
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const type = document.getElementById('type').value;

    const apiUrl = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.results.map(q => ({
        question: q.question,
        choices: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
        correctAnswer: q.correct_answer
    }));

    configScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
    startTimer();
});

// Charger une question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(choice));
        choicesElement.appendChild(button);
    });
}

// Sélectionner une réponse
function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correctAnswer) {
        score++;
    }
    clearInterval(timer);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        timeLeft = 10;
        loadQuestion();
        startTimer();
    } else {
        showResult();
    }
}

// Démarrer le timer
function startTimer() {
    timerElement.textContent = `Temps restant : ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Temps restant : ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                timeLeft = 10;
                loadQuestion();
                startTimer();
            } else {
                showResult();
            }
        }
    }, 1000);
}

// Afficher les résultats
function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Charger les catégories au démarrage
loadCategories();