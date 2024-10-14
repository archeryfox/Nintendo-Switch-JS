class Settings {
    #brightness;
    #volume;
    #language;

    constructor(brightness, volume, language) {
        this.#brightness = brightness;
        this.#volume = volume;
        this.#language = language;
    }

    getBrightness() {
        return this.#brightness;
    }

    getVolume() {
        return this.#volume;
    }

    getLanguage() {
        return this.#language;
    }

    toString() {
        return `Settings: Brightness: ${this.#brightness}%, Volume: ${this.#volume}%, Language: ${this.#language}`;
    }
}

export default Settings;