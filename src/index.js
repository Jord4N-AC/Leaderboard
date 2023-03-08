import './index.html';
import './style.css';

const refreshButton = document.getElementById('refresh-btn');
const scoresListEl = document.getElementById('score-list-container');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const formEl = document.getElementById('add-form');

const gameId = '0w1DIhTP3YxPLlnbxiIx'
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const getScores = async (url = URL) => {
    const scores = await fetch(url)
    const scoresJson = await scores.json()
    
    console.log(json)
    return scoresJson
}

const renderScores = () => {
    const scoresObj = getScores()
    const scoresArray = scoresObj.result

    scoresArray.forEach(score => {
        let scoreName = score.user
        let scoreNum = score.score
        let scoreHTML = `
            <div class="user-info">
                <div class="name-wrapper">                            
                    <p class="user-name">${scoreName}</p>
                    <span class="divider-colon">:&nbsp;</span>
                </div>
                <p class="user-score">${scoreNum}</p>
            </div>`

        scoresListEl.insertAdjacentHTML('beforeend', scoreHTML)
    });
}

const saveScore = (url = URL) => {
    const nameValue = nameInput.value
    const scoreValue = nameInput.value

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(
            {
                "user": nameValue,
                "score": scoreValue
            }
        ),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })
}

refreshButton.addEventListener('click', renderScores)
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    saveScore()
})
