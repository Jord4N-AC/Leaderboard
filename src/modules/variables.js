export const refreshButton = document.getElementById('refresh-btn');
export const scoresListEl = document.getElementById('score-list-container');
export const nameInput = document.getElementById('name-input');
export const scoreInput = document.getElementById('score-input');
export const formEl = document.getElementById('add-form');
export const formInputs = document.querySelectorAll('input[required]');
export const submitBtn = document.getElementById('submit-btn');

const gameId = '0w1DIhTP3YxPLlnbxiIx';
export const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
