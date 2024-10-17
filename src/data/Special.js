// src/data/console.jsx
class Special {
    constructor(os, year, licens) {
        this.os = os;
        this.year = year;
        this.licens = licens;
    }

    getOs() {
        return this.os;
    }

    getYear() {
        return this.year;
    }

    getLicens() {
        return this.licens;
    }

    toString() {
        return `${this.licens}, ${this.year}, ${this.licens}`;
    }
}

export default Special;
