// Определяем класс User
class User {
    // Объявляем поля для имени пользователя, уровня и количества сыгранных игр
    username;
    level;
    gamesPlayed;

    // Конструктор для инициализации полей
    constructor(username, level, gamesPlayed) {
        this.username = username;
        this.level = level;
        this.gamesPlayed = gamesPlayed;
    }

    // Метод для получения значения поля username
    Username() {
        return this.username;
    }

    // Метод для получения значения поля level
    Level() {
        return this.level;
    }

    // Метод для получения значения поля gamesPlayed
    GamesPlayed() {
        return this.gamesPlayed;
    }

    // Метод для получения строки с информацией о пользователе
    toString() {
        return `Пользователь: ${this.username}, Уровень: ${this.level}, Игры: ${this.gamesPlayed}`;
    }
}

// Экспортируем класс User для использования в других файлах
export default User;
