const quotes = [
    {
        quote: "To live is to suffer, to survive is to find some meaning in the suffering.",
        author: "Friedrich Nietzsche",   
    },
    {
        quote: "In the end, we only regret the chances we didn't take.",
        author: "Lewis Carroll",   
    },
    {
        quote: "the soul would have no rainbow had the eyes no tears.",
        author: "존 반스 체이니",   
    },
    {
        quote: "Laugh, and the world laughs with you Weep, and you weep alone",
        author: "엘라 윌콕스",   
    },
    {
        quote: "Don't hate the player; hate the game.",
        author: "Ice - T",   
    },
    {
        quote: "Something filled up my heart with nothing, someone told me not to cry. Now that I'm older, my heart is colder, I can see that it's a lie.",
        author: "Arcade Fire",   
    },
    {
        quote: "Do not stand at my grave and weep. I am not there, I did not die.",
        author: "Marry Frie",   
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",   
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "헬렌 켈러",   
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
        author: "Bruce Lee",   
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;