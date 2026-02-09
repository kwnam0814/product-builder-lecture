const generateBtn = document.getElementById('generate');
const recommendationContainer = document.getElementById('recommendation');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const foodRecommendationsKO = [
    "비빔밥", "불고기", "김치찌개", "된장찌개", "삼겹살", "치킨", "피자", "파스타",
    "초밥", "떡볶이", "라면", "짜장면", "탕수육", "족발", "보쌈", "갈비찜",
    "해물찜", "순대국", "감자탕", "부대찌개", "칼국수", "돈까스", "햄버거", "샌드위치",
    "샐러드", "스테이크", "카레", "팟타이", "쌀국수", "마라탕", "양꼬치", "찜닭"
];

const foodRecommendationsEN = [
    "Bibimbap", "Bulgogi", "Kimchi Stew", "Doenjang Stew", "Samgyeopsal (Pork Belly)", 
    "Fried Chicken", "Pizza", "Pasta", "Sushi", "Tteokbokki", "Ramyun", "Jajangmyeon", 
    "Sweet and Sour Pork", "Jokbal (Pig's Trotters)", "Bossam (Boiled Pork)", "Galbijjim",
    "Braised Seafood", "Sundae Soup", "Gamjatang (Pork Bone Soup)", "Budae Jjigae", 
    "Kalguksu (Noodle Soup)", "Tonkatsu", "Hamburger", "Sandwich", "Salad", "Steak", 
    "Curry", "Pad Thai", "Pho", "Malatang", "Lamb Skewers", "Andong Jjimdak"
];

// Determine language
const lang = document.documentElement.lang; // 'ko' or 'en'
const foodRecommendations = lang === 'en' ? foodRecommendationsEN : foodRecommendationsKO;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = lang === 'en' ? 'Light Mode' : '라이트 모드';
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = lang === 'en' ? 'Dark Mode' : '다크 모드';
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
    const randomIndex = Math.floor(Math.random() * foodRecommendations.length);
    const recommendation = foodRecommendations[randomIndex];
    recommendationContainer.textContent = recommendation;
});