import getScores from './get-data.js';
import { scoresListEl, URL } from './variables.js';

const renderScore = ({ user, score }) => {
  const scoreHTML = `
        <div class="user-info">
            <div class="name-wrapper">
                <p class="user-name">${user}</p>
                <span class="divider-colon">:&nbsp;</span>
            </div>
            <p class="user-score">${score}</p>
        </div>`;

  scoresListEl.insertAdjacentHTML('beforeend', scoreHTML);
};

const renderAllScores = (arrayData) => {
  arrayData.forEach((score) => renderScore(score));
};

const getAndRenderAllScores = async () => {
  const scoresObj = await getScores(URL);
  const scoresArray = scoresObj.result;

  scoresListEl.innerHTML = '';
  renderAllScores(scoresArray);
};

export default getAndRenderAllScores;
