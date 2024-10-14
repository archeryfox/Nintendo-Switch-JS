class Game {
    #title;
    #genre;
    #rating;

    constructor(title, genre, rating) {
        this.#title = title;
        this.#genre = genre;
        this.#rating = rating;
    }

    getTitle() {
        return this.#title;
    }

    getGenre() {
        return this.#genre;
    }

    getRating() {
        return this.#rating;
    }

    toString() {
        return `Game: ${this.#title} (Genre: ${this.#genre}, Rating: ${this.#rating}/10)`;
    }
}

export default Game;