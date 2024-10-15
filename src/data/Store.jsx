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

export default Store;