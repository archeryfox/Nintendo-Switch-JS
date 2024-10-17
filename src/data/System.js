// src/data/System.jsx
import Console from "./Console"; // Импорт базового класса

class System extends Console {
    constructor(model, storage, firmwareVersion, fps, Hz, isHDR, remotePlay, dolbyAtmosSound) {
        super(model, storage, firmwareVersion);
        this.fps = fps;
        this.Hz = Hz;
        this.isHDR = isHDR;
        this.remotePlay = remotePlay;
        this.dolbyAtmosSound = dolbyAtmosSound;
    }

    toString() {
        return `Система: ${super.toString()}, FPS: ${this.fps}, Частота: ${this.Hz}Hz, HDR: ${this.isHDR ? 'Да' : 'Нет'}, Remote Play: ${this.remotePlay ? 'Да' : 'Нет'}, Dolby Atmos: ${this.dolbyAtmosSound ? 'Да' : 'Нет'}`;
    }
}

export default System;
