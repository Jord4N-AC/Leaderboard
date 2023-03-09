import { nameInput, scoreInput, URL } from './variables.js';

const saveScore = (url = URL) => {
    const nameValue = nameInput.value;
    const scoreValue = scoreInput.value;
    const newScore = { user: nameValue, score: scoreValue, };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newScore),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    });
};

export default saveScore;
