import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const rules = await backend.getRules();
        const quizQuestions = await backend.getQuizQuestions();
        displayRules(rules);
        displayQuiz(quizQuestions);
        await displayFunFact();
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('rules-container').innerHTML = '<p class="text-danger">Error loading content. Please try again later.</p>';
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
});

function displayRules(rules) {
    const rulesContainer = document.getElementById('rules-container');
    rules.forEach((category, index) => {
        const categoryId = `category-${index}`;
        const categoryHtml = `
            <div class="accordion-item animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
                <h2 class="accordion-header" id="heading-${categoryId}">
                    <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#${categoryId}" aria-expanded="${index === 0}" aria-controls="${categoryId}">
                        ${category.icon} ${category.category}
                    </button>
                </h2>
                <div id="${categoryId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading-${categoryId}" data-bs-parent="#rules-container">
                    <div class="accordion-body">
                        <ul>
                            ${category.rules.map(rule => `<li>${rule}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        rulesContainer.innerHTML += categoryHtml;
    });
}

function displayQuiz(questions) {
    const quizContainer = document.getElementById('quiz-questions');
    questions.forEach((question, index) => {
        const questionHtml = `
            <div class="mb-3">
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                ${question.options.map((option, optionIndex) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${index}" id="q${index}o${optionIndex}" value="${optionIndex}">
                        <label class="form-check-label" for="q${index}o${optionIndex}">
                            ${option}
                        </label>
                    </div>
                `).join('')}
            </div>
        `;
        quizContainer.innerHTML += questionHtml;
    });

    document.getElementById('submit-quiz').addEventListener('click', () => checkQuizAnswers(questions));
}

function checkQuizAnswers(questions) {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === question.correctAnswer) {
            score++;
        }
    });

    const resultsContainer = document.getElementById('quiz-results');
    resultsContainer.innerHTML = `
        <h3>Your Score: ${score}/${questions.length}</h3>
        <p>${score === questions.length ? 'Perfect score! You\'re a flag football expert!' : 'Great effort! Keep learning and try again!'}</p>
    `;
    resultsContainer.classList.add('animate__animated', 'animate__fadeIn');
}

async function displayFunFact() {
    const funFactElement = document.getElementById('fun-fact');
    const newFunFactButton = document.getElementById('new-fun-fact');

    async function fetchAndDisplayFunFact() {
        try {
            const funFact = await backend.getRandomFunFact();
            funFactElement.textContent = funFact;
            funFactElement.classList.remove('animate__fadeIn');
            void funFactElement.offsetWidth; // Trigger reflow
            funFactElement.classList.add('animate__fadeIn');
        } catch (error) {
            console.error('Error fetching fun fact:', error);
            funFactElement.textContent = 'Oops! Could not fetch a fun fact. Try again later!';
        }
    }

    await fetchAndDisplayFunFact();
    newFunFactButton.addEventListener('click', fetchAndDisplayFunFact);
}
