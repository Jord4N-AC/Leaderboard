import './index.html';
import './style.css';

import { refreshButton, formEl, formInputs, submitBtn } from './modules/variables.js';
import renderScores from './modules/render-data.js';
import saveScore from './modules/save-data.js';
import { trimInput, trimAllInputs, clearAllInputs } from './modules/trim-clear-inputs.js';

// Event Listeners
refreshButton.addEventListener('click', renderScores);

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    trimAllInputs(formInputs);
    saveScore();
    clearAllInputs(formInputs);
});

formInputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            trimInput(e.target);
        }
    });
});

submitBtn.addEventListener('click', () => trimAllInputs(formInputs));

renderScores();
