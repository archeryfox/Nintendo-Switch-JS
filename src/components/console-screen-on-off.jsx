import styles from "../Core.module.scss";
import nintendoSwitchOff from "../../public/nintendo-switch-off.png";
import nintendoSwitchOn from "../../public/nintendo-switch-on.png";

export default function ConScrOnOff({ isConsoleOn, toggleConsole }) {
    return (
        <div className="flex flex-col items-center">
            {/* Кнопка для переключения состояния консоли и видимости кнопок */}
            <button className={styles.button} onClick={toggleConsole}>
                On/Off
            </button>
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
