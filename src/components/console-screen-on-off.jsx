import styles from "../Core.module.scss";
import viteLogo from "../../public/nintendo-switch.png";

export default function conScrOnOff(toggleButtons){
    return (
        <div>
            <button className={styles.button} onClick={toggleButtons}>
                On/Off
            </button>
            <div>
                <img src={viteLogo} className='w-[833px] h-[344.61px]' alt="GameConsole"/>
            </div>
        </div>
    )
}