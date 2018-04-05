const inquirer = require('inquirer');
const isLetter = require('is-letter');
const Word = require('./word');

let newWord = {
    wordlist: ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming']
};

let wordBank = newWord.wordlist;
let remainingGuesses = 10;
let lettersGuessed = [];
let counter = 0;
let currentWord;

function startGame() {
    console.log(`Let's play US geography hangman!`);
    if (lettersGuessed.length > 0) {
        lettersGuessed = [];
    }
    inquirer.prompt([{
        name: 'play',
        type: 'confirm',
        message: 'Do you want to play?'
    }]).then(function(ans) {
        if (ans.play) {
            newGame();
        } else {
            console.log(`Then why did you open the app?`);
        }
    })
}