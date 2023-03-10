const trimInput = (input) => { input.value = input.value.trim().replace(/\s+/g, ' '); };
const trimAllInputs = (inputsGroup) => { inputsGroup.forEach((input) => trimInput(input)); };
const clearInput = (input) => { input.value = ''; };
const clearAllInputs = (inputsGroup) => inputsGroup.forEach((input) => clearInput(input));

export { trimInput, trimAllInputs, clearAllInputs };
