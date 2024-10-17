import React from "react"; 
// Импортируем React, который необходим для работы с JSX и создания компонентов.

import System from "../data/System.js"; 
// Импортируем модуль System, который содержит описание системных характеристик. Проверяем правильность пути.

// Функция для отображения системных характеристик
const renderSystemInfo = (system) => {
    return (
        // Обертка для системной информации с отступом сверху
        <div className="mt-4">
            {/* Заголовок раздела с системной информацией */}
            <h3 className="text-lg font-semibold text-gray-800">Системные характеристики</h3>
            
            {/* Отображение FPS */}
            <p className="text-gray-600">FPS: {system.fps}</p>
            
            {/* Отображение частоты в герцах */}
            <p className="text-gray-600">Частота: {system.Hz}Hz</p>
            
            {/* Проверка и отображение, поддерживается ли HDR */}
            <p className="text-gray-600">HDR: {system.isHDR ? 'Да' : 'Нет'}</p>
            
            {/* Проверка и отображение наличия функции Remote Play */}
            <p className="text-gray-600">Remote Play: {system.remotePlay ? 'Да' : 'Нет'}</p>
            
            {/* Проверка и отображение поддержки Dolby Atmos */}
            <p className="text-gray-600">Dolby Atmos: {system.dolbyAtmosSound ? 'Да' : 'Нет'}</p>
        </div>
    );
};
// Эта функция получает объект system и отображает информацию о его характеристиках.

// Компонент для отображения информации о консоли
function ConsoleInfo({ console }) {
    return (
        // Основной блок с информацией о консоли, обрамленный стилями (отступы, фон, тени и закругленные углы)
        <div className="mb-4 mt-4 bg-white shadow-lg rounded-lg p-4 ">
            {/* Заголовок с информацией о консоли */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">Консоль</h2>
            
            {/* Отображение модели консоли */}
            <p className="text-gray-600">Модель: {console.model}</p>
            
            {/* Отображение объема памяти консоли */}
            <p className="text-gray-600">Память: {console.storage}GB</p>
            
            {/* Отображение версии программного обеспечения консоли */}
            <p className="text-gray-600">Версия ПО: {console.firmwareVersion}</p>

            {/* Если объект console является экземпляром класса System, вызываем функцию renderSystemInfo, иначе ничего не показываем */}
            {console instanceof System ? renderSystemInfo(console) : null}
        </div>
    );
}
// Этот компонент получает объект console и отображает его свойства. Если консоль является экземпляром System, выводятся также системные характеристики.

export default ConsoleInfo; 
// Экспортируем компонент ConsoleInfo для использования в других частях приложения.
