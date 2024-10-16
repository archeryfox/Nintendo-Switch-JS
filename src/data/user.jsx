// User.jsx
class User {
    username;
    level;
    gamesPlayed;
    friends;
    image;

    constructor({ username, level, gamesPlayed, friends, image }) {
        this.username = username;
        this.level = level;
        this.gamesPlayed = gamesPlayed;
        this.friends = friends;
        this.image = image; // Инициализация свойства image
    }

    toFormattedString() {
        return JSON.stringify({
            username: this.username,
            level: this.level,
            gamesPlayed: this.gamesPlayed,
            friends: this.friends,
            image: this.image,
        }, null, 2);
    }
}

export default User;
