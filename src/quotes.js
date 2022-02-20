const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs",
  },
  {
    quote:
      "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill",
  },
  {
    quote: "What is not started will never get finished.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "All limitations are self-imposed.",
    author: "Oliver Wendell Holmes",
  },
  {
    quote: "Keep your face to the sunshine and you cannot see the shadow.",
    author: "Helen Keller",
  },
  {
    quote: "Happiness makes up in height for what it lacks in length.",
    author: "Robert Frost",
  },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
