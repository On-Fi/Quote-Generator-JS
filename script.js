// The Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. ― Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. ― Steve Jobs",
    "Sometimes life is going to hit you in the head with a brick. Don`t lose faith. ― Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. ― Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. ― Winston Churchill",
    "Success consists of going from failure to failure without loss of enthusiasm. ― Winston Churchill",
    "",
    "",
    "",
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
    "Wherever you go, go with all your heart. ― Confucius",
    "The more we value things outside our control, the less control we have. ― Marcus Aurelius",
    "When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love. ― Marcus Aurelius",
    "Waste no more time arguing about what a good man should be. Be one. ― Marcus Aurelius",
    "I cannot escape death, but at least I can escape the fear of it. ― Marcus Aurelius",
    "As soon as you trust yourself, you will know how to live. ― Johann Wolfgang von Goethe",
    "A man sees in the world what he carries in his heart. ― Johann Wolfgang von Goethe",
    "Life belongs to the living, and he who lives must be prepared for changes. ― Johann Wolfgang von Goethe",
    "Enjoy when you can, and endure when you must. ― Johann Wolfgang von Goethe",
    "We must always change, renew, rejuvenate ourselves; otherwise, we harden. ― Johann Wolfgang von Goethe",
    "Man minus the Machine is a slave; Man plus the Machine is a freeman. ― Henry Ford",
    "Every success is the mother of countless others. ― Henry Ford",
    "Failure is simply the opportunity to begin again, this time more intelligently. ― Henry Ford",
    "If you think you can do a thing or think you can't do a thing, you're right. ― Henry Ford",
    "Nothing is particularly hard if you divide it into small jobs. ― Henry Ford",
    "While we wait for life, life passes. ― Seneca",
    "Life is long, if you know how to use it. ― Seneca",
    "We suffer more often in imagination than in reality. ― Seneca",
    "Hang on to your youthful enthusiasms, you will be able to use them better when you are older. ― Seneca",
    "It is a rough road that leads to the heights of greatness. ― Seneca",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
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
