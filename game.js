// Game state
let score = 0;
let autoClickers = 0;
let autoClickerCost = 10;

// DOM elements
const scoreElement = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const autoClickerElement = document.getElementById('auto-clicker');
const autoClickerCostElement = document.getElementById('auto-clicker-cost');
const autoClickerOwnedElement = document.getElementById('auto-clicker-owned');

// Click handler
clickerButton.addEventListener('click', () => {
    score++;
    updateScore();
});

// Auto-clicker purchase handler
document.querySelector('#auto-clicker .buy-btn').addEventListener('click', () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.floor(autoClickerCost * 1.5);
        updateScore();
        autoClickerCostElement.textContent = autoClickerCost;
        autoClickerOwnedElement.textContent = autoClickers;
    }
});

// Auto-clicker functionality
setInterval(() => {
    score += autoClickers;
    updateScore();
}, 1000);

// Update score display
function updateScore() {
    scoreElement.textContent = score;
}

// Initialize
updateScore();
