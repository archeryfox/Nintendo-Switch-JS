import React from "react";

function InterfaceButtons({ openModal, user1, console1, game1, settings1, menu1, store1 }) {
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
            <button onClick={() => openModal(store1.toString())} className="btn text-white">
                Информация об Играх
            </button>
        </div>
    );
}

export default InterfaceButtons;
