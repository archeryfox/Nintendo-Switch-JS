import React from "react";

function InterfaceButtons({openModal, user1, console1, game1, settings1, menu1, store1}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Кнопка для отображения информации о пользователе */}
            <button onClick={() => openModal(user1.toString())} className="btn text-white">
                Информация Об Игроке
            </button>

            {/* Кнопка для отображения информации о консоли */}
            <button onClick={() => openModal(console1.toString())} className="btn text-white">
                Информация о консоли
            </button>

            {/* Кнопка для отображения информации об игре */}
            <button onClick={() => openModal(game1.toString())} className="btn text-white">
                Информация об игре
            </button>

            {/* Кнопка для отображения настроек */}
            <button onClick={() => openModal(settings1.toString())} className="btn text-white">
                Настройки
            </button>

            {/* Кнопка для отображения меню */}
            <button onClick={() => openModal(menu1.toString())} className="btn text-white">
                Меню
            </button>

            {/* Кнопка для отображения информации о доступных играх */}
            <button onClick={() => openModal(store1.toString())} className="btn text-white">
                Информация об Играх
            </button>
        </div>
    );
}

export default InterfaceButtons;
