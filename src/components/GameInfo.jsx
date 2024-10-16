import React from "react";

// Компонент для отображения информации об игре
function GameInfo({ game }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Игра</h2>
            <p className="grid grid-cols-2 gap-4 py-1">
                Название: <span className="border border-indigo-400 rounded-lg px-2 py-1">{game.title}</span>
            </p>
            <p className="grid grid-cols-2 gap-4 py-1">
                Жанр: <span className="border border-indigo-400 rounded-lg px-2 py-1">{game.genre}</span>
            </p>
            <p className="grid grid-cols-2 gap-4 py-1">
                Ачивок: <span className="border border-indigo-400 rounded-lg px-2 py-1">{game.rating}/100</span>
            </p>
            <p className="grid grid-cols-2 gap-4 py-1">
                Часов в игре: <span className="border border-indigo-400 rounded-lg px-2 py-1">{game.hours}</span>
            </p>
            <p className="grid grid-cols-2 gap-4 py-1">
                Релиз: <span className="border border-indigo-400 rounded-lg px-2 py-1">{game.realis}</span>
            </p>
        </div>
    );
}

export default GameInfo;
