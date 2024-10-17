import React from "react";
import GameList from "./GameList.jsx"; // Импортируем компонент GameList
import UserInfo from "./UserInfo.jsx"; // Импортируем компонент UserInfo
import ConsoleInfo from "./ConsoleInfo.jsx"; // Импортируем компонент ConsoleInfo
import SettingsInfo from "./SettingsInfo.jsx"; // Импортируем компонент SettingsInfo
import MenuInfo from "./MenuInfo.jsx"; // Импортируем компонент MenuInfo
import GameInfo from "./GameInfo.jsx";
import SpecialInfo from "./SpecialInfo.jsx";


function InterfaceButtons({ openModal, user1, console1, game1, settings1, menu1, store1 }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <button
                onClick={() => openModal(<UserInfo user={user1} />)}
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
            >
                Информация об игроке
            </button>
            <button
                onClick={() => openModal(<SpecialInfo special={console1} />)}
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
            >
                Специальные Возможности
            </button>
            <button
                onClick={() => openModal(<GameInfo game={game1} />)}
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
            >
                Информация об игре
            </button>
            <button
                onClick={() => openModal(<SettingsInfo settings={settings1} />)}
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
            >
                Настройки
            </button>
            <button
                onClick={() => openModal(<MenuInfo menu={menu1} />)}
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
            >
                Меню
            </button>
            <button
                onClick={() => openModal(<GameList games={store1.getGamesAvailable()} />)}
                className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
            >
                Магазин игр
            </button>
        </div>
    );
}

export default InterfaceButtons;
