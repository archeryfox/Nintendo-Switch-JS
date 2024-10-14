class Store {
    #gamesAvailable;
    #currency;

    constructor(gamesAvailable, currency) {
        this.#gamesAvailable = gamesAvailable;
        this.#currency = currency;
    }

    getGamesAvailable() {
        return this.#gamesAvailable;
    }

    getCurrency() {
        return this.#currency;
    }

    toString() {
        return `Store: ${this.#gamesAvailable.length} games available, Currency: ${this.#currency}`;
    }
}

export default Store;