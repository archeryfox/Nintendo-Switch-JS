class Game {
    title;
    genre;
    rating;
    hours;
    realis;

    constructor(title, genre, rating, hours, realis) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.hours = hours;
        this.realis = realis;
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

    getHours() {
        return this.hours;
    }

    Relis(){
        return this.realis;
    }

    toString() {
        return `${this.title} ${this.genre} ${this.rating} ${this.hours} ${this.realis}`;
    }
}

export default Game;