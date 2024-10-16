import React, { useState } from "react";

// Компонент для отображения настроек
function SettingsInfo({ settings }) {
    const [volume, setVolume] = useState(settings.volume);
    const [brightness, setBrightness] = useState(settings.brightness);

    // Обработчики изменения громкости и яркости
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handleBrightnessChange = (event) => {
        setBrightness(event.target.value);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Настройки</h2>

            {/* Яркость */}
            <p className="text-gray-600">Яркость: {brightness}</p>
            <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={handleBrightnessChange}
                className="w-full"
            />

            {/* Громкость */}
            <p className="text-gray-600 mt-4">Громкость: {volume}</p>
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full"
            />

            {/* Язык */}
            <p className="text-gray-600 mt-4">Язык: {settings.language}</p>
        </div>
    );
}

export default SettingsInfo;
