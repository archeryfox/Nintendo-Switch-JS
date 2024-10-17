import React from "react"; // Импортируем библиотеку React для создания компонентов

// Компонент для отображения списка игр
function GameList({ games }) { // Деструктурируем пропсы и получаем массив игр
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {games.map((game, index) => ( // Итерируемся по массиву игр, создавая элемент для каждой игры
                <div
                    key={index} // Уникальный ключ для каждого элемента списка, чтобы React мог отслеживать изменения
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-indigo-400 cursor-pointer w-full max-w-lg p-6" // Стили для элемента игры с анимацией и эффектами при наведении
                >
                    <img
                        src={game.image} // URL изображения игры
                        alt={game.title} // Альтернативный текст для изображения
                        className="bg-contain w-full h-50" // Стили для изображения, чтобы оно занимало всю ширину контейнера и имело заданную высоту
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h2>
                        <p className="text-gray-600">Жанр: {game.genre}</p> 
                        <p className="text-gray-600">Оценка: {game.rating}/10</p> 
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GameList; // Экспортируем компонент для использования в других частях приложения
