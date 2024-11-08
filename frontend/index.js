import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const rules = await backend.getRules();
        displayRules(rules);
    } catch (error) {
        console.error('Error fetching rules:', error);
        document.getElementById('rules-container').innerHTML = '<p class="text-danger">Error loading rules. Please try again later.</p>';
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
});

function displayRules(rules) {
    const rulesContainer = document.getElementById('rules-container');
    rules.forEach((category, index) => {
        const categoryId = `category-${index}`;
        const categoryHtml = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading-${categoryId}">
                    <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#${categoryId}" aria-expanded="${index === 0}" aria-controls="${categoryId}">
                        ${category.category}
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
