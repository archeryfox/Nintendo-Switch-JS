import React from "react"; // Импортируем библиотеку React для создания компонентов

import GameList from "./GameList.jsx"; // Импортируем компонент GameList
import UserInfo from "./UserInfo.jsx"; // Импортируем компонент UserInfo
import SettingsInfo from "./SettingsInfo.jsx"; // Импортируем компонент SettingsInfo
import MenuInfo from "./MenuInfo.jsx"; // Импортируем компонент MenuInfo
import GameInfo from "./GameInfo.jsx"; // Импортируем компонент GameInfo
import SpecialInfo from "./SpecialInfo.jsx"; // Импортируем компонент SpecialInfo

// Компонент для отображения кнопок интерфейса
function InterfaceButtons({ openModal, user1, console1, game1, settings1, menu1, store1 }) { // Деструктурируем пропсы, получаем функции и объекты
    return (
        <div className="grid grid-cols-2 gap-4">
            <button
                onClick={() => openModal(<UserInfo user={user1} />)} // Обработчик клика, открывающий модальное окно с компонентом UserInfo
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out" // Стили для кнопки, в т.ч. анимация при наведении
            >
                Информация об игроке 
            </button>
            <button
                onClick={() => openModal(<SpecialInfo special={console1} />)} // Обработчик клика, открывающий модальное окно с компонентом SpecialInfo
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out" // Стили для кнопки, в т.ч. анимация при наведении
            >
                Специальные Возможности 
            </button>
            <button
                onClick={() => openModal(<GameInfo game={game1} />)} // Обработчик клика, открывающий модальное окно с компонентом GameInfo
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out" // Стили для кнопки, в т.ч. анимация при наведении
            >
                Информация об игре 
            </button>
            <button
                onClick={() => openModal(<SettingsInfo settings={settings1} />)} // Обработчик клика, открывающий модальное окно с компонентом SettingsInfo
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out" // Стили для кнопки, в т.ч. анимация при наведении
            >
                Настройки 
            </button>
            <button
                onClick={() => openModal(<MenuInfo menu={menu1} />)} // Обработчик клика, открывающий модальное окно с компонентом MenuInfo
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out" // Стили для кнопки, в т.ч. анимация при наведении
            >
                Меню 
            </button>
            <button
                onClick={() => openModal(<GameList games={store1.getGamesAvailable()} />)} // Обработчик клика, открывающий модальное окно с компонентом GameList, передавая доступные игры из store1
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out" // Стили для кнопки, в т.ч. анимация при наведении
            >
                Магазин игр 
            </button>
        </div>
    );
}

export default InterfaceButtons; // Экспортируем компонент для использования в других частях приложения
