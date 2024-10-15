import styles from "../Core.module.scss";
import viteLogo from "../../public/nintendo-switch.png";

export default function ConScrOnOff({toggleButtons}) {
    return (
        <div className="flex flex-col items-center">
            {/* Кнопка для переключения видимости кнопок */}
            <button className={styles.button} onClick={toggleButtons}>
                On/Off
            </button>
            <div>
                <img src={viteLogo} className='w-[833px] h-[344.61px]' alt="GameConsole"/>
            </div>
        </div>
    );
}
