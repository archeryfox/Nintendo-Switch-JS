// src/components/ConsoleInfo.jsx
import React from "react";
import System from "../data/System.js"; // Убедитесь, что путь правильный

// Функция для отображения системных характеристик
const renderSystemInfo = (system) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Системные характеристики</h3>
            <p className="text-gray-600">FPS: {system.fps}</p>
            <p className="text-gray-600">Частота: {system.Hz}Hz</p>
            <p className="text-gray-600">HDR: {system.isHDR ? 'Да' : 'Нет'}</p>
            <p className="text-gray-600">Remote Play: {system.remotePlay ? 'Да' : 'Нет'}</p>
            <p className="text-gray-600">Dolby Atmos: {system.dolbyAtmosSound ? 'Да' : 'Нет'}</p>
        </div>
    );
};

// Компонент для отображения информации о консоли
function ConsoleInfo({ console }) {
    return (
        <div className="mb-4 mt-4 bg-white shadow-lg rounded-lg p-4 ">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Консоль</h2>
            <p className="text-gray-600">Модель: {console.model}</p>
            <p className="text-gray-600">Память: {console.storage}GB</p>
            <p className="text-gray-600">Версия ПО: {console.firmwareVersion}</p>

            {/* Выводим системные характеристики, если это экземпляр System */}
            {console instanceof System ? renderSystemInfo(console) : null}
        </div>
    );
}

export default ConsoleInfo;
