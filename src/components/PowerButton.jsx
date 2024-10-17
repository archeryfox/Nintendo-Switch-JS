import styles from "../Core.module.scss";
import nintendoSwitchOff from "../../public/nintendo-switch-off.png";
import nintendoSwitchOn from "../../public/nintendo-switch-on.png";
import iconOnOff from "../../public/on-off.svg"
import React from "react";

export default function ConScrOnOff({ isConsoleOn, toggleConsole }) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <button className={styles.button_volume}>
                    +
                </button>
                {/* Кнопка для переключения состояния консоли и видимости кнопок */}
                <button className={styles.button} onClick={toggleConsole}>
                    <img src={iconOnOff} className="w-10 h-10"/>
                </button>
                <button className={styles.button_volume}>
                    -
                </button>
            </div>

            {/* Изображение консоли, которое меняется в зависимости от состояния */}
            <div>
                <img
                    src={isConsoleOn ? nintendoSwitchOn : nintendoSwitchOff}
                    className='w-[833px] h-[344.61px]'
                    alt="GameConsole"
                />
            </div>
        </div>
    );
}