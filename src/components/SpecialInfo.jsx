import React from "react";
import Special from "../data/Special.js"; // Убедитесь, что путь правильный
function SpecialInfo({ special }) {
    return (
        <div className="mb-4 mt-4 bg-white shadow-lg rounded-lg p-4 ">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Специальные Возможности</h2>
            <p className="text-gray-600">Версия ОС: {special.os}</p>
            <p className="text-gray-600">Год Выпуска: {special.year}GB</p>
            <p className="text-gray-600">Лицензия: {special.licens}</p>
        </div>
    );
}
export default SpecialInfo;