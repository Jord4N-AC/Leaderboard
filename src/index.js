import './index.html';
import './style.css';

const refreshButton = document.getElementById('refresh-btn');
const scoresListEl = document.getElementById('score-list-container');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const formEl = document.getElementById('add-form');
const formInputs = document.querySelectorAll('input[required]');
const submitBtn = document.getElementById('submit-btn');

const gameId = '0w1DIhTP3YxPLlnbxiIx';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const getScores = async (url = URL) => {
    const scores = await fetch(url);
    const scoresJson = await scores.json();
    
    console.log(scoresJson);
    return scoresJson;
};

const renderScores = async () => {
    const scoresObj = await getScores();
    const scoresArray = scoresObj.result;

    scoresArray.forEach((score) => {
        const scoreName = score.user;
        const scoreNum = score.score;
        const scoreHTML = `
            <div class="user-info">
                <div class="name-wrapper">                            
                    <p class="user-name">${scoreName}</p>
                    <span class="divider-colon">:&nbsp;</span>
                </div>
                <p class="user-score">${scoreNum}</p>
            </div>`;

        scoresListEl.insertAdjacentHTML('beforeend', scoreHTML);
        console.log('scoresArray.forEach() excutes');
    });
    console.log('renderScores() excutes');
};

const saveScore = (url = URL) => {
    const nameValue = nameInput.value;
    const scoreValue = scoreInput.value;
    const newScore = { user: nameValue, score: scoreValue, };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newScore),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    });
    console.log('saveScore() executed');
};

const trimInput = (input) => { input.value = input.value.trim().replace(/\s+/g, ' ') }
const trimAllInputs = (inputsGroup) => { inputsGroup.forEach(input => trimInput(input)) }
const clearInput = (input) => { input.value = '' }


// Event Listeners
refreshButton.addEventListener('click', renderScores)


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    trimAllInputs(formInputs);
    
    saveScore();
    formInputs.forEach((input) => { clearInput(input); });
    console.log('formEl.(submit) executed');
});

formInputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            trimInput(e.target)
        }
    })
})

submitBtn.addEventListener('click', () => trimAllInputs(formInputs))

renderScores();
