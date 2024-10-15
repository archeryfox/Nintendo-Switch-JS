class Game {
    title;
    genre;
    rating;

    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    getTitle() {
        return this.title;
    }

    getGenre() {
        return this.genre;
    }

    getRating() {
        return this.rating;
    }

    toString() {
        return `Игра: ${this.title} (Жанр: ${this.genre}, Рейтинг: ${this.rating}/10)`;
    }
}

export default Game;