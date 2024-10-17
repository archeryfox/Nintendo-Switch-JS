
class Settings {
    brightness;
    volume;
    language;
    OpenGL;
    SuperSound;

    constructor(brightness, volume, language, SuperSound, OpenGL) {
        this.brightness = brightness;
        this.volume = volume;
        this.language = language;
        this.OpenGL = OpenGL;
        this.SuperSound = SuperSound;
    }

    toFormattedString() {
        return `Настройки: Яркость: ${this.brightness}%, Громкость: ${this.volume}%, Язык: ${this.language}, Графика: ${this.OpenGL}, СуперЗвук: ${this.SuperSound}`;
    }

    toString() {
        return `Настройки: Яркость: ${this.brightness}%, Громкость: ${this.volume}%, Язык: ${this.language}, Графика: ${this.OpenGL}, СуперЗвук: ${this.SuperSound}`;
    }
}

export default Settings;
