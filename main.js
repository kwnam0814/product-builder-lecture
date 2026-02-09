const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numbersContainer.innerHTML = '';

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;

        let backgroundColor;
        if (number <= 10) {
            backgroundColor = '#f3b404'; // 노란색
        } else if (number <= 20) {
            backgroundColor = '#007aff'; // 파란색
        } else if (number <= 30) {
            backgroundColor = '#d92e2e'; // 빨간색
        } else if (number <= 40) {
            backgroundColor = '#585858'; // 회색
        } else {
            backgroundColor = '#28a745'; // 녹색
        }
        numberElement.style.backgroundColor = backgroundColor;

        numbersContainer.appendChild(numberElement);
    });
});
