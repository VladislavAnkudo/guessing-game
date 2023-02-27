class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.Number = Math.round((this.min + this.max) / 2)
        return this.Number  
    }

    lower() {
        this.max = this.Number
    }

    greater() {
        this.min = this.Number
    }
}

module.exports = GuessingGame;
