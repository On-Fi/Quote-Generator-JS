// The Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. ― Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. ― Steve Jobs",
    "Sometimes life is going to hit you in the head with a brick. Don`t lose faith. ― Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. ― Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. ― Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. ― Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. ― Franklin D. Roosevelt",
    "If you're going to try, go all the way. Otherwise, don't even start. - Charles Bukowski",
    "You have to die a few times before you can really live. ― Charles Bukowski",
    "what matters most is how well you walk through the fire. ― Charles Bukowski",
    "Find what you love and let it kill you. ― Charles Bukowski",
    "Sometimes you just have to pee in the sink.n― Charles Bukowski",
    "Without music, life would be a mistake. ― Friedrich Nietzsche",
    "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.” ― Friedrich Nietzsche",
    "He who has a why to live for can bear almost any how. ― Friedrich Nietzsche",
    "That which is done out of love is always beyond good and evil. ― Friedrich Nietzsche ",
    "Amor Fati – “Love Your Fate”, which is in fact your life. ― Friedrich Nietzsche",
    "Life is really simple, but we insist on making it complicated. ― Confucius",
    "I hear and I forget. I see and I remember. I do and I understand. ― Confucius",
    "Wherever you go, go with all your heart. ― Confucius"
];

// The Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote;
}

// The Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// The Event listeners
document.getElementById('generateBtn').addEventListener('click', generateQuote);
document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);
