import './App.css'; // Стили для приложения
import Header from "./components/header.jsx"; // Компонент "Header" (заголовок)
import SideLeft from "./components/SideLeft.jsx"; // Левый блок
import ConScrOnOff from "./components/PowerButton.jsx"; // Компонент для включения/выключения экрана консоли
import SideRight from "./components/SideRight.jsx"; // Правый блок
import Modal from "./components/modal.jsx"; // Компонент модального окна
import InterfaceButtons from "./components/InterfaceButtons.jsx"; // Компонент для отображения кнопок интерфейса
import FavGame from "./components/FavGame.jsx"; // Компонент с избранными играми
import ToggleFavGameButton from "./components/ToggleFavGameButton.jsx"; // Компонент кнопки для показа/скрытия
import TutorialModal from "./components/TutorialModal.jsx"; // Импортируем компонент модального окна обучения
import ConsoleInfo from "./components/ConsoleInfo.jsx";

import { useState, useEffect } from "react"; // Хук useState для управления состоянием компонентов
import { user1, console1, game1, settings1, menu1, store1, system1 } from "./data/config.js"; // Импортируем данные для пользователя, консоли, игры и т.д.

function App() {
    const [modalContent, setModalContent] = useState(""); // Состояние для контента модалки
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления открытием/закрытием модалки
    const [isButtonVisible, setIsButtonVisible] = useState(false); // Состояние для управления видимостью кнопок интерфейса
    const [isFavGameVisible, setIsFavGameVisible] = useState(false); // Состояние для видимости блока с избранными играми
    const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(true); // Состояние для управления открытием/закрытием модального окна обучения
    const [isConsoleOn, setIsConsoleOn] = useState(false); // Состояние для управления изображением консоли

    const openModal = (content) => {
        setModalContent(content); // Устанавливаем контент для модалки
        setIsModalOpen(true); // Открываем модалку
    };

    const closeModal = () => {
        setIsModalOpen(false); // Закрываем модалку
    };

    const closeTutorialModal = () => {
        setIsTutorialModalOpen(false); // Закрываем модальное окно обучения
    };

    const toggleButtonsVisible = () => {
        setIsButtonVisible(prevState => !prevState); // Переключаем видимость кнопок
    };

    const toggleFavGame = () => {
        setIsFavGameVisible(prevState => !prevState); // Переключаем видимость блока с играми
    };

    const toggleConsole = () => {
        setIsConsoleOn(prevState => !prevState); // Переключаем изображение консоли
        toggleButtonsVisible(); // Переключаем видимость кнопок интерфейса
    };

    return (
        <>
            <Header />
            <div className='flex justify-between'>
                <SideLeft />
                {/* Передаем состояние и функцию управления в ConScrOnOff */}
                <ConScrOnOff isConsoleOn={isConsoleOn} toggleConsole={toggleConsole} />
                <SideRight />
            </div>
            <div className="flex flex-col items-center justify-center text-blue-950">

                {isConsoleOn && <ConsoleInfo console={system1} />}
                {/* Кнопки интерфейса будут видны, если isButtonVisible = true */}
                <div
                    className={`transition-opacity duration-500 ${isButtonVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <InterfaceButtons
                        openModal={openModal}
                        user1={user1}
                        console1={console1}
                        game1={game1}
                        settings1={settings1}
                        menu1={menu1}
                        store1={store1}
                        system1={system1}
                    />
                </div>

                {/* Модалка для обучения */}
                {isTutorialModalOpen && <TutorialModal onClose={closeTutorialModal} />}

                {/* Модалка */}
                {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
            </div>

            {/* Кнопка для показа/скрытия компонента FavGame */}
            <ToggleFavGameButton toggleFavGame={toggleFavGame} isFavGameVisible={isFavGameVisible} />

            {/* Анимация плавного показа/скрытия блока с играми */}
            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isFavGameVisible ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                <FavGame />
            </div>
        </>
    );
}

export default App;
