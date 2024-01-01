// The Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "If you're going to try, go all the way. Otherwise, don't even start. - Charles Bukowski",
    "You have to die a few times before you can really live. - Charles Bukowski",
    "",
    "",

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
