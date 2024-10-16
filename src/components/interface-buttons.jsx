import React from "react";
import GameList from "./GameList"; // Импортируем компонент GameList
import UserInfo from "./UserInfo"; // Импортируем компонент UserInfo
import ConsoleInfo from "./ConsoleInfo"; // Импортируем компонент ConsoleInfo
import SettingsInfo from "./SettingsInfo"; // Импортируем компонент SettingsInfo
import MenuInfo from "./MenuInfo"; // Импортируем компонент MenuInfo
import GameInfo from "./GameInfo.jsx";

function InterfaceButtons({ openModal, user1, console1, game1, settings1, menu1, store1 }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <button onClick={() => openModal(<UserInfo user={user1}/>)} className="btn text-white">
                Информация об игроке
            </button>
            <button onClick={() => openModal(<ConsoleInfo console={console1}/>)} className="btn text-white">
                Информация о консоли
            </button>
            <button onClick={() => openModal(<GameInfo game={game1}/>)} className="btn text-white">
                Информация об игре
            </button>
            <button onClick={() => openModal(<SettingsInfo settings={settings1}/>)} className="btn text-white">
                Настройки
            </button>
            <button onClick={() => openModal(<MenuInfo menu={menu1}/>)} className="btn text-white">
                Меню
            </button>
            <button onClick={() => openModal(<GameList games={store1.getGamesAvailable()}/>)}
                    className="btn text-white">
                Магазин игр
            </button>
        </div>
    );
}

export default InterfaceButtons;
