const Letter = require('./letter');

function Word(b) {
    this.word = b,
    this.letters = [],
    this.wordGuessed = false
    this.getLetters = function () {
        for (var i = 0; i < this.word.length; i++) {
            let newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    },
    this.checkWord = function () {
        if (this.letters.every(function (c) {
            return c.display === true;
        })) {
            this.wordGuessed = true;
            return true;
        }
    },
    this.checkLetter = function(d) {
        let returnValue = 0;
        this.letters.forEach(function (e) {
            if (e.letter === d) {
                e.display = true;
                returnValue++;
            }
        })
        return returnValue
    },
    this.renderWord = function () {
        let visible = '';
        this.letters.forEach(function (f) {
            let thisLetter = f.renderLetter();
            visible+= thisLetter;
        })
        return visible;
    }
}

module.exports = Word;