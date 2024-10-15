import React from "react";
import GameList from "./GameList"; // Импортируем компонент GameList

function InterfaceButtons({openModal, user1, console1, game1, settings1, menu1, store1}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <button onClick={() => openModal(user1.toString())} className="btn text-white">
                Информация Об Игроке
            </button>
            <button onClick={() => openModal(console1.toString())} className="btn text-white">
                Информация о консоли
            </button>
            <button onClick={() => openModal(game1.toString())} className="btn text-white">
                Информация об игре
            </button>
            <button onClick={() => openModal(settings1.toString())} className="btn text-white">
                Настройки
            </button>
            <button onClick={() => openModal(menu1.toString())} className="btn text-white">
                Меню
            </button>
            {/* При нажатии на кнопку "Магазин", открываем модалку с списком игр */}
            <button onClick={() => openModal(<GameList games={store1.getGamesAvailable()}/>)}
                    className="btn text-white">
                Магазин игр
            </button>
        </div>
    );
}

export default InterfaceButtons;