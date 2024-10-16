import React, { useState } from "react";

// Компонент для отображения настроек
function SettingsInfo({ settings }) {
    const [volume, setVolume] = useState(settings.volume);
    const [brightness, setBrightness] = useState(settings.brightness);
    const [isMusicOn, setIsMusicOn] = useState(settings.isMusicOn); // Состояние для музыки
    const [isSoundEffectsOn, setIsSoundEffectsOn] = useState(settings.isSoundEffectsOn); // Состояние для звуковых эффектов

    // Обработчики изменения громкости и яркости
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handleBrightnessChange = (event) => {
        setBrightness(event.target.value);
    };

    // Обработчики изменения состояния чекбоксов
    const handleMusicToggle = () => {
        setIsMusicOn((prev) => !prev);
    };

    const handleSoundEffectsToggle = () => {
        setIsSoundEffectsOn((prev) => !prev);
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

            {/* Чекбоксы для музыки и звуковых эффектов */}
            <div className="mt-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isMusicOn}
                        onChange={handleMusicToggle}
                        className="mr-2 w-6 h-6" // Увеличиваем размеры чекбоксов
                    />
                    <span className="text-gray-600">Включить музыку</span>
                </label>

                <label className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        checked={isSoundEffectsOn}
                        onChange={handleSoundEffectsToggle}
                        className="mr-2 w-6 h-6" // Увеличиваем размеры чекбоксов
                    />
                    <span className="text-gray-600">Включить звуковые эффекты</span>
                </label>
            </div>
        </div>
    );
}

export default SettingsInfo;
