function appendToResult(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
}

function clearResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = '';
}

function calculate() {
    const resultInput = document.getElementById('result');
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}
