// Определяем класс Console
class Console {
    // Объявляем публичные поля model, storage и firmwareVersion
    model;
    storage;
    firmwareVersion;

    // Конструктор для инициализации полей
    constructor(model, storage, firmwareVersion) {
        this.model = model;
        this.storage = storage;
        this.firmwareVersion = firmwareVersion;
    }

    // Метод для получения значения model
    Model() {
        return this.model;
    }

    // Метод для получения значения storage
    Storage() {
        return this.storage;
    }

    // Метод для получения значения firmwareVersion
    FirmwareVersion() {
        return this.firmwareVersion;
    }

    // Метод для получения строки с информацией о консоли
    toString() {
        return `Консоль: Модель ${this.model}, Память: ${this.storage}GB, Версия ПО: ${this.firmwareVersion}`;
    }
}

// Экспортируем класс Console для использования в других файлах
export default Console;
