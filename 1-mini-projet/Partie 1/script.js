const questions = [
    {
        question: "Que signifie CPU ?",
        choices: ["Unité Centrale de Traitement", "Unité Personnelle d’Ordinateur", "Unité Périphérique Centrale", "Unité de Traitement du Cœur"],
        correctAnswer: "Unité Centrale de Traitement"
    },
    {
        question: "Lequel des éléments suivants n'est PAS un système d'exploitation ?",
        choices: ["Windows", "Linux", "Python", "macOS"],
        correctAnswer: "Python"
    },
    {
        question: "Quelle est la fonction principale de la RAM dans un ordinateur ?",
        choices: ["Stocker des données à long terme", "Traiter les données graphiques", "Fournir un stockage temporaire pour les processus en cours", "Gérer la connexion Internet"],
        correctAnswer: "Fournir un stockage temporaire pour les processus en cours"
    },
    {
        question: "Quel langage de programmation est principalement utilisé pour le développement web côté client ?",
        choices: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Quelle unité mesure la vitesse d’un processeur ?",
        choices: ["Hertz (Hz)", "Octets (B)", "Bits par seconde (bps)", "Pixels"],
        correctAnswer: "Hertz (Hz)"
    },
    {
        question: "Quelle est la fonction principale d’un système d’exploitation ?",
        choices: ["Éditer des documents", "Gérer les ressources matérielles et logicielles", "Programmer des logiciels", "Exécuter exclusivement des jeux vidéo"],
        correctAnswer: "Gérer les ressources matérielles et logicielles"
    },
    {
        question: "Quel est le principal rôle d'un compilateur ?",
        choices: ["Convertir un langage de programmation en langage machine", "Exécuter un programme immédiatement", "Gérer la mémoire vive", "Traduire un programme en plusieurs langues"],
        correctAnswer: "Convertir un langage de programmation en langage machine"
    },
    {
        question: "Que signifie HTML ?",
        choices: ["HyperText Markup Language", "High Technology Modern Language", "Hyperlink and Text Management Language", "Home Tool Management Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Quelle est la structure de données qui fonctionne selon le principe FIFO (First In, First Out) ?",
        choices: ["Pile (Stack)", "File (Queue)", "Tableau (Array)", "Graphe (Graph)"],
        correctAnswer: "File (Queue)"
    },
    {
        question: "Quelle est la fonction principale d'un algorithme de tri ?",
        choices: ["Organiser des données dans un ordre spécifique", "Créer des graphiques", "Gérer les ressources matérielles et logicielles", "Traduire un programme en plusieurs langues"],
        correctAnswer: "Organiser des données dans un ordre spécifique"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
    startTimer();
}

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

function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correctAnswer) {
        score++;
    }
    clearInterval(timer);

    // Passer à la question suivante
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        timeLeft = 10;
        loadQuestion();
        startTimer();
    } else {
        showResult();
    }
}

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

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreElement.textContent = score;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut
}