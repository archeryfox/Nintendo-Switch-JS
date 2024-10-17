// TutorialModal.jsx
import React from 'react';
import Modal from './Modal.jsx'; // Импортируем основной компонент модального окна
import video from '../assets/video.mp4'; // Импортируем видеофайл

const GuideModal = ({ isOpen, onClose }) => {
    const content = (
        <div>
            <h2 className="text-lg font-bold text-center">Добро пожаловать!</h2>
            <p className="mb-2 text-center">Хотите посмотреть ознакомительный ролик с гайдом о сайте?</p>
            <div className="flex justify-center">
                <video width="100%" controls className="max-w-full">
                    <source src={video} type="video/mp4" /> {/* Используем импортированное видео */}
                    Ваш браузер не поддерживает воспроизведение видео.
                </video>
            </div>
        </div>
    );

    return (
        <Modal content={content} onClose={onClose} />
    );
};

export default GuideModal;

