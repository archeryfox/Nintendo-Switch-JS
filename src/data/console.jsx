class Console {
    model;
    storage;
    firmwareVersion;

    constructor(model, storage, firmwareVersion) {
        this.model = model;
        this.storage = storage;
        this.firmwareVersion = firmwareVersion;
    }

    getModel() {
        return this.model;
    }

    getStorage() {
        return this.storage;
    }

    getFirmwareVersion() {
        return this.firmwareVersion;
    }

    toString() {
        return `Консоль: Модель ${this.model}, Память: ${this.storage}GB, Версия ПО: ${this.firmwareVersion}`;
    }
}

export default Console;