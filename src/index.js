import './index.html';
import './style.css';

const refreshButton = document.getElementById('refresh-btn');

const gameId = '0w1DIhTP3YxPLlnbxiIx'
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const getScores = async (url = URL) => {
    const scores = await fetch(url)
    const scoresJson = await scores.json()
    
    console.log(json)
}

refreshButton.addEventListener('click', getScores)
