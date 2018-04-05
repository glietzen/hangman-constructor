let Letter = function (a) {
    this.letter = a,
        this.display = false,
        this.renderLetter = function () {
            if (this.letter == ' ') {
                this.display = true;
                return '  ';
            } else if (this.display === false) {
                return ' _ ';
            } else {
                return this.letter;
            }
        }
}

module.exports = Letter;