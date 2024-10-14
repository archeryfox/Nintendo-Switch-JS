class User {
    #username;
    #level;
    #gamesPlayed;

    constructor(username, level, gamesPlayed) {
        this.#username = username;
        this.#level = level;
        this.#gamesPlayed = gamesPlayed;
    }

    getUsername() {
        return this.#username;
    }

    getLevel() {
        return this.#level;
    }

    getGamesPlayed() {
        return this.#gamesPlayed;
    }

    toString() {
        return `User: ${this.#username}, Level: ${this.#level}, Games Played: ${this.#gamesPlayed}`;
    }
}

export default User;