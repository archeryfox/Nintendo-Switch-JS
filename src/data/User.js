// User.jsx
class User {
    #id; // Приватное поле id
    username;
    level;
    gamesPlayed;
    friends;
    image;
    firstname;
    lastname;
    phone;
    email;
    balans;

    constructor({ id, username, level, gamesPlayed, friends, image, firstname, lastname, phone, email, balans }) {
        this.#id = id; // Инициализация приватного поля id
        this.username = username;
        this.level = level;
        this.gamesPlayed = gamesPlayed;
        this.friends = friends;
        this.image = image; // Инициализация свойства image
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.balans = balans;
    }

    // Метод для получения идентификатора, если это необходимо
    getId() {
        return this.#id;
    }

    toFormattedString() {
        return JSON.stringify({
            // Не выводим id
            username: this.username,
            level: this.level,
            gamesPlayed: this.gamesPlayed,
            friends: this.friends,
            image: this.image,
            firstname: this.firstname,
            lastname: this.lastname,
            phone: this.phone,
            email: this.email,
            balans: this.balans,
        }, null, 2);
    }
}

export default User;
