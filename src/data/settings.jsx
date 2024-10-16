// settings.jsx
class Settings {
    brightness;
    volume;
    language;

    constructor(brightness, volume, language) {
        this.brightness = brightness;
        this.volume = volume;
        this.language = language;
    }

    // Метод для возврата данных в виде строки
    toFormattedString() {
        return `Настройки: Яркость: ${this.brightness}%, Громкость: ${this.volume}%, Язык: ${this.language}`;
    }

    toString() {
        return `Настройки: Яркость: ${this.brightness}%, Громкость: ${this.volume}%, Язык: ${this.language}`;
    }
}

export default Settings;
