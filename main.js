const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light mode if no preference is saved
        setTheme('light');
    }
});

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

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
