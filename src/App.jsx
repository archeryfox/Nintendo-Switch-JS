import './App.css';
import Header from "./components/header.jsx";
import sideLeft from "./components/side-left.jsx";
import conScrOnOff from "./components/console-screen-on-off.jsx";
import sideRight from "./components/side-right.jsx";
import Modal from "./components/modal.jsx";
import InterfaceButtons from "./components/interface-buttons.jsx"; // Импортируем новый компонент
import { useState } from "react";

import { user1, console1, game1, settings1, menu1, store1 } from "./data/config.js";

function App() {
    const [modalContent, setModalContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleButtonsVisible = () => {
        setIsButtonVisible(prevState => !prevState);
    }

    return (
        <>
            {Header()}
            <div className='flex justify-between'>
                {sideLeft()}
                {conScrOnOff(toggleButtonsVisible)}
                {sideRight()}
            </div>
            <div className="flex flex-col items-center justify-center text-blue-950">
                <h1 className="text-4xl font-bold mb-8">Интерфейс Консоли</h1>

                <InterfaceButtons
                    openModal={openModal}
                    user1={user1}
                    console1={console1}
                    game1={game1}
                    settings1={settings1}
                    menu1={menu1}
                    store1={store1}
                />

                {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
            </div>
        </>
    );
}

export default App;
