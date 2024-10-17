import React from "react";
import Menu from "../data/Menu.js"; // Убедитесь, что импортируете класс Menu

// Компонент для отображения меню с кнопками
function MenuInfo({ menu }) {
    // Используем статический метод filterItems для фильтрации элементов меню
    const filteredItems = Menu.filterItems(menu.items);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Меню</h1>
            <ul className="list-disc list-inside text-gray-600">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 m-2 border-2 border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-500 ease-in-out"
                        >
                            {item}
                        </button>
                    ))
                ) : (
                    <p className="text-gray-600">Нет доступных элементов меню.</p>
                )}
            </ul>
        </div>
    );
}

export default MenuInfo;
