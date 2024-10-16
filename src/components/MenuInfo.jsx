import React from "react";

// Компонент для отображения меню
function MenuInfo({ menu }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h1 className="text-xl font-bold text-gray-900 mb-2">Меню</h1>
            <ul className="list-disc list-inside text-gray-600">
                {menu.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MenuInfo;
