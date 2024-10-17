import React, { useEffect, useState } from "react";

const Modal = ({ content, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Устанавливаем видимость при монтировании

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false); // Убираем видимость при закрытии
        setTimeout(onClose, 200); // Уменьшено время ожидания до 200 мс
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleOverlayClick} // Обработчик клика на затемненную область
        >
            <div
                className={`bg-white text-black p-6 rounded shadow-lg w-full max-w-[50rem] transition-transform duration-200 ${
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
