import React from "react";

// Компонент для отображения информации о консоли
function ConsoleInfo({ console }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Консоль</h2>
            <p className="text-gray-600">Модель: {console.model}</p>
            <p className="text-gray-600">Память: {console.storage}</p>
            <p className="text-gray-600">Версия ПО: {console.firmwareVersion}</p>
        </div>
    );
}

export default ConsoleInfo;
