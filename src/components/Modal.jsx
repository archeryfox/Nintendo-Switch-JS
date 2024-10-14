import React, { useEffect, useState } from "react";

const Modal = ({ content, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Устанавливаем видимость при монтировании
    }, []);

    const handleClose = () => {
        setIsVisible(false); // Убираем видимость при закрытии
        setTimeout(onClose, 200); // Уменьшено время ожидания до 200 мс
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
                className={`bg-white text-black p-6 rounded shadow-lg max-w-lg w-full transition-transform duration-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
            >
                <p>{content}</p>
                <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;
