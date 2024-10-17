class Store {
    gamesAvailable;
    currency;

    constructor(gamesAvailable, currency) {
        this.gamesAvailable = gamesAvailable;
        this.currency = currency;
    }

    getGamesAvailable() {
        return this.gamesAvailable;
    }

    getCurrency() {
        return this.currency;
    }

    toString() {
        return `Игры: ${this.gamesAvailable.length} игры доступны, Источник: ${this.currency}`;
    }
}

class Games extends Store {
    title;
    genre;
    rating;

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


export default Store;