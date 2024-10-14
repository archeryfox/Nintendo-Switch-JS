import './App.css';
import Header from "./components/header.jsx";
import SideLeft from "./components/side-left.jsx";
import ConScrOnOff from "./components/console-screen-on-off.jsx";
import SideRight from "./components/side-right.jsx";
import Modal from "./components/modal.jsx";
import InterfaceButtons from "./components/interface-buttons.jsx";
import { useState } from "react";

import { user1, console1, game1, settings1, menu1, store1 } from "./data/config.js";

function App() {
    const [modalContent, setModalContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false); // Видимость кнопок

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleButtonsVisible = () => {
        setIsButtonVisible(prevState => !prevState); // Переключение видимости кнопок
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
                {isButtonVisible && (
                    <InterfaceButtons
                        openModal={openModal}
                        user1={user1}
                        console1={console1}
                        game1={game1}
                        settings1={settings1}
                        menu1={menu1}
                        store1={store1}
                    />
                )}

                {/* Модалка */}
                {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
            </div>
        </>
    );
}

export default App;
