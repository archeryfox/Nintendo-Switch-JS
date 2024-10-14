import './App.css'
import Header from "./components/header.jsx";
import sideLeft from "./components/side-left.jsx";
import conScrOnOff from "./components/console-screen-on-off.jsx";
import sideRight from "./components/side-right.jsx";
import Console from "./data/console.jsx";
import User from "./data/user.jsx";
import Menu from "./data/menu.jsx";
import Settings from "./data/settings.jsx";
import Game from "./data/game.jsx";
import Store from "./data/store.jsx";
import Modal from "./components/modal.jsx";
import {useState} from "react";
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

    // Примеры объектов
    const user1 = new User("Player1", 15, 120);
    const console1 = new Console("Xtreme 2024", 1000, "v1.05");
    const game1 = new Game("Space Invaders", "Arcade", 9);
    const settings1 = new Settings(80, 50, "English");
    const menu1 = new Menu(["Start", "Settings", "Help"]);
    const store1 = new Store(["Space Invaders", "Racing Pro", "Fantasy RPG"], "USD");


    return (
        <>
          {Header()}
          <div className='flex justify-between'>
              {sideLeft()}
              {conScrOnOff(toggleButtonsVisible)}
              {sideRight()}
          </div>
            {isButtonVisible && (
                <div className="flex flex-col items-center justify-center text-white p-2">
                    <div className="grid grid-cols-3 gap-4">
                        <button onClick={() => openModal(user1.toString())} className="btn text-blue-950">Show User
                            Info
                        </button>
                        <button onClick={() => openModal(console1.toString())} className="btn text-blue-950">Show
                            Console Info
                        </button>
                        <button onClick={() => openModal(game1.toString())} className="btn text-blue-950">Show Game
                            Info
                        </button>
                        <button onClick={() => openModal(settings1.toString())} className="btn text-blue-950">Show
                            Settings
                        </button>
                        <button onClick={() => openModal(menu1.toString())} className="btn text-blue-950">Show Menu
                        </button>
                        <button onClick={() => openModal(store1.toString())} className="btn text-blue-950">Show Store
                            Info
                        </button>
                    </div>

                    {isModalOpen && <Modal content={modalContent} onClose={closeModal}/>}
                </div>
            )}

        </>
    )
}

export default App
