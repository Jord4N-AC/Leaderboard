import './index.html';
import './style.css';

const refreshButton = document.getElementById('refresh-btn');
const scoresListEl = document.getElementById('score-list-container');

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

refreshButton.addEventListener('click', renderScores)
