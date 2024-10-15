// TutorialModal.jsx
import React from 'react';
import Modal from './modal.jsx'; // Импортируем основной компонент модального окна
import video from '../assets/video.mp4'; // Импортируем видеофайл

const TutorialModal = ({ onClose }) => {
    return (
        <Modal
            onClose={onClose}
            content={
                <div>
                    <h2 className="text-2xl font-bold mb-4">Добро пожаловать в консоль!</h2>
                    <p className="mb-4">Это краткое руководство по использованию интерфейса:</p>
                    <video width="600" controls className="mb-4">
                        <source src={video} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                    <p>Надеемся, вам понравится наш интерфейс!</p>
                </div>
            }
        />
    );
};

export default TutorialModal;
