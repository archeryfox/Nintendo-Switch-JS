import './App.css'; // Стили для приложения
import Header from "./components/Header.jsx"; // Компонент "Header" (заголовок)
import SideLeft from "./components/Side-left.jsx"; // Левый блок
import ConScrOnOff from "./components/Console-screen-on-off.jsx"; // Компонент для включения/выключения экрана консоли
import SideRight from "./components/Side-right.jsx"; // Правый блок
import Modal from "./components/modal.jsx"; // Компонент модального окна
import InterfaceButtons from "./components/Interface-buttons.jsx"; // Компонент для отображения кнопок интерфейса

import { useState } from "react"; // Хук useState для управления состоянием компонентов
import { user1, console1, game1, settings1, menu1, store1 } from "./data/Config.js"; // Импортируем данные для пользователя, консоли, игры и т.д.

function App() {
    const [modalContent, setModalContent] = useState(""); // Состояние для контента модалки
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления открытием/закрытием модалки
    const [isButtonVisible, setIsButtonVisible] = useState(false); // Состояние для управления видимостью кнопок интерфейса

    const openModal = (content) => {
        setModalContent(content); // Устанавливаем контент для модалки
        setIsModalOpen(true); // Открываем модалку
    };

    const closeModal = () => {
        setIsModalOpen(false); // Закрываем модалку
    };

    const toggleButtonsVisible = () => {
        setIsButtonVisible(prevState => !prevState); // Переключаем видимость кнопок
    };

    return (
        <>
            <Header />
            <div className='flex justify-between'>
                <SideLeft />
                {/* Используем JSX синтаксис для компонента и передаем функцию как проп */}
                <ConScrOnOff toggleButtons={toggleButtonsVisible} />
                <SideRight />
            </div>
            <div className="flex flex-col items-center justify-center text-blue-950">
                <h1 className="text-4xl font-bold mb-8">Интерфейс Консоли</h1>

                {/* Кнопки интерфейса будут видны, если isButtonVisible = true */}
                <div className={`transition-opacity duration-500 ${isButtonVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <InterfaceButtons
                        openModal={openModal}
                        user1={user1}
                        console1={console1}
                        game1={game1}
                        settings1={settings1}
                        menu1={menu1}
                        store1={store1}
                    />
                </div>

                {/* Модалка */}
                {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
            </div>
        </>
    );
}

export default App;
