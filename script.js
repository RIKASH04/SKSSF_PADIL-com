function calculateAverage() {
    const judge1 = parseFloat(document.getElementById('judge1').value);
    const judge2 = parseFloat(document.getElementById('judge2').value);
    const judge3 = parseFloat(document.getElementById('judge3').value);

    if (isNaN(judge1) || isNaN(judge2) || isNaN(judge3)) {
        alert('Please enter all scores.');
        return;
    }

    const average = (judge1 + judge2 + judge3) / 3;
    const resultDiv = document.getElementById('result');

    resultDiv.textContent = Average Score: ${average.toFixed(2)};
}