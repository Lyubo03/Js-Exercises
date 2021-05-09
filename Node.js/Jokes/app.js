//to install something globally you need to use -g flag

const jokes = require('give-me-a-joke');
const colors = require('colors');

jokes.getRandomCNJoke(function(joke) {
    console.log(joke.blue);
})