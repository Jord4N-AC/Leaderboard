import getScores from './get-data.js';
import { scoresListEl, URL } from './variables.js';


const renderScores = async () => {
    const scoresObj = await getScores(URL);
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
    });
};

export default renderScores;
