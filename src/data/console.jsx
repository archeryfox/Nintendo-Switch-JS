class Console {
    #model;
    #storage;
    #firmwareVersion;

    constructor(model, storage, firmwareVersion) {
        this.#model = model;
        this.#storage = storage;
        this.#firmwareVersion = firmwareVersion;
    }

    getModel() {
        return this.#model;
    }

    getStorage() {
        return this.#storage;
    }

    getFirmwareVersion() {
        return this.#firmwareVersion;
    }

    toString() {
        return `Console: Model ${this.#model}, Storage: ${this.#storage}GB, Firmware Version: ${this.#firmwareVersion}`;
    }
}

export default Console;