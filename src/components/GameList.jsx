import React from "react";

// Компонент для отображения списка игр
function GameList({games}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-indigo-400 cursor-pointer"
                >
                    <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h2>
                        <p className="text-gray-600">Жанр: {game.genre}</p>
                        <p className="text-gray-600">Рейтинг: {game.rating}/10</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GameList;
